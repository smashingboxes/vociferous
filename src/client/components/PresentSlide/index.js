// Imports
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

/*
  PresentSlide
  <PresentSlide/>
*/

class PresentSlide extends Component {
  render() {
    const { params, slide, previousTitle, nextTitle, goToNextSlide, goToPreviousSlide } = this.props;
    let slideStyle = {};

    if (slide.image) {
      slideStyle = {
        backgroundImage: `url(${slide.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
    }

    return (
      <div className="slide">
        <nav>
          <Link to={params.uid}>&#60; Presentations</Link>
          <Link to="/">Logout</Link>
        </nav>
        <div className="present-slide">
          <div className="present-controls">
            <div>
              {(previousTitle) &&
                <button onClick={goToPreviousSlide}>Previous</button>}
              <p>{previousTitle}</p>
            </div>
            <div>
              {(nextTitle) &&
                <button onClick={goToNextSlide}>Next</button>}
              <p>{nextTitle}</p>
            </div>
          </div>
          {slide.notes &&
            <ul>
              {slide.notes.map((note, index) => <li key={index}>{note}</li>)}
            </ul>}
          <div className="slide-preview" style={slideStyle}>
            <div className="preview-message">
              {slide.title && <h1 className="preview-title">{slide.title}</h1>}
              {slide.subtitle && <h2 className="preview-subtitle">{slide.subtitle}</h2>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PresentSlide.propTypes = {
  params: PropTypes.object,
  slide: PropTypes.object,
  previousTitle: PropTypes.string,
  nextTitle: PropTypes.string,
  goToNextSlide: PropTypes.func,
  goToPreviousSlide: PropTypes.func
};

export default PresentSlide;
