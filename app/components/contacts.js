import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Contacts extends Component {
  render() {
    return (
      <section className="contentExhibition">
        <div className="wrapBlock artistListItemText">
          <h1>Контакты</h1><br />
          <dl>
            <dt>E-mail:</dt>
            <dd><a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a></dd>
            <dt>Пилипенко Михаил (instagram):</dt><dd><a href="https://instagram.com/pilipenkomikhail5180" target="_blank">@pilipenkomikhail5180</a></dd>
            <dt>Пилипенко Сергей (instagram):</dt><dd><a href="https://instagram.com/pilipenkomikhail5180" target="_blank">@pilipenkomikhail5180</a></dd>
          </dl>
        </div>
      </section>
    );
  }
}


Contacts.propTypes = {
  artists: PropTypes.array,
};

function mapStateToProps({ artists }) {
  return {
    artists
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
