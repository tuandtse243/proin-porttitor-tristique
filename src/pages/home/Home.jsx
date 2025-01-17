import React from 'react'
import './home.css'
import NotificationBanner from '../../components/home-page/notification-banner';
import Navigation from '../../components/home-page/navigation';
import Hero from '../../components/home-page/hero';
import Logos from '../../components/home-page/logos';
import AnteLeo from '../../components/home-page/ante-leo';
import SucheJob from '../../components/home-page/suche-job';
import ImagesSlide from '../../components/home-page/images-slide';
import DonecAcNeque from '../../components/home-page/donec-ac-neque';
import Contact from '../../components/home-page/contact';
import Address from '../../components/home-page/address';
import Footer from '../../components/home-page/footer';
import PhoneSlide from '../../components/home-page/phone-slide';

const Home = () => {
  return (
    <div className="home__container">
      <NotificationBanner />
      <div className="wrapper__block">
        <Navigation />
        <Hero />
        <Logos />
        <div className="wrapper__block__mobile">
          <AnteLeo />
          <SucheJob />
        </div>
        <ImagesSlide />
        <div className="wrapper__block__mobile">
          <DonecAcNeque />
        </div>
      </div>
      <PhoneSlide />
      <Contact />
      <Address />
      <Footer />
    </div>
  );
}

export default Home