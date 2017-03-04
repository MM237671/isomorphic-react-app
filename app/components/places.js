import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Component from './helpers/LocaleComponent';
import config from '../../config';


class Places extends Component {
  render() {
    return (
      <section className="contentPlaces">
        {this.props.places.map((item, key) => {
          return (
            <div itemScope itemType="http://schema.org/LocalBusiness" key={key} className="wrapBlock placeListItem">
              <h3>{this.loc(item.name)}</h3>
              <p>{item.description}</p>
              <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="address">
                <span itemProp="streetAddress">{this.loc(item.address)}</span>
              </address><br />
              <img itemProp="image" src={`${config.staticUrl}${item.src}`} alt={item.address} title={item.address} />
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