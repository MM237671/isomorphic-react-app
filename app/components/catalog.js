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
    this.getArtistHeader = this.getArtistHeader.bind(this);
    this.getMaterialHeader = this.getMaterialHeader.bind(this);
  }

  getThumbPath(src) {
    return `${src.substring(0, src.length - 4)}.thumbnail.jpg`;
  }

  getArtistHeader(artist) {
    let header = '';
    if (artist !== 'artist') {
      header = this.loc('Художник ') + this.loc(artist);
    }
    return header;
  }

  getMaterialHeader(material) {
    let header = this.loc('Каталог Ремесел');
    if (material !== 'material') {
      header = this.loc(material);
    }
    return header;
  }

  changeMaterial(e) {
    browserHistory.push(`/catalog/${e.target.value}/${this.props.params.artist}`);
  }

  changeArtist(e) {
    browserHistory.push(`/catalog/${this.props.params.material}/${e.target.value}`);
  }

  render() {
    const artworksAll = this.props.artworks;

    const material = this.props.params.material;
    const artist = this.props.params.artist;

    function isCurrent(artwork) {
      let res = true;
      if ((artwork.material_id === material || material === 'material') && (artwork.artists_id === artist || artist === 'artist')) {
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
          <Link
            to={`/catalog/${this.props.params.material}/${this.props.params.artist}`}
          >{this.loc('Все работы')}</Link>&nbsp;
          <select
            onChange={this.changeMaterial}
            value={this.props.params.material}
            className="catalog-select"
          >
            <option value="material">{this.loc('Все материалы')}</option>
            {
              ['artist', 'PilipenkoMihail', 'PilipenkoTonya', 'RostemberskayaGalina'
              ].indexOf(
                this.props.params.artist
              ) > -1 && <option value="painting">{this.loc('Живопись')}</option>}
            {
              ['artist', 'PilipenkoMihail'
              ].indexOf(
                this.props.params.artist
              ) > -1 && <option value="enamel">{this.loc('Эмаль')}</option>}
            {
              ['artist', 'PilipenkoViktoriya'
              ].indexOf(
                this.props.params.artist
              ) > -1 && <option value="batik">{this.loc('Батик')}</option>}
            {
              ['artist', 'PilipenkoSergey'
              ].indexOf(
                this.props.params.artist
              ) > -1 && <option value="sculpture">{this.loc('Скульптура')}</option>}
            {
              ['artist', 'PilipenkoSergey'
              ].indexOf(
                this.props.params.artist
              ) > -1 && <option value="graphic">{this.loc('Графика')}</option>}
          </select>&nbsp;
          <select
            onChange={this.changeArtist}
            value={this.props.params.artist}
            className="catalog-select"
          >
            <option value="artist">{this.loc('Все художники')}</option>
            {
              ['material', 'painting', 'enamel'
              ].indexOf(
                this.props.params.material
              ) > -1 && <option value="PilipenkoMihail">{this.loc('Пилипенко Михаил')}</option>}
            {
              ['material', 'painting'
              ].indexOf(
                this.props.params.material
              ) > -1 && <option value="PilipenkoTonya">{this.loc('Пилипенко Антонина')}</option>}
            {
              ['material', 'batik'
              ].indexOf(
                this.props.params.material
              ) > -1 && <option value="PilipenkoViktoriya">
              {this.loc('Пилипенко Виктория')}</option>}
            {
              ['material', 'sculpture', 'graphic'
              ].indexOf(
                this.props.params.material
              ) > -1 && <option value="PilipenkoSergey">{this.loc('Пилипенко Сергей')}</option>}
            {
              ['material', 'painting'
              ].indexOf(
                this.props.params.material
              ) > -1 && <option value="RostemberskayaGalina">
                {this.loc('Ростемберская Галина')}</option>}
          </select>
          <div className="inlineHeader">
            <h1>
              {`${this.getMaterialHeader(material)} ${this.getArtistHeader(artist)} ${this.loc('город Таруса')}`}
            </h1>
          </div>
        </div>
        <div className="wrapBlock artworkItems">
          {artworks.map((item, key) => {
            return (
              <div key={key} itemScope itemType="http://schema.org/Product" className="artworkItem">
                <div className="head">
                  <Link
                    itemProp="url"
                    to={`/catalog/${this.props.params.material}/${this.props.params.artist}/${item.id}`}
                  >
                    <span itemProp="name">«{this.transliterate(item.title)}»</span>
                  </Link><br />
                </div>
                <div className="image">
                  <img
                    itemProp="image"
                    src={`${config.staticUrl}${this.getThumbPath(item.src)}`}
                    alt={item.alt}
                    title={item.title}
                  />
                </div>
                <div itemProp="description" className="info">
                  {this.loc(item.material)}<br />
                  {this.loc(item.artists_name)}
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
