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
          caption: 'Художник город Таруса',
          title: 'Эмаль, автор - Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/i/sculpt.jpg',
          caption: 'Художник город Таруса',
          title: 'Скульптура дерево/тонировка, автор - Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/i/paint.jpg',
          caption: 'Художник город Таруса',
          title: 'Живопись холст/масло, автор - Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/i/batik.jpg',
          caption: 'Художник город Таруса',
          title: 'Батик, автор - Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        }
      ]
    },
    { url: '/artist/PilipenkoTonya',
      img: [
        {
          url: '/static/works/tonya/Дом у реки_бум,акв_20x27_2008.JPG',
          caption: 'Художник город Таруса',
          title: 'Дом у реки - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Изумрудные деревья_бум,акв_31х42,2_2012.jpg',
          caption: 'Художник город Таруса',
          title: 'Изумрудные деревья - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Отражение_бум, акв_19,3х29,5_Суздаль2014.jpg',
          caption: 'Художник город Таруса',
          title: 'Отражение - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Половодье на Таруске_бум,акв,пастель_25,9х41,2_2010.jpg',
          caption: 'Художник город Таруса',
          title: 'Половодье на Таруске - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Свежий снег_бум,акв,гуашь_33,3х41_2011.JPG',
          caption: 'Художник город Таруса',
          title: 'Свежий снег - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Тихий вечер_бум,акв_32х24_Суздаль2011.jpg',
          caption: 'Художник город Таруса',
          title: 'Тихий вечер - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/Японский натюрморт_бум,акв_2010.jpg',
          caption: 'Художник город Таруса',
          title: 'Японский натюрморт - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/tonya/2016-07-03 14-26-08.JPG',
          caption: 'Художник город Таруса',
          title: 'Белые цветы - бумага/акварель, Пилипенко Антонина',
          geoLocation: 'Город Таруса Калужская область'
        }
      ]
    },
    { url: '/artist/PilipenkoMihail',
      img: [
        {
          url: '/static/works/miha/IMG_1970.JPG',
          caption: 'Художник город Таруса',
          title: 'Домик художников И.Старженецкой и А.Камелина, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1971.JPG',
          caption: 'Художник город Таруса',
          title: 'Снег выпал, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1972.JPG',
          caption: 'Художник город Таруса',
          title: 'Зимние деревья, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1973.JPG',
          caption: 'Художник город Таруса',
          title: 'Осеннее утро, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1974.JPG',
          caption: 'Художник город Таруса',
          title: 'Погода меняется, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1975.JPG',
          caption: 'Художник город Таруса',
          title: 'Вечереет, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/miha/IMG_1976.JPG',
          caption: 'Художник город Таруса',
          title: 'Первый снег, холст/масло, Пилипенко Михаил',
          geoLocation: 'Город Таруса Калужская область'
        }
      ]
    },
    { url: '/artist/PilipenkoViktoriya',
      img: [
        {
          url: '/static/works/viktoriya/2016-06-03 10-34-58.JPG',
          caption: 'Художник город Таруса',
          title: 'Букет с купальницами, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/viktoriya/2016-06-03 10-35-26.JPG',
          caption: 'Художник город Таруса',
          title: 'Букет с анемонами, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/viktoriya/2016-06-03 10-35-48.JPG',
          caption: 'Художник город Таруса',
          title: 'Незабудки, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/viktoriya/IMG_0312.JPG',
          caption: 'Художник город Таруса',
          title: 'Синяя птица, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/viktoriya/IMG_9337.JPG',
          caption: 'Художник город Таруса',
          title: 'Любимый сад, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/viktoriya/IMG_9837.JPG',
          caption: 'Художник город Таруса',
          title: 'В одуванчиках, батик (роспись по шелку), Пилипенко Виктория',
          geoLocation: 'Город Таруса Калужская область'
        }
      ]
    },
    { url: '/artist/PilipenkoSergey',
      img: [
        {
          url: '/static/works/sergey/IMG_0966.JPG',
          caption: 'Художник город Таруса',
          title: 'Кот на прогулке - шкатулка, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_0966.JPG',
          caption: 'Художник город Таруса',
          title: 'В траве сидел кузнечик - комодик, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_1042.JPG',
          caption: 'Художник город Таруса',
          title: 'Заяц в тюльпанах - комодик, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_1555.JPG',
          caption: 'Художник город Таруса',
          title: 'Под небом голубым - лавка, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_1832.JPG',
          caption: 'Художник город Таруса',
          title: 'Наш рыжий кот которому везет - комодик, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_1957.JPG',
          caption: 'Художник город Таруса',
          title: 'Огне-гривый лев - комодик, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        },
        {
          url: '/static/works/sergey/IMG_2036.JPG',
          caption: 'Художник город Таруса',
          title: 'По рассказу Куприна Олеся - комод, дерево/тонировка, автор Пилипенко Сергей',
          geoLocation: 'Город Таруса Калужская область'
        }
      ]
     },
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
