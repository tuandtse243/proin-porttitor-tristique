import React from 'react'
import './card-feature.css'

const CardFeature = (props) => {
  const { title, description, imageUrl, isLearMore=false } = props;
  return (
    <div className="card-feature__container">
      <div className="card-feature__container__image">
        <img src={imageUrl} alt={title} loading="lazy" />
      </div>
      <p className="card-feature__container__title">{title}</p>
      <p className="card-feature__container__description">{description}</p>
      {isLearMore && (
        <p className="card-feature__container__learn-more">Lear more</p>
      )}
    </div>
  );
}

export default CardFeature