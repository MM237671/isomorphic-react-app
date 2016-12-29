import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class Artists extends Component {
  render() {
    return (
      <section className="contentArtists">
        {this.props.artists.map((item, key) => {
          return (
            <div key={key} className="wrapBlock exhibitionListItem">
              <h1>{item.name}<br /><small>{item.description}</small></h1>
              <div>
                {item.materials}
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}


Artists.propTypes = {
  artists: PropTypes.array,
};

function mapStateToProps({ artists }) {
  return {
    artists
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);

