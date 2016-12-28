import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class Artists extends Component {
  render() {
    return (
      <section className="contentExhibition">
        Not complete ...
      </section>
    );
  }
}


Artists.propTypes = {
  exhibitions: PropTypes.array,
};

function mapStateToProps({ exhibitions }) {
  return {
    exhibitions
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
