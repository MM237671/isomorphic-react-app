import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Component from './helpers/LocaleComponent';
import * as LocaleActions from '../reducers/locale/actions';
import '../../public/static/css/template.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.onChangeLocale = this.onChangeLocale.bind(this);
  }

  onChangeLocale(e) {
    this.props.setLocale(e.target.value);
  }

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <header className="header">
          <div className="wrapBlockHeader">
            <h3 className="title">{this.loc('Художники из города Таруса')}</h3>
          </div>
          <div className="wrapBlockHeader">
            <select value={this.props.locale} onChange={this.onChangeLocale} className="locale-select">
              <option value="ru">&nbsp;ru&nbsp;&nbsp;</option>
              <option value="en">&nbsp;en&nbsp;&nbsp;</option>
            </select>
          </div>
          <nav className="wrapBlockHeader">
            <Link className="nav-link" to="/">{this.loc('Главная')}</Link>&nbsp;
            <Link className="nav-link" activeClassName="active" to="/artist">{this.loc('Художники')}</Link>&nbsp;
            <Link className="nav-link" activeClassName="active" to="/exhibition">{this.loc('Выставки')}</Link>&nbsp;
            <Link className="nav-link" activeClassName="active" to="/places">{this.loc('Места')}</Link>&nbsp;
            <Link className="nav-link" activeClassName="active" to="/contacts">{this.loc('Контакты')}</Link>
          </nav>
          <div className="wrapBlockHeader">
            <address className="address">
              E-mail: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a>
            </address>
          </div>
        </header>
        {children}
        <footer>
          <address className="address">
            <nav className="wrapBlockHeader">
              <Link className="nav-link" to="/">{this.loc('Главная')}</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/artist">{this.loc('Художники')}</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/exhibition">{this.loc('Выставки')}</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/places">{this.loc('Места')}</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/contacts">{this.loc('Контакты')}</Link>&nbsp;
              E-mail: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a>&nbsp;
            </nav>
          </address>
        </footer>
      </div>
    );
  }
}


Layout.propTypes = {
  children: React.PropTypes.element,
  locale: React.PropTypes.string,
  setLocale: React.PropTypes.func,
  translate: React.PropTypes.object
};


function mapStateToProps({ locale, translate }) {
  return {
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocaleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
