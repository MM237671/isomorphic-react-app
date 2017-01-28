import React, { Component } from 'react';
import { Link } from 'react-router';

import config from '../../config';
import '../../public/static/css/template.css';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <header className="header">
          <div className="wrapBlockHeader">
            <h3 className="title">Художники из города Таруса</h3>
          </div>
          <nav className="wrapBlockLeft">
            <div className="menuHeader">
              <div>
                <Link className="nav-link" to="/"><img src={`${config.staticUrl}/i/cat.png`} className="img-circle" height="80" alt="Главная" /></Link>
              </div>
              <div className="wrapBlockHeaderMenu">
                <Link className="nav-link" activeClassName="active" to="/artist">Художники</Link><br />
                <Link className="nav-link" activeClassName="active" to="/exhibition">Выставки</Link><br />
                <Link className="nav-link" activeClassName="active" to="/places">Места</Link>
              </div>
            </div>
          </nav>
          <div className="wrapBlockHeader">
            <address className="address">
              E-mail: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a><br />
              <Link to="/contacts">Другие контакты</Link>&nbsp;
            </address>
          </div>
        </header>
        {children}
        <footer>
          <address className="address">
            <nav className="wrapBlockHeader">
              <Link className="nav-link" activeClassName="active" to="/">Главная</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/exhibition">Выставки</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/artist">Художники</Link>&nbsp;
              <Link className="nav-link" activeClassName="active" to="/places">Места</Link>&nbsp;
              <Link to="/contacts">Другие контакты</Link>&nbsp;
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
};

export default Layout;
