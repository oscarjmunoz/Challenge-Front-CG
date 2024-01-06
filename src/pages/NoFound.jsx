import React from 'react';
import '../styles/NoFound.css'

const NotFound = () => {
  return (
    <div className="error-container">
    <div className="astronaut-container">
      <img
        className="astronaut"
        src="https://chicksgold.com/animations/404/images/img_0.png" 
        alt="Astronaut Chick"
      />
    </div>
    <div className="text-container">
      <h2>404 - Not Found</h2>
      <p>Oops! It seems the astronaut chick got lost in space.</p>
    </div>
  </div>
);
};
export default NotFound;
