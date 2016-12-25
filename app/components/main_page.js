import React, { Component } from 'react';
import config from '../../config';


class MainPage extends Component {
  render() {
    return (
      <section className="content">
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>Эмаль</em></h3>
            <div className="text-center">
              <a href=""><img src={`${config.staticUrl}/i/enamel.jpg`} alt="enamel" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>Скульптура</em></h3>
            <div className="text-center">
              <a href=""><img src={`${config.staticUrl}/i/sculpt.jpg`} alt="sculpt" /></a>
            </div>
          </div>
        </div>
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>Живопись</em></h3>
            <div className="text-center">
              <a href=""><img src={`${config.staticUrl}/i/paint.jpg`} alt="paint" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>Батик</em></h3>
            <div className="text-center">
              <a href=""><img src={`${config.staticUrl}/i/batik.jpg`} alt="batik" /></a>
            </div>
          </div>
        </div>
        <div className="wrapBlock maxWidth40">
          <div id="content">
            <p>На сайте представлены фотографии работ и информация о выставках. Художники работают в разных техниках:</p>
            <dl className="dl-horizontal">
              <dt>Пилипенко Виктория</dt><dd>батик (роспись по шелку)</dd>
              <dt>Пилипенко Сергей</dt><dd>скульптура (художественная обработка дерева)</dd>
              <dt>Пилипенко Михаил</dt><dd>живопись (холст/масло) и  эмаль (художественная обработка метала)</dd>
            </dl>
            <p>Все они живут и работают в городе Тарусе Калужской области. Место это не то чтобы знаменитое, но отмечено любовью таких людей как Марина Цветаева, Константин Паустовский, Святослав Рихтер и других деятелей искусства.</p><p>По поводу любых интересующих вас вопросов вы можете обращаться по электронной почте <a href="mailto:info@remesel.ru">info@remesel.ru</a>, администрация сайта берет на себя обязательство сообщить при первой чашке чая ваши предложения виновникам проявленного интереса. Вы так же можете посетить салоны и галереи, где находится художественные работы.<br />Приятного просмотра.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default MainPage;

