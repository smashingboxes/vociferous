// Imports
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/*
  PresentSlide
  <PresentSlide/>
*/

const PresentSlide = ({ params, slide, previousTitle, nextTitle, goToNextSlide, goToPreviousSlide }) => {
  const slideStyle = {
    backgroundImage: `url(${slide.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="slide">
      <nav>
        <Link to={params.uid}>&#60; Presentations</Link>
        <Link to="/">Logout</Link>
      </nav>
      <div className="present-slide">
        <div className="slide-preview" style={slideStyle}>
          <div className="preview-message">
            {slide.title && <h1 className="preview-title">{slide.title}</h1>}
            {slide.subtitle && <h2 className="preview-subtitle">{slide.subtitle}</h2>}
          </div>
        </div>
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
