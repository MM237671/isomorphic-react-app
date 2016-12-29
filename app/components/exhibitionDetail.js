import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class ExhibitionDetail extends Component {
  render() {
    const slug = this.props.params.id;
    const item = this.props.exhibitions.filter((value) => (
      value.id === slug
    ))[0];

    return (
      <section className="contentExhibition">
        <div className="wrapBlock exhibitionListItem">
          <h1>{item.name}<br /><small>{item.description}</small></h1>
          {item.photo !== undefined && (
            <img className="TextWrapLeft" width="200" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
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
                  <img height="100px" key={id} src={`${config.staticUrl}${p.src}`} alt={p.title} title={p.title} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}


ExhibitionDetail.propTypes = {
  exhibitions: PropTypes.array,
  params: PropTypes.object
};

function mapStateToProps({ exhibitions }) {
  return {
    exhibitions
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ExhibitionDetail);
