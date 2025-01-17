import React from 'react'
import './title-block.css'

const TitleBlock = (props) => {
  const {title, description} = props;

  return (
    <div className="title-block__container">
      <h3 className="title-block__container__title">{title}</h3>
      <div className="title-block__container__description">{description}</div>
    </div>
  );
}

export default TitleBlock