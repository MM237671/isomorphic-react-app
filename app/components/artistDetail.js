import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class Artists extends Component {
  render() {
    const slug = this.props.params.id;
    const item = this.props.artists.filter((value) => (
      value.id === slug
    ))[0];

    return (
      <section className="contentArtists">
        <div className="wrapBlock exhibitionListItem">
          <h1>{item.name}</h1>
          <i>{item.materials}</i>
          <img className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
          <p>{item.description}</p>
        </div>
      </section>
    );
  }
}


Artists.propTypes = {
  artists: PropTypes.array,
  params: PropTypes.object,
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
