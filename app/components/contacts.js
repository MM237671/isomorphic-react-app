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
            <dt>E-mail:</dt>
            <dd><a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a></dd>
            <dt>{this.loc('Пилипенко Михаил')} (instagram):</dt><dd><a href="https://instagram.com/m.remesel.ru" target="_blank">@m.remesel.ru</a></dd>
            <dt>{this.loc('Пилипенко Сергей')} (instagram):</dt><dd><a href="https://instagram.com/sergey.remesel.ru" target="_blank">@sergey.remesel.ru</a></dd>
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
