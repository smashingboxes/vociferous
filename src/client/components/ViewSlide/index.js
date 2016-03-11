// Imports
import React, { PropTypes } from 'react';

/*
  ViewSlide
  <ViewSlide/>
*/

const ViewSlide = ({ title, subtitle, image }) => {
  const slideStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover'
  };

  return (
    <div className="slide" style={slideStyle}>
      <div className="message">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    </div>
  )
}

ViewSlide.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string
};

export default ViewSlide;
