import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../../config';


class Places extends Component {
  render() {
    return (
      <section className="contentPlaces">
        {this.props.places.map((item, key) => {
          return (
            <div key={key} className="wrapBlock placeListItem">
              <h3>{item.name}</h3>
              <address className="address">
                <span>{item.address}</span>
              </address>
              <a href={item.url} target="_blank">
                <img src={item.src} alt={item.description} style={{ border: 0 }} />
              </a>
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
};

function mapStateToProps({ places }) {
  return {
    places
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);