import React, { Component } from 'react';
import { Link } from 'react-router';

import config from '../../config';
import Lightbox from './helpers/lightbox';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.onClickImage = this.onClickImage.bind(this);
    this.onCloseLightBox = this.onCloseLightBox.bind(this);
    this.state = {
      lightbox: false,
      images: [
        `${config.staticUrl}/i/enamel.jpg`,
        `${config.staticUrl}/i/sculpt.jpg`,
        `${config.staticUrl}/i/paint.jpg`,
        `${config.staticUrl}/i/batik.jpg`
      ]
    };
  }

  onClickImage = (img) => {
    this.setState({
      lightbox: img
    });
  }

  onCloseLightBox = () => {
    this.setState({
      lightbox: false
    });
  }

  render() {
    const { lightbox } = this.state;
    const lightboxElement = lightbox ? (
      <Lightbox
        images={this.state.images}
        startIndex={this.state.images.indexOf(lightbox)}
        onCloseRequest={this.onCloseLightBox}
      />
    ) : null;

    return (
      <section className="content">
        {lightboxElement}
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>Эмаль</em></h3>
            <div className="text-center">
              <img onClick={this.onClickImage.bind(null, `${config.staticUrl}/i/enamel.jpg`)} src={`${config.staticUrl}/i/enamel.jpg`} title="Эмаль, автор - Пилипенко Михаил" alt="Эмаль, автор - Пилипенко Михаил" />
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>Скульптура</em></h3>
            <div className="text-center">
              <img onClick={this.onClickImage.bind(null, `${config.staticUrl}/i/sculpt.jpg`)} src={`${config.staticUrl}/i/sculpt.jpg`} title="Скульптура, автор - Пилипенко Сергей" alt="Скульптура, автор - Пилипенко Сергей" />
            </div>
          </div>
        </div>
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>Живопись</em></h3>
            <div className="text-center">
              <img onClick={this.onClickImage.bind(null, `${config.staticUrl}/i/paint.jpg`)} src={`${config.staticUrl}/i/paint.jpg`} title="Живопись, автор - Пилипенко Михаил" alt="Живопись, автор - Пилипенко Михаил" />
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>Батик</em></h3>
            <div className="text-center">
              <img onClick={this.onClickImage.bind(null, `${config.staticUrl}/i/batik.jpg`)} src={`${config.staticUrl}/i/batik.jpg`} title="Батик, автор - Пилипенко Виктория" alt="Батик, автор - Пилипенко Виктория" />
            </div>
          </div>
        </div>
        <div className="wrapBlock maxWidth40">
          <div id="content">
            <h1 className="title">Художники из города Таруса</h1>
            <p>На сайте представлены <Link to="/artist">фотографии работ</Link> и информация о <Link to="/exhibition">выставках.</Link> Художники работают в разных техниках:</p>
            <dl className="dl-horizontal">
              <dt><Link to="/artist/PilipenkoViktoriya">Пилипенко Виктория</Link></dt>
              <dd>батик (роспись по шелку)</dd>
              <dt><Link to="/artist/PilipenkoSergey">Пилипенко Сергей</Link></dt><dd>скульптура (художественная обработка дерева)</dd>
              <dt><Link to="/artist/PilipenkoMihail">Пилипенко Михаил</Link></dt><dd>живопись (холст/масло) и  эмаль (художественная обработка метала)</dd>
              <dt><Link to="/artist/PilipenkoTonya">Пилипенко Антонина</Link></dt><dd>живопись (акварель/пастель)</dd>
              <dt><Link to="/artist/RostemberskayaGalina">Ростемберская Галина</Link></dt><dd>живопись (холст/масло)</dd>
            </dl>
            <p>Все они живут и работают в городе Тарусе Калужской области. Место это не то чтобы знаменитое, но отмечено любовью таких людей как Марина Цветаева, Константин Паустовский, Святослав Рихтер и других деятелей искусства.</p><p>По поводу любых интересующих вас вопросов вы можете обращаться по электронной почте <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a> или писать в <Link to="/contacts">instgram.</Link> Вы так же можете посетить <Link to="/places">салоны и галереи,</Link> где находится художественные работы.<br />Приятного просмотра.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MainPage;

