import React from 'react'
import './footer.css'
import Instagram from '../../../icons/instagram';
import Facebook from '../../../icons/facebook';
import Twitter from '../../../icons/twitter';
import Youtube from '../../../icons/youtube';
import InputForm from '../../forms/input';
import ArrowRight from '../../../icons/arrow-right';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__top">
        <div className="footer__container__top__logo">
          <img src="./images/logo-white.png" alt="logo" />
          <div className="footer__container__top__textMobile">
            <h4>Nam condimentum lectus vel varius auctor.</h4>
            <h4>Maecenas interdum elementum ante, ut consectetur.</h4>
          </div>
        </div>
        <div className="footer__container__top__socials">
          <Instagram />
          <Facebook />
          <Twitter />
          <Youtube />
        </div>
      </div>

      <div className="footer__container__text">
        <h4>Nam condimentum lectus vel varius auctor.</h4>
        <h4>Maecenas interdum elementum ante, ut consectetur.</h4>
      </div>

      <div className="footer__container__line" />

      <div className="footer__container__bottom">
        <div className="footer__container__bottom__feature">
          <p className="title">Company</p>
          <div className="footer__container__bottom__feature__list">
            <a href="#about">About us</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer__container__bottom__feature">
          <p className="title">Services</p>
          <div className="footer__container__bottom__feature__list">
            <a href="#nulladapibus">Nulla dapibus</a>
            <a href="#anteleo">Sed eget ante leo</a>
            <a href="#gainconsumer">Gain consumer</a>
          </div>
        </div>
        <div className="footer__container__bottom__feature">
          <p className="title">Resources</p>
          <div className="footer__container__bottom__feature__list">
            <a href="#blogs">Blogs</a>
            <a href="#events">Events</a>
          </div>
        </div>
        <div className="footer__container__bottom__feature">
          <p className="title">Newsletter</p>
          <div className="footer__container__bottom__feature__email">
            <InputForm label="" placeholder="Email address" type="email" />
            <div className="btn__submit">
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__container__copyright">
        <p>Copyright Agileops Testing © 2025</p>
        <p>
          <span>Privacy Policy.</span> <span>Terms and Conditions</span>
        </p>
      </div>

      <img
        className="logo__corner"
        src="./images/logo-corner.png"
        alt="logo-corner"
      />
    </div>
  );
}

export default Footer