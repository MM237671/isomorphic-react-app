import express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import routes from '../app/routes.jsx';
import configureStore from '../app/store/configureStore';
import clientConfig from '../etc/client-config.json';

const app = express();

app.use('/static', express.static('app/static'));

app.use((req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.send(500, error.message);
    } else if (!renderProps) {
      res.send(404, 'Not found');
    } else {
      const store = configureStore();
      const componentHTML = ReactDOM.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );
      const initialState = store.getState();
      const metaData = {};
      const html = renderHTML({
        componentHTML,
        initialState,
        metaData,
        config : clientConfig
      });
      res.end(html);
    }
  });
});

function renderHTML({ componentHTML, initialState, metaData, config }) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" href="/static/favicon.ico"/>
            <title>Simple</title>
            <link rel="stylesheet" href="${config.staticUrl}/static/build/main.css">
        </head>
        <body>
        <div id="app">${componentHTML}</div>
          <script type="application/javascript">
            window.__CONFIG__ = ${JSON.stringify(config)};
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
          </script>
          <script type="application/javascript" src="${config.staticUrl}/static/build/main.js"></script>
        </body>
        </html>
    `;
}

const PORT = process.env.PORT || 3000;
if (typeof(PhusionPassenger) != 'undefined') {
  PhusionPassenger.configure({ autoInstall: false });
}

const server = require('http').createServer(app);

if (typeof(PhusionPassenger) != 'undefined') {
  server.listen('passenger');
} else {
  server.listen(PORT, function () {
    console.log('Example app listening at http://localhost:%s', PORT);
  });
}
