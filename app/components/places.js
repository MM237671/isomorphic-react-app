import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class Places extends Component {
  render() {
    return (
      <section className="contentPlaces">
        {this.props.places.map((item, key) => {
          return (
            <div key={key} className="wrapBlock placeListItem">
              <h3>{this.loc(item.name)}</h3>
              <p>{item.description}</p>
              <address className="address">
                <span>{this.loc(item.address)}</span>
              </address><br />
              <img src={`${config.staticUrl}${item.src}`} alt={item.address} title={item.address} />
              <div className="clear"></div>
            </div>
          );
        })}
      </section>
    );
  }
}


Places.propTypes = {
  places: PropTypes.array,
  locale: React.PropTypes.string,
  translate: React.PropTypes.object
};

function mapStateToProps({ places, locale, translate }) {
  return {
    places,
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);