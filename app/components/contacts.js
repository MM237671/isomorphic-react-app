import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Component from './helpers/LocaleComponent';

class Contacts extends Component {
  render() {
    return (
      <section className="contentExhibition">
        <div className="wrapBlock artistListItemText">
          <h1>{this.loc('Контакты')}</h1><br />
          <dl>
            <dt>{this.loc('Пилипенко Михаил')}:</dt>
            <dd>email: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a></dd>
            <dt>{this.loc('Пилипенко Сергей')}:</dt>
            <dd>instagram: <a href="https://instagram.com/sergey.remesel.ru" target="_blank">@sergey.remesel.ru</a><br />email: <a href="mailto:sergey.n.pilipenko@gmail.com">sergey.n.pilipenko@gmail.com</a></dd>
            <dt>{this.loc('Пилипенко Виктория')}:</dt>
            <dd>instagram: <a href="https://instagram.com/pilipenkobatik" target="_blank">@pilipenkobatik</a><br />email: <a href="mailto:victoria.j.pilipenko@gmail.com">victoria.j.pilipenko@gmail.com</a></dd>
          </dl>
        </div>
      </section>
    );
  }
}


Contacts.propTypes = {
  artists: PropTypes.array,
};


function mapStateToProps({ artists, locale, translate }) {
  return {
    artists,
    locale: locale.locale,
    translate
  };
}


function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
