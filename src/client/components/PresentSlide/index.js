// Imports
import React, { PropTypes } from 'react';

/*
  PresentSlide
  <PresentSlide/>
*/

const PresentSlide = ({ slide, previousTitle, nextTitle, goToNextSlide, goToPreviousSlide }) => {
  return (
    <div className="slide">
      <div className="present-slide">
        {slide.title && <h1>{slide.title}</h1>}
        {slide.subtitle && <h2>{slide.subtitle}</h2>}
        {slide.image && <img src={slide.image} className="present-image" />}
        {slide.notes &&
          <ul>
            {slide.notes.map((note, index) => <li key={index}>{note}</li>)}
          </ul>}
        <div className="present-controls">
          <div>
            <p>{previousTitle}</p>
            {(previousTitle) &&
              <button onClick={goToPreviousSlide}>Previous</button>
            }
          </div>
          <div>
            <p>{nextTitle}</p>
            {(nextTitle) &&
              <button onClick={goToNextSlide}>Next</button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

PresentSlide.propTypes = {
  slide: PropTypes.object,
  previousTitle: PropTypes.string,
  nextTitle: PropTypes.string,
  goToNextSlide: PropTypes.func,
  goToPreviousSlide: PropTypes.func
};

export default PresentSlide;
