import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class Exhibition extends Component {
  render() {
    return (
      <section className="content">
        {this.props.exhibitions.map((item, key) => {
          return (
            <div key={key} className="wrapBlock exhibitionListItem">
              <h1>{item.name}</h1>
              <address className="address">
                <span>{item.to}</span>&nbsp;-&nbsp;<span>{item.to}</span>&nbsp;
                <span>{item.address}</span>
              </address>
              <p>{item.description}</p>
            </div>
          );
        })}
      </section>
    );
  }
}


Exhibition.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Exhibition);
