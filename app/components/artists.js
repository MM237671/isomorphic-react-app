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
            <div key={key} className="wrapBlock artistListItemText">
              <Link className="headerDetailLink" to={`/artist/${item.id}`}><h1>{this.loc(item.name)}</h1></Link>
              <br />
              <i>{this.loc(item.materials)}</i>
              <img className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
              <p>{this.loc(item.description)}</p>
              <p><Link to={`/artist/${item.id}`}>{this.loc('Фотографии работ')} >></Link></p>
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

