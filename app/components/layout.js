import React, { Component } from 'react';

import '../../node_modules/bootstrap/scss/bootstrap.scss';
import '../../public/static/css/template.css';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Layout;
