// Imports
import React, { PropTypes } from 'react';

/*
  ViewSlide
  <ViewSlide/>
*/

const ViewSlide = ({ slide }) => {
  let slideStyle = {};

  if (slide.image) {
    slideStyle = {
      backgroundImage: `url(${slide.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  }

  return (
    <div className="slide" style={slideStyle}>
      <div className="message">
        {slide.title && <h1>{slide.title}</h1>}
        {slide.subtitle && <h2>{slide.subtitle}</h2>}
      </div>
    </div>
  );
}

ViewSlide.propTypes = {
  slide: PropTypes.object
};

export default ViewSlide;
