import React from 'react'
import './button-common.css'
import NextBorderIcon from '../../icons/next-border-icon';

const ButtonCommon = () => {
  return (
    <button className="button__container">
      <p>Get started</p>
      <NextBorderIcon />
    </button>
  );
}

export default ButtonCommon