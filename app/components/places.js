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
              <p>{item.description}</p>
              <address className="address">
                <span>{item.address}</span>
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