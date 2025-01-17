import React from 'react'
import './image-slide-item.css'

const ImageSlideItem = (props) => {
  const {title, subtitle, description, imageUrl} = props;

  return (
    <div
      className="image-slide-item__container"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="image-slide-item__container__subtitle">{subtitle}</div>
      <div className="image-slide-item__container__title">{title}</div>
      <p className="image-slide-item__container__description">{description}</p>
    </div>
  );
}

export default ImageSlideItem