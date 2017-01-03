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
const app = express();


const sitemap = sm.createSitemap({
  hostname: 'http://remesel.ru',
  cacheTime: 600000,
  urls: [
    { url: '/' },
    { url: '/places' },
    { url: '/exhibition/kaluga-Chuprun-2016' },
    { url: '/exhibition/polenovo2016-2017',
      img: [
        {
          url: '/static/i/enamel.jpg',
          caption: 'Эмаль, автор - Пилипенко Михаил'
        },
        {
          url: '/static/i/sculpt.jpg',
          caption: 'Скульптура дерево/тонировка, автор - Пилипенко Сергей'
        },
        {
          url: '/static/i/paint.jpg',
          caption: 'Живопись холст/масло, автор - Пилипенко Михаил'
        },
        {
          url: '/static/i/batik.jpg',
          caption: 'Батик, автор - Пилипенко Виктория'
        }
      ]
    },
    { url: '/artist/PilipenkoTonya',
      img: [
        {
          url: '/works/tonya/Дом у реки_бум,акв_20x27_2008.JPG',
          caption: 'Дом у реки - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Изумрудные деревья_бум,акв_31х42,2_2012.jpg',
          caption: 'Изумрудные деревья - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Отражение_бум, акв_19,3х29,5_Суздаль2014.jpg',
          caption: 'Отражение - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Половодье на Таруске_бум,акв,пастель_25,9х41,2_2010.jpg',
          caption: 'Половодье на Таруске - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Свежий снег_бум,акв,гуашь_33,3х41_2011.JPG',
          caption: 'Свежий снег - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Тихий вечер_бум,акв_32х24_Суздаль2011.jpg',
          caption: 'Тихий вечер - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/Японский натюрморт_бум,акв_2010.jpg',
          caption: 'Японский натюрморт - бумага/акварель, Пилипенко Антонина'
        },
        {
          url: '/works/tonya/2016-07-03 14-26-08.JPG',
          caption: 'Белые цветы - бумага/акварель, Пилипенко Антонина'
        }
      ]
    },
    { url: '/artist/PilipenkoMihail',
      img: [
        {
          url: '/works/miha/IMG_1970.JPG',
          caption: 'Домик художников И.Старженецкой и А.Комелина, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1971.JPG',
          caption: 'Снег выпал, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1972.JPG',
          caption: 'Зимние деревья, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1973.JPG',
          caption: 'Осеннее утро, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1974.JPG',
          caption: 'Погода меняется, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1975.JPG',
          caption: 'Вечереет, холст/масло, Пилипенко Михаил'
        },
        {
          url: '/works/miha/IMG_1976.JPG',
          caption: 'Первый снег, холст/масло, Пилипенко Михаил'
        }
      ]
    },
    { url: '/artist/PilipenkoViktoriya' },
    { url: '/artist/PilipenkoSergey' },
    { url: '/artist/RostemberskayaGalina' }
  ]
});


app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
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
      const metaData = {
        '/': {
          description: 'Работы художников из города Таруса, Художники Тарусы',
          title: 'Работы художников из города Таруса'
        },
        '/exhibition': {
          description: 'Выставки художников из города Таруса',
          title: 'Выставки художников из города Таруса'
        },
        '/places': {
          description: 'Салоны и галереи. Москва Таруса Галереи Музеи Выставки',
          title: 'Салоны и галереи - Художники Тарусы - Купить работы'
        },
        '/exhibition/polenovo2016-2017': {
          description: 'Выставка - Художественные династии России - Поленово - Художники Ростемберская, Пилипенко',
          title: 'Художественные династии России - Семья Художников Ростемберских - Пилипенко'
        },
        '/exhibition/kaluga-Chuprun-2016': {
          description: 'Выставка памяти Владимира Чупруна',
          title: 'Выставка памяти Владимира Чупруна'
        },
        '/artist/PilipenkoTonya': {
          description: 'Живопись акварель/пастель, Художники Тарусы, Пилипенко Антонина',
          title: 'Пилипенко Антонина - акварель/пастель'
        },
        '/artist/PilipenkoMihail': {
          description: 'Живопись холст/масло, горячая эмаль, Художники Тарусы, Пилипенко Михаил',
          title: 'Пилипенко Михаил - живопись (холст/масло), горячая эмаль'
        },
        '/artist/PilipenkoViktoriya': {
          description: 'Батик (роспись по шелку), Художники Тарусы, Пилипенко Виктория',
          title: 'Пилипенко Виктория - батик (роспись по шелку)'
        },
        '/artist/PilipenkoSergey': {
          description: 'Скульптура (дерево/тонировка), Художники Тарусы, Пилипенко Сергей',
          title: 'Пилипенко Сергей - скульптура (дерево/тонировка)'
        },
        '/artist/RostemberskayaGalina': {
          description: 'Живопись (холст/масло), Художники Тарусы, Ростемберская Галина',
          title: 'Ростемберская Галина - живопись (холст/масло)'
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
          <meta charset='utf-8'>
          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
          <meta name='description' content='${metaInfo.description}'>
          <meta name='author' content='Художники из города Таруса'>
          <meta name='yandex-verification' content='2ac2f3c613df230d' />
          <meta name="yandex-verification" content="bcc658cda643d1c2" />
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
