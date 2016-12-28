import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';


class ExhibitionDetail extends Component {
  render() {
    const slug = this.props.params.id;
    const exhibition = this.props.exhibitions.filter((value) => (
      value.id === slug
    ))[0];

    return (
      <section className="contentExhibition">
        <div className="wrapBlock exhibitionListItem">
          <h1>{exhibition.name}<br /><small>{exhibition.description}</small></h1>
          <address className="address">
            <span>C {exhibition.from}</span>&nbsp;по&nbsp;<span>{exhibition.to}</span><br />
            <span>{exhibition.address}</span>
          </address>
          <ul>
            <li>Участники: {exhibition.artists}</li>
            <li>Техники: {exhibition.materials}</li>
            <li>Фото некоторых работ:
              <div>
                {exhibition.photos.map((p, id) => {
                  return (
                    <img height="100px" key={id} src={`${config.staticUrl}${p.src}`} alt={p.alt} title={p.title} />
                  );
                })}
              </div>
            </li>
          </ul>
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
