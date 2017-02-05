import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Component from './helpers/LocaleComponent';
import config from '../../config';
import Lightbox from './helpers/lightbox';

class Artists extends Component {
  constructor(props) {
    super(props);
    this.onClickImage = this.onClickImage.bind(this);
    this.onCloseLightBox = this.onCloseLightBox.bind(this);
    this.state = {
      lightbox: false,
      images: [
        `${config.staticUrl}/i/enamel.jpg`,
        `${config.staticUrl}/i/sculpt.jpg`,
        `${config.staticUrl}/i/paint.jpg`,
        `${config.staticUrl}/i/batik.jpg`
      ]
    };
  }

  onClickImage = (img) => {
    this.setState({
      lightbox: img
    });
  }

  onCloseLightBox = () => {
    this.setState({
      lightbox: false
    });
  }

  render() {
    const slug = this.props.params.id;
    const item = this.props.artists.filter((value) => (
      value.id === slug
    ))[0];

    const groups = _.groupBy(item.photos, (photo) => photo.group);
    const { lightbox } = this.state;

    let images = [];
    for (let i = 0; i < item.photos.length; i++) {
      images.push(`${config.staticUrl}${item.photos[i].src}`);
    }

    const lightboxElement = lightbox ? (
      <Lightbox
        images={images}
        startIndex={images.indexOf(lightbox)}
        onCloseRequest={this.onCloseLightBox}
      />
    ) : null;

    return (
      <section className="contentArtists">
        {lightboxElement}
        <div className="wrapBlock artistListItemText">
          <h1>{this.loc(item.name)}</h1>
          <br />
          <i>{this.loc(item.materials)}</i>
          <img className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
          <p>{item.description}</p>
        </div>
        {groups['mozaika'] !== undefined && (
          <div key='mozaika' className="wrapBlock artistListItem">
            <div className="mozaikaFlex">
              {groups["mozaika"].map((i, key) => {
                return (
                  <div key={key} className="mozaikaItemFlex">
                    <img onClick={this.onClickImage.bind(null, `${config.staticUrl}${i.src}`)} className="imageWithBorderMazaika" src={`${config.staticUrl}${i.src}`} alt={i.title} title={i.title} />
                  </div>
                );
              })}
            </div>
          </div>

        )}
        {groups[undefined].map((i, key) => {
          return (
            <div key={`${key}`} className="wrapBlock artistListItem">
              <img onClick={this.onClickImage.bind(null, `${config.staticUrl}${i.src}`)} className="imageWithBorder" key={key} src={`${config.staticUrl}${i.src}`} alt={i.title} title={i.title} />
            </div>
          );
        })}
      </section>
    );
  }
}


Artists.propTypes = {
  artists: PropTypes.array,
  params: PropTypes.object,
  locale: React.PropTypes.string,
  translate: React.PropTypes.object
};

function mapStateToProps({ artists, locale, translate }) {
  return {
    artists,
    locale: locale.locale,
    translate
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
