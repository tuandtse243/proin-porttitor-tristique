import React from 'react'
import './address.css'
import Phone from '../../../icons/phone';
import Email from '../../../icons/email';
import Location from '../../../icons/location';

const Address = () => {
  return (
    <div className="address__container">
      <div className="address__container__item">
        <div>
          <Phone />
        </div>
        <p>+852 3706 5996</p>
      </div>
      <div className="address__container__item">
        <div>
          <Email />
        </div>
        <p>info@agileops.com</p>
      </div>
      <div className="address__container__item">
        <div>
          <Location />
        </div>
        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
      </div>
    </div>
  );
}

export default Address