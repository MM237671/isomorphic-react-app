import React, { Component } from 'react';
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
              <a href=""><img src={`${config.staticUrl}/i/paint.jpg`} title="Живопись, автор - Пилипенко Михаил" alt="Живопись, автор - Пилипенко Михаил" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>Батик</em></h3>
            <div className="text-center">
              <a href=""><img src={`${config.staticUrl}/i/batik.jpg`} title="Батик, автор - Пилипенко Виктория" alt="Батик, автор - Пилипенко Виктория" /></a>
            </div>
          </div>
        </div>
        <div className="wrapBlock maxWidth40">
          <div id="content">
            <h1 className="title">Работы художников из города Таруса</h1>
            <p>На сайте представлены фотографии работ и информация о выставках. Художники работают в разных техниках:</p>
            <dl className="dl-horizontal">
              <dt>Пилипенко Виктория</dt><dd>батик (роспись по шелку)</dd>
              <dt>Пилипенко Сергей</dt><dd>скульптура (художественная обработка дерева)</dd>
              <dt>Пилипенко Михаил</dt><dd>живопись (холст/масло) и  эмаль (художественная обработка метала)</dd>
              <dt>Пилипенко Антонина</dt><dd>живопись (акварель/пастель)</dd>
              <dt>Ростемберская Галина</dt><dd>живопись (холст/масло)</dd>
            </dl>
            <p>Все они живут и работают в городе Тарусе Калужской области. Место это не то чтобы знаменитое, но отмечено любовью таких людей как Марина Цветаева, Константин Паустовский, Святослав Рихтер и других деятелей искусства.</p><p>По поводу любых интересующих вас вопросов вы можете обращаться по электронной почте <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a>, администрация сайта берет на себя обязательство сообщить при первой чашке чая ваши предложения виновникам проявленного интереса. Вы так же можете посетить салоны и галереи, где находится художественные работы.<br />Приятного просмотра.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MainPage;

