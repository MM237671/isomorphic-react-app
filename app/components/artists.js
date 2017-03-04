import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class Artists extends Component {
  render() {
    return (
      <section className="contentArtists">
        {this.props.artists.map((item, key) => {
          return (
            <div itemScope itemType="http://schema.org/Person" key={key} className="wrapBlock artistListItemText">
              <Link itemProp="url" className="headerDetailLink" to={`/artist/${item.id}`}><h1 itemProp="name">{this.loc(item.name)}</h1></Link>
              <br />
              <i>{this.loc(item.materials)}</i>
              <img itemProp="image" className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
              <p itemProp="description">{this.loc(item.description)}</p>
              <p><Link to={`/artist/${item.id}`}>{this.loc('Подробнее')} >></Link></p>
            </div>
          );
        })}
      </section>
    );
  }
}


Artists.propTypes = {
  artists: PropTypes.array,
  locale: React.PropTypes.string,
  translate: React.PropTypes.object
};

function mapStateToProps({ artists, locale, translate }) {
  return {
    artists,
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);

