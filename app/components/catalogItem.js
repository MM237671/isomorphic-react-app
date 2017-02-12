import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class Catalog extends Component {
  constructor(props) {
    super(props);

    this.changeArtist = this.changeArtist.bind(this);
    this.changeMaterial = this.changeMaterial.bind(this);
  }

  changeArtist(e) {
    browserHistory.push(`/catalog/${this.props.params.material}/${e.target.value}`);
  }

  changeMaterial(e) {
    browserHistory.push(`/catalog/${e.target.value}/${this.props.params.artist}`);
  }

  render() {
    const artworksAll = this.props.artworks;
    const artworkId = this.props.params.artwork;

    function isCurrent(artwork) {
      let res = true;
      if (artwork.id === artworkId) {
        res = true;
      } else {
        res = false;
      }
      return res;
    }

    const item = artworksAll.filter(isCurrent)[0];

    return (
      <section className="contentCatalog">
        <div className="wrapBlock breadcramb">
          <Link to={`/catalog/${this.props.params.material}/${this.props.params.artist}`}>{this.loc('Все работы')}</Link>&nbsp;
          <select onChange={this.changeMaterial} value={this.props.params.material} className="catalog-select">
            <option value="all">{this.loc('Все материалы')}</option>
            <option value="painting">{this.loc('Живопись')}</option>
            <option value="enamel">{this.loc('Эмаль')}</option>
            <option value="batik">{this.loc('Батик')}</option>
            <option value="sculpture">{this.loc('Скульптура')}</option>
            <option value="graphic">{this.loc('Графика')}</option>
          </select>&nbsp;
          <select onChange={this.changeArtist} value={this.props.params.artists} className="catalog-select">
            <option value="all">{this.loc('Все художники')}</option>
            <option value="PilipenkoMihail">{this.loc('Пилипенко Михаил')}</option>
            <option value="PilipenkoTonya">{this.loc('Пилипенко Антонина')}</option>
            <option value="PilipenkoViktoriya">{this.loc('Пилипенко Виктория')}</option>
            <option value="PilipenkoSergey">{this.loc('Пилипенко Сергей')}</option>
            <option value="RostemberskayaGalina">{this.loc('Ростемберская Галина')}</option>
          </select>&nbsp;
          {item.title}
        </div>
        <div className="wrapBlock">
          <div className="artworkDetailItem">
            <div className="info">
              <dl className="dl-horizontal">
                <dt>{this.loc('Название')}</dt>
                <dd>{this.loc(item.title)}</dd>
                <dt>{this.loc('Художник')}</dt>
                <dd>{this.loc(item.artists_name)}</dd>
                <dt>{this.loc('Материал')}</dt>
                <dd>{this.loc(item.material)}</dd>
                <dt>{this.loc('Место')}</dt>
                <dd>{this.loc('город Таруса')}</dd>
                <dt>{this.loc('Год')}</dt>
                <dd>{item.date}</dd>
                <dt>{this.loc('Размер')}</dt>
                <dd>{item.size}</dd>
              </dl>
            </div>
            <div className="image">
              {item !== undefined && (
                <img src={`${config.staticUrl}${item.src}`} alt={item.alt} title={item.title} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}


Catalog.propTypes = {
  artists: PropTypes.array,
  artworks: PropTypes.array,
  locale: React.PropTypes.string,
  translate: React.PropTypes.object,
  params: React.PropTypes.object
};

function mapStateToProps({ artworks, locale, translate }) {
  return {
    artworks,
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
