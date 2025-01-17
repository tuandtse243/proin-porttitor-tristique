import React from 'react'
import './ante-leo.css'
import CardFeature from '../card-feature';

const AnteLeo = () => {
  return (
    <div className="ante-leo__container" id='anteleo'>
      <div className="ante-leo__container__left">
        <h3 className="ante-leo__container__left__title">
          Sed eget <span>ante leo</span>.
        </h3>
        <p className="ante-leo__container__left__subtitle">
          Nam condimentum lectus vel varius auctor. Maecenas interdum elementum
          ante, ut consectetur tellus laoreet non. Etiam enim leo, efficitur in
          risus et.
        </p>
        <div className="ante-leo__container__left__imageMobile">
          <img src="./images/ante-leo.png" alt="ante-leo" />
        </div>
        <div className="ante-leo__container__left__card">
          <CardFeature
            title="Fist of Fury"
            description="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum ante, ut consectetur"
            imageUrl="./images/first-of-fury.png"
          />
          <CardFeature
            title="Enter the Dragon"
            description="Nam condimentum lectus vel varius auctor. Maecenas interdum elementum ante, ut consectetur"
            imageUrl="./images/enter-the-dragon.png"
          />
        </div>
      </div>
      <div className="ante-leo__container__right">
        <img src="./images/ante-leo.png" alt="ante-leo" />
      </div>
    </div>
  );
}

export default AnteLeo