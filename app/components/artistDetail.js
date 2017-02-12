import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Component from './helpers/LocaleComponent';
import config from '../../config';

class Artists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const slug = this.props.params.id;
    const item = this.props.artists.filter((value) => (
      value.id === slug
    ))[0];

    const groups = _.groupBy(item.photos.slice(0, 4), (photo) => photo.group);

    return (
      <section className="contentArtists">
        <div className="wrapBlock artistListItemText">
          <h1>{this.loc(item.name)}</h1>
          <br />
          <i>{this.loc(item.materials)}</i>
          <img className="TextWrapLeft" width="100" src={`${config.staticUrl}${item.photo.src}`} alt={item.photo.title} title={item.photo.title} />
          <p>{this.loc(item.description)}</p>
        </div>
        {groups['mozaika'] !== undefined && (
          <div key='mozaika' className="wrapBlock artistListItem">
            <div className="mozaikaFlex">
              {groups["mozaika"].map((i, key) => {
                return (
                  <div key={key} className="mozaikaItemFlex">
                    <img className="imageWithBorderMazaika" src={`${config.staticUrl}${i.src}`} alt={i.alt} title={i.title} />
                  </div>
                );
              })}
            </div>
          </div>

        )}
        {(groups[undefined] || []).map((i, key) => {
          return (
            <div key={`${key}`} className="wrapBlock artistListItem">
              <img className="imageWithBorder" key={key} src={`${config.staticUrl}${i.src}`} alt={i.alt} title={i.title} />
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
