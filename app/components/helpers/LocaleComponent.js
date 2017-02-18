import React, { Component, PropTypes } from 'react';


const TRANSLATE = {'Ё':'YO','Й':'I','Ц':'TS','У':'U','К':'K','Е':'E','Н':'N','Г':'G','Ш':'SH','Щ':'SCH','З':'Z','Х':'H','Ъ':"'",'ё':'yo','й':'i','ц':'ts','у':'u','к':'k','е':'e','н':'n','г':'g','ш':'sh','щ':'sch','з':'z','х':'h','ъ':"'",'Ф':'F','Ы':'I','В':'V','А':'a','П':'P','Р':'R','О':'O','Л':'L','Д':'D','Ж':'ZH','Э':'E','ф':'f','ы':'i','в':'v','а':'a','п':'p','р':'r','о':'o','л':'l','д':'d','ж':'zh','э':'e','Я':'Ya','Ч':'CH','С':'S','М':'M','И':'I','Т':'T','Ь':"'",'Б':'B','Ю':'YU','я':'ya','ч':'ch','с':'s','м':'m','и':'i','т':'t','ь':"'",'б':'b','ю':'yu'};


class LocaleComponent extends Component {
  constructor(props) {
    super(props);
    this.loc = this.loc.bind(this);
    this.getThumbPath = this.getThumbPath.bind(this);
    this.transliterate = this.transliterate.bind(this);
  }

  getThumbPath(src) {
    return `${src.substring(0, src.length - 4)}.thumbnail.jpg`;
  }

  transliterate(word) {
    let res = word;
    if (this.props.locale === 'ru') {
      res = word;
    } else {
      res = word.split('').map((char) => (
        TRANSLATE[char] || char
      )).join('');
    }
    return res;
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
