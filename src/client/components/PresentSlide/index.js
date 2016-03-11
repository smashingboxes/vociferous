// Imports
import React, { PropTypes } from 'react';

/*
  PresentSlide
  <PresentSlide/>
*/

const PresentSlide = ({ title, subtitle, image, notes }) => {
  console.log(notes);
  return (
    <div className="slide">
      <div className="present-slide">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        {image && <img src={image} className="present-image" />}
        {notes &&
          <ul>
            {notes.map((note, index) => <li key={index}>{note}</li>)}
          </ul>}
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  )
}

PresentSlide.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  notes: PropTypes.array
};

export default PresentSlide;
