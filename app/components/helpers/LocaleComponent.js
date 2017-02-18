import React, { Component, PropTypes } from 'react';


class LocaleComponent extends Component {
  constructor(props) {
    super(props);
    this.loc = this.loc.bind(this);
    this.getThumbPath = this.getThumbPath.bind(this);
  }

  getThumbPath(src) {
    return `${src.substring(0, src.length - 4)}.thumbnail.jpg`;
  }

  loc(translateStr) {
    let res = translateStr;
    if (this.props.translate[translateStr]) {
      if (this.props.translate[translateStr][this.props.locale]) {
        res = this.props.translate[translateStr][this.props.locale];
      }
    }
    return res;
  }

  render() {
    return (
      <div></div>
    );
  }
}


LocaleComponent.propTypes = {
  locale: PropTypes.string,
  translate: PropTypes.obj
};

export default LocaleComponent;
