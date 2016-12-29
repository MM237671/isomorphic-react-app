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
            <div className="menuHeader">
              <div>
                <Link className="nav-link" to="/"><img src={`${config.staticUrl}/i/cat.png`} className="img-circle" height="80" alt="Главная" /></Link>
              </div>
              <div>
                <Link className="nav-link" activeClassName="active" to="/artist">Художники</Link><br />
                <Link className="nav-link" activeClassName="active" to="/exhibition">Выставки</Link>
              </div>
            </div>
          </nav>
          <div className="wrapBlockHeader">
            <address className="address">
              e-mail: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a>
            </address>
          </div>
        </header>
        {children}
        <footer>
          <address className="address">
            <nav className="wrapBlockHeader">
              remesel.ru:&nbsp;
              <Link className="nav-link" to="/">Главная</Link>&nbsp;
              <Link className="nav-link" to="/exhibition">Выставки</Link>&nbsp;
              <Link className="nav-link" to="/artist">Художники</Link>&nbsp;
              e-mail: <a href="mailto:medvedb24@yandex.ru">medvedb24@yandex.ru</a>
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
