import React from 'react'
import './logos.css'

const Logos = () => {
  return (
    <div className="logos__container">
      {Array.from({ length: 9 }).map((_, index) => {
        const imageUrl =
          index % 2 === 0
            ? "./images/adidas-logo.png"
            : "./images/nike-logo.png";
        return (
          <div key={index} className="logos__container__item">
            <img src={imageUrl} alt={`logo-${index}`} />
          </div>
        );
      })}
      <img className="blur-left" src="./images/blur-left.png" alt="blur-left" />
      <img className="blur-right" src="./images/blur-right.png" alt="blur-right" />
    </div>
  );
}

export default Logos