import React from 'react'
import './contact.css'
import InputForm from '../../forms/input'
import ButtonCommon from '../../button-common';
import TextareaForm from '../../forms/textarea';

const Contact = () => {
  return (
    <div className="contact__container" id='contact'>
      <div className="contact__container__wrapper">
        <div className="contact__container__wrapper__title">
          <h3>Let us know how we can help you</h3>
          <p>Nam condimentum lectus vel varius auctor.</p>
          <p>
            Maecenas interdum elementum ante, ut consectetur tellus laoreet non.
            Etiam enim leo, efficitur in risus et.
          </p>
        </div>
        <div className="contact__container__wrapper__form">
          <div className="contact__container__wrapper__form__haft">
            <InputForm label="Your Name" />
            <InputForm label="Your Email" type="email" />
          </div>
          <InputForm label="Your Subject" />
          <TextareaForm label="Comment" />
        </div>
        <div className="contact__container__wrapper__button">
          <ButtonCommon />
        </div>
      </div>
    </div>
  );
}

export default Contact