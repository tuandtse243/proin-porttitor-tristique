import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero__container">
      <p className="hero__container__title">Proin porttitor tristique</p>
      <p className="hero__container__subtitle">
        Nulla dapibus ultricies augue egestas rutrum. Etiam tempus euismod
      </p>
      <button className="hero__container__button">Shop now</button>
    </div>
  );
}

export default Hero