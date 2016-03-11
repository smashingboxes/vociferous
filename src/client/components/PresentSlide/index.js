// Imports
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/*
  PresentSlide
  <PresentSlide/>
*/

const PresentSlide = ({ params, slide, previousTitle, nextTitle, goToNextSlide, goToPreviousSlide }) => {
  return (
    <div className="slide">
      <nav>
        <Link to={params.uid}>&#60; Presentations</Link>
        <Link to="/">Logout</Link>
      </nav>
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
              <button onClick={goToPreviousSlide}>Previous</button>}
          </div>
          <div>
            <p>{nextTitle}</p>
            {(nextTitle) &&
              <button onClick={goToNextSlide}>Next</button>}
          </div>
        </div>
      </div>
    </div>
  )
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
