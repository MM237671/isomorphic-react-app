import express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import routes from '../app/routes.js';
import configureStore from '../app/store/configureStore';
import config from '../config/index';

const sm = require('sitemap');
const initValues = require('./exhibitions.json');
const sitemapData = require('./sitemap.json');
const sitemapYandexData = require('./sitemapYandex.json');
const metaData = require('./metaData.json');
const app = express();


const sitemap = sm.createSitemap(sitemapData);
const sitemapYandex = sm.createSitemap(sitemapYandexData);


app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});
app.get('/sitemapYandex.xml', (req, res) => {
  sitemapYandex.toXML((err, xml) => {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});
app.use('/static', express.static('public/static'));
app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (!renderProps) {
      res.status(404).send('Not found');
    } else {
      const store = configureStore(initValues);
      const componentHTML = ReactDOM.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      const initialState = store.getState();
      const metaInfo = metaData[req.originalUrl] ? metaData[req.originalUrl] : metaData['/'];
      const html = renderHTML({
        componentHTML,
        initialState,
        metaInfo,
        conf: config
      });
      res.end(html);
    }
  });
});

function renderHTML({ componentHTML, initialState, metaInfo, conf }) {
  return `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset='utf-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <meta name='description' content='${metaInfo.description}'>
          <meta name='author' content='Художники из города Таруса'>
          <meta name='yandex-verification' content='2ac2f3c613df230d' />
          <meta name="yandex-verification" content="bcc658cda643d1c2" />
          <meta name="yandex-verification" content="7b98854cc3a57aa9" />
          <link rel='shortcut icon' href='/static/i/cat.ico'/>
          <title>${metaInfo.title}</title>
          <link rel='stylesheet' href='${conf.staticHost}/build/main.css'>
      </head>
      <body>
      <div id='app'>${componentHTML}</div>
        <script type='application/javascript'>
          window.__CONFIG__ = ${JSON.stringify(config)};
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type='application/javascript' src='${conf.staticHost}/build/main.js'></script>
      </body>
      </html>
  `;
}

const PORT = process.env.PORT || 8081;

const server = require('http').createServer(app);

server.listen(PORT, () => {
  console.log('Example app listening at http://localhost:%s', PORT);
});
