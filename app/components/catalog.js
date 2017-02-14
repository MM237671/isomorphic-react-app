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
    this.getThumbPath = this.getThumbPath.bind(this);
  }

  changeArtist(e) {
    browserHistory.push(`/catalog/${this.props.params.material}/${e.target.value}`);
  }

  changeMaterial(e) {
    browserHistory.push(`/catalog/${e.target.value}/${this.props.params.artist}`);
  }

  getThumbPath(src) {
    return `${src.substring(0, src.length - 4)}.thumbnail.jpg`;
  }

  render() {
    const artworksAll = this.props.artworks;

    const material = this.props.params.material;
    const artist = this.props.params.artist;

    function isCurrent(artwork) {
      let res = true;
      if ((artwork.material_id === material || material === 'all') && (artwork.artists_id === artist || artist === 'all')) {
        res = true;
      } else {
        res = false;
      }
      return res;
    }

    const artworks = artworksAll.filter(isCurrent);

    // console.log(this.props.artworks);
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
          </select>
        </div>
        <div className="wrapBlock artworkItems">
          {artworks.map((item, key) => {
            return (
              <div key={key} className="artworkItem">
                <div className="head">
                  <Link to={`/catalog/${this.props.params.material}/${this.props.params.artist}/${item.id}`}>«{item.title}»</Link><br />
                </div>
                <div className="image">
                  <img src={`${config.staticUrl}${this.getThumbPath(item.src)}`} alt={item.alt} title={item.title} />
                </div>
                <div className="info">
                  {item.material}<br />
                  {item.artists_name}
                </div>
              </div>
            );
          })}
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
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func
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
