import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class ExhibitionDetail extends Component {
  render() {
    const slug = this.props.params.id;
    const item = this.props.exhibitions.filter((value) => (
      value.id === slug
    ))[0];

    return (
      <section className="contentExhibition">
        <div className="wrapBlock exhibitionListItem">
          <h1>{item.name}<br /><small>{item.description}</small></h1>
          {item.photo !== undefined && (
            <img className="TextWrapLeft" width="200" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
          )}
          <address className="address">
            <span>C {item.from}</span>&nbsp;по&nbsp;<span>{item.to}</span><br />
            <span>{item.address}</span>
          </address>
          <ul>
            <li><i>{this.loc('Участники')}:</i> {item.artists.split(', ').map(artist => this.loc(artist)).join(', ')}</li>
            <li><i>{this.loc('Техники')}:</i> {item.materials.split(', ').map(material => this.loc(material)).join(', ')}</li>
          </ul>
          <div className="clear"></div>
          <div><i>{this.loc('Фото некоторых работ')}:</i>
            <div>
              {(item.photos || []).map((p, id) => {
                return (
                  <img className="imageWithBorder" height="190px" key={id} src={`${config.staticUrl}${p.src}`} alt={p.title} title={p.title} />
                );
              })}

              {item.links !== undefined && item.links.map((link, linkid) => {
                return (
                  <a href={link.src} key={linkid} target="_blank">{link.name}</a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}


ExhibitionDetail.propTypes = {
  exhibitions: PropTypes.array,
  params: PropTypes.object,
  locale: React.PropTypes.string,
  translate: React.PropTypes.object
};

function mapStateToProps({ exhibitions, locale, translate }) {
  return {
    exhibitions,
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitionDetail);
