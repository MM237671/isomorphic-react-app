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
              {item.photo !== undefined && (

                <img className="TextWrapLeft" width="200" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.alt} title={item.photo.title} />
              )}
              <address className="address">
                <span>C {item.from}</span>&nbsp;по&nbsp;<span>{item.to}</span><br />
                <span>{item.address}</span>
              </address>
              <ul>
                <li><i>Участники:</i> {item.artists}</li>
                <li><i>Техники:</i> {item.materials}</li>
              </ul>
              <div className="clear"></div>
              <div><i>Фото некоторых работ:</i>
                <div>
                  {item.photos.map((p, id) => {
                    return (
                      <img className="imageWithBorder" height="200px" key={id} src={`${config.staticUrl}${p.src}`} alt={p.title} title={p.title} />
                    );
                  })}
                </div>
              </div>
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
