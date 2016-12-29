import express from 'express';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import routes from '../app/routes.js';
import configureStore from '../app/store/configureStore';
import config from '../config/index';


const initValues = require('./exhibitions.json');
const app = express();

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
      const metaData = {
        '/': {
          description: 'Работы художников - ремесленников из города Таруса',
          title: 'Работы художников из города Таруса',
          keywords: 'Художник,Таруса,Живопись,Графика,Эмаль,Скульптура,Батик,Ремесло,Холст,Масло,Дерево,Шелк,Роспись',
        },
        '/exhibition': {
          description: 'Выставки художников из города Таруса',
          title: 'Выставки художников из города Таруса',
          keywords: 'Выставка,Художник,Таруса,Живопись,Графика,Эмаль,Скульптура,Батик,Ремесло,Холст,Масло,Дерево,Шелк,Роспись',
        },
        '/exhibition/polenovo2016-2017': {
          description: 'Выставка - Художественные династии России - Поленово - Художники Ростемберская, Пилипенко',
          title: 'Художественные династии России - Семья Художников Ростемберских - Пилипенко',
          keywords: 'Поленово,Семейная выставка,Художественные династии России,Ростемберская,Пилипенко,Выставка,Таруса,Живопись,Графика,Эмаль,Скульптура,Батик,Холст,Масло,Дерево,Шелк,Роспись',
        },
        '/artist/PilipenkoTonya': {
          description: 'Художник Пилипенко Антонина - живопись акварель/пастель Художники из города Таруса',
          title: 'Пилипенко Антонина - акварель/пастель',
          keywords: 'Пилипенко Антонина,Таруса,Живопись,Акварель,Пастель,',
        },
        '/artist/PilipenkoMihail': {
          description: 'Художник Пилипенко Михаил - живопись холст/масло, горячая эмаль, Художники из города Таруса',
          title: 'Пилипенко Михаил - живопись (холст/масло), горячая эмаль',
          keywords: 'Пилипенко Михаил,Таруса,Живопись,Эмаль,Холст,Масло',
        },
        '/artist/PilipenkoViktoriya': {
          description: 'Художник Пилипенко Виктория - батик (роспись по шелку), Художники из города Таруса',
          title: 'Пилипенко Виктория - батик (роспись по шелку)',
          keywords: 'Пилипенко Виктория,Таруса,Батик,Роспись,Шелк',
        },
        '/artist/PilipenkoSergey': {
          description: 'Художник Пилипенко Сергей - скульптура (дерево/тонировка), Художники из города Таруса',
          title: 'Пилипенко Сергей - скульптура (дерево/тонировка)',
          keywords: 'Пилипенко Сергей,Таруса,Скульптура,Дерево,Тонировка',
        },
        '/artist/RostemberskayaGalina': {
          description: 'Художник Ростемберская Галина - живопись (холст/масло), Художники из города Таруса',
          title: 'Ростемберская Галина - живопись (холст/масло)',
          keywords: 'Ростемберская Галина,Таруса,Живопись,Холст,Масло',
        }
      };
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
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="description" content="${metaInfo.description}">
          <meta name="keywords" content="${metaInfo.keywords}">
          <meta name="author" content="Художники из города Таруса">
          <meta name="yandex-verification" content="2ac2f3c613df230d" />
          <link rel="shortcut icon" href="/static/i/cat.png"/>
          <title>${metaInfo.title}</title>
          <link rel="stylesheet" href="${conf.staticHost}/build/main.css">
      </head>
      <body>
      <div id="app">${componentHTML}</div>
        <script type="application/javascript">
          window.__CONFIG__ = ${JSON.stringify(config)};
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type="application/javascript" src="${conf.staticHost}/build/main.js"></script>
      </body>
      </html>
  `;
}

const PORT = process.env.PORT || 8081;

const server = require('http').createServer(app);

server.listen(PORT, () => {
  console.log('Example app listening at http://localhost:%s', PORT);
});
