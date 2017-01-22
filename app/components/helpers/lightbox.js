import React, { PureComponent, PropTypes } from 'react';

let ReactImageLightbox;
class Lightbox extends PureComponent {
  constructor(props){
    super(props);
    ReactImageLightbox = require('react-image-lightbox');
    this.state = {
      index: props.startIndex
    };
  }

  next = () => {
    const { images } = this.props;
    const { index } = this.state;

    this.setState({
      index: (index + 1) % images.length
    });
  };

  prev = () => {
    const { images } = this.props;
    const { index } = this.state;

    this.setState({
      index: (index + (images.length - 1)) % images.length
    });
  };

  render() {
    const { images, onCloseRequest } = this.props;
    const { index } = this.state;

    const nextSrc = images.length === 1 ? undefined : images[(index + 1) % images.length];
    const prevSrc = images.length === 1 ? undefined : images[(index + (images.length - 1)) % images.length];

    console.log(nextSrc, prevSrc);

    return (
      <ReactImageLightbox
        mainSrc={images[index]}
        nextSrc={nextSrc}
        prevSrc={prevSrc}
        onCloseRequest={onCloseRequest}
        onMovePrevRequest={this.next}
        onMoveNextRequest={this.prev}
        animationDisabled
      />
    );
  }
}

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
  onCloseRequest: PropTypes.func.isRequired
};

export default Lightbox;
