import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class Exhibition extends Component {
  render() {
    return (
      <section className="contentExhibition">
        {this.props.exhibitions.map((item, key) => {
          return (
            <div key={key} className="wrapBlock exhibitionListItem">
              <h1>{item.name}<br /><small>{item.description}</small></h1>
              <address className="address">
                <span>C {item.from}</span>&nbsp;по&nbsp;<span>{item.to}</span><br />
                <span>{item.address}</span>
              </address>
              <ul>
                <li>Участники: {item.artists}</li>
                <li>Техники: {item.materials}</li>
                <li>Фото некоторых работ:
                  <div>
                    {item.photos.map((p, id) => {
                      return (
                        <img height="100px" key={id} src={`${config.staticUrl}${p}`} alt="" />
                      );
                    })}
                  </div>
                </li>
              </ul>
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
