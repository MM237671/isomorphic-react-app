import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class Exhibition extends Component {
  render() {
    return (
      <section className="contentExhibition">
        {this.props.exhibitions.map((item, key) => {
          return (
            <div key={key} className="wrapBlock exhibitionListItem">
              <Link className="headerDetailLink" to={`/exhibition/${item.id}`}>
                <h1>{item.name}<br /><small>{item.description}</small></h1>
              </Link>
              {item.photo !== undefined && (

                <img className="TextWrapLeft" width="200" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.alt} title={item.photo.title} />
              )}
              <address className="address">
                <span>C {item.from}</span>&nbsp;по&nbsp;<span>{item.to}</span><br />
                <span>{item.address}</span>
              </address>
              <ul>
                <li><i>{this.loc('Участники')}:</i> {item.artists.split(', ').map(artist => this.loc(artist)).join(', ')}</li>
                <li><i>{this.loc('Техники')}:</i> {item.materials.split(', ').map(material => this.loc(material)).join(', ')}</li>
              </ul>
              <p><br /><Link to={`/exhibition/${item.id}`}>{this.loc('Посмотреть фотографии')} >></Link></p>
              <div className="clear"></div>
            </div>
          );
        })}
      </section>
    );
  }
}


Exhibition.propTypes = {
  exhibitions: PropTypes.array,
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

export default connect(mapStateToProps, mapDispatchToProps)(Exhibition);
