import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from '../../config';


class Artists extends Component {
  render() {
    return (
      <section className="contentArtists">
        {this.props.artists.map((item, key) => {
          return (
            <div key={key} className="wrapBlock exhibitionListItem">
              <Link className="headerDetailLink" to={`/artist/${item.id}`}><h1>{item.name}</h1></Link>
              <i>{item.materials}</i>
              <img className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
              <p>{item.description}</p>
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

