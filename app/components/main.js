import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Component from './helpers/LocaleComponent';
import config from '../../config';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content">
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>{this.loc('Эмаль')}</em></h3>
            <div className="text-center">
              <img src={`${config.staticUrl}/i/enamel.jpg`} title="Эмаль, автор - Пилипенко Михаил" alt="Эмаль, автор - Пилипенко Михаил" />
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>{this.loc('Скульптура')}</em></h3>
            <div className="text-center">
              <img src={`${config.staticUrl}/i/sculpt.jpg`} title="Скульптура, автор - Пилипенко Сергей" alt="Скульптура, автор - Пилипенко Сергей" />
            </div>
          </div>
        </div>
        <div className="wrapBlock">
          <div>
            <h3 className="text-center"><em>{this.loc('Живопись')}</em></h3>
            <div className="text-center">
              <img src={`${config.staticUrl}/i/paint.jpg`} title="Живопись, автор - Пилипенко Михаил" alt="Живопись, автор - Пилипенко Михаил" />
            </div>
          </div>
          <div>
            <h3 className="text-center"><em>{this.loc('Батик')}</em></h3>
            <div className="text-center">
              <img src={`${config.staticUrl}/i/batik.jpg`} title="Батик, автор - Пилипенко Виктория" alt="Батик, автор - Пилипенко Виктория" />
            </div>
          </div>
        </div>
        <div className="wrapBlock maxWidth40">
          <div id="content">
            <h1 className="title">{this.loc('Художники из города Таруса')}</h1>
            <p>{this.loc('На сайте представлены')} <Link to="/artist">{this.loc('фотографии работ')}</Link> {this.loc('и информация о')} <Link to="/exhibition">{this.loc('выставках')}.</Link> {this.loc('Художники работают с различными материалами')}:</p>
            <dl className="dl-horizontal">
              <dt><Link to="/artist/PilipenkoViktoriya">{this.loc('Пилипенко Виктория')}</Link></dt>
              <dd>{this.loc('батик (роспись по шелку)')}</dd>
              <dt><Link to="/artist/PilipenkoSergey">{this.loc('Пилипенко Сергей')}</Link></dt><dd>{this.loc('скульптура (дерево/тонировка)')}</dd>
              <dt><Link to="/artist/PilipenkoMihail">{this.loc('Пилипенко Михаил')}</Link></dt><dd>{this.loc('живопись (холст/масло)')} {this.loc('и')} {this.loc('горячая эмаль / медь')}</dd>
              <dt><Link to="/artist/PilipenkoTonya">{this.loc('Пилипенко Антонина')}</Link></dt><dd>{this.loc('живопись (акварель/пастель)')}</dd>
              <dt><Link to="/artist/RostemberskayaGalina">{this.loc('Ростемберская Галина')}</Link></dt><dd>{this.loc('живопись (холст/масло)')}</dd>
            </dl>
            <br />
            <p>{this.loc('Все они живут и работают в городе Тарусе Калужской области. Место это не то чтобы знаменитое, но отмечено любовью таких людей как Марина Цветаева, Константин Паустовский, Святослав Рихтер и других деятелей искусства.')}</p><p>{this.loc('По поводу любых интересующих вас вопросов вы можете обращаться по электронной почте')} <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a> {this.loc('или писать в')} <Link to="/contacts">instgram.</Link> {this.loc('Вы так же можете посетить')} <Link to="/places">{this.loc('салоны и галереи')},</Link> {this.loc('где находится художественные работы')}.<br />{this.loc('Приятного просмотра')}.</p>
          </div>
        </div>
      </section>
    );
  }
}


MainPage.propTypes = {
  locale: React.PropTypes.string,
  translate: React.PropTypes.object
};


function mapStateToProps({ locale, translate }) {
  return {
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

