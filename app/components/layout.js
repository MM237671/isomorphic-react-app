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
            <h1 className="title">Работы художников<br /><small>из города Таруса</small></h1>
          </div>
          <nav className="wrapBlockHeader">
            <Link className="nav-link" to="/"><img src={`${config.staticUrl}/i/cat.png`} className="img-circle" height="80" alt="Главная" /></Link>
            <Link className="nav-link" to="/exhibition">Выставки</Link>
          </nav>
          <div className="wrapBlockHeader">
            <address className="address">
              e-mail: <a href="mailto:info@remesel.ru">info@remesel.ru</a>
            </address>
          </div>
        </header>
        {children}
        <footer>
          <address className="address">
            <nav className="wrapBlockHeader">
              remesel.ru:&nbsp;
              <Link className="nav-link" to="/">Главная</Link>&nbsp;
              <Link className="nav-link" to="/exhibition">Выставки</Link>,&nbsp;
              e-mail: <a href="mailto:info@remesel.ru">info@remesel.ru</a>
            </nav>
          </address>
        </footer>
      </div>
    );
  }
}

export default Layout;
