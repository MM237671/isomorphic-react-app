import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';

import Component from './helpers/LocaleComponent';
import config from '../../config';

class Artists extends Component {
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
          <img
            className="TextWrapLeft"
            width="100"
            src={`${config.staticUrl}${item.photo.src}`}
            alt={item.photo.title}
            title={item.photo.title}
          />
          <p>{this.loc(item.description)}</p>
        </div>
        {groups.mozaika !== undefined && (
          <div key="mozaika" className="wrapBlock artistListItem">
            <div className="mozaikaFlex">
              {groups.mozaika.map((i, key) => (
                <div key={key} className="mozaikaItemFlex">
                  <Link to={`/catalog/material/${item.id}`} title={i.title}>
                    <img
                      className="imageWithBorderMazaika"
                      src={`${config.staticUrl}${this.getThumbPath(i.src)}`}
                      alt={i.alt}
                      title={i.title}
                    />
                  </Link>
                </div>
              )
              )}
            </div>
          </div>

        )}
        {(groups[undefined] || []).map((i, key) => (
          <div key={`${key}`} className="wrapBlock artistListItem">
            <img
              className="imageWithBorder"
              key={key}
              src={`${config.staticUrl}${i.src}`}
              alt={i.alt}
              title={i.title}
            />
          </div>
        )
        )}

        {item.id === 'PilipenkoMihail' && (
          <div className="wrapBlock artistListItemText">
            <h3>{item.long_description_name}</h3>
            <div dangerouslySetInnerHTML={this.createMarkup(item.long_description)} />
          </div>
        )}

        {item.id === 'PilipenkoMihail' && (
          <div key="plener" className="wrapBlock artistListItem">
            {(item.long_description_photos || []).map((i, key) => (
              <div key={`${key}`} className="wrapBlock artistListItem">
                <img
                  className="imageWithBorder"
                  key={key}
                  src={`${config.staticUrl}${i.src}`}
                  alt={i.alt}
                  title={i.title}
                />
              </div>
            )
            )}
          </div>
        )}

        {item.id === 'PilipenkoTonya' && (
          <div className="wrapBlock artistListItemText">
            <h3>{item.long_description_name}</h3>
            <div dangerouslySetInnerHTML={this.createMarkup(item.long_description)} />
          </div>
        )}

        {item.id === 'PilipenkoViktoriya' && (
          <div className="wrapBlock artistListItemText">
            <h3>{item.long_description_name}</h3>
            <div dangerouslySetInnerHTML={this.createMarkup(item.long_description)} />
          </div>
        )}

        {item.id === 'RostemberskayaGalina' && (
          <div className="wrapBlock artistListItemText">
            <h3>{item.long_description_name}</h3>
            <div dangerouslySetInnerHTML={this.createMarkup(item.long_description)} />
          </div>
        )}


        {item.id === 'PilipenkoSergey' && (
          <div className="wrapBlock artistListItemText">
            <h3>{item.long_description_name}</h3>
            <div dangerouslySetInnerHTML={this.createMarkup(item.long_description)} />
          </div>
        )}

        {item.id === 'PilipenkoSergey' && (
          <div key="plener" className="wrapBlock artistListItem">
            {(item.long_description_photos || []).map((i, key) => (
              <div key={`${key}`} className="wrapBlock artistListItem">
                <img
                  className="imageWithBorder"
                  key={key}
                  src={`${config.staticUrl}${i.src}`}
                  alt={i.alt}
                  title={i.title}
                />
              </div>
            )
            )}
          </div>
        )}
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
