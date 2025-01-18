import React, { useRef, useState } from 'react'
import './phone-slide.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";


import PrevArrowPhone from '../../../icons/prev-arrow-phone';
import NextArrowPhone from '../../../icons/next-arrow-phone';
import ArrowRight from '../../../icons/arrow-right';

const PhoneSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();

  const textSelect = [
    "Nulla dapibus",
    "Etiam enim leo, efficitur in risus et.",
    "Nam condimentum lectus vel.",
  ];

  const onClickNextSlide = () => {
    swiperRef.current.slideNext();
  };

  const onClickPrevSlide = () => {
    swiperRef.current.slidePrev();
  };

  const onClickSelectSlide = (index) => {
    swiperRef.current.slideToLoop(index, 600);
  };

  return (
    <div className="phone-slide__container">
      <div className="text__container">
        <div className="text__container__title">
          <h3>Donec ac neque porta fringilla.</h3>
          <p>
            Nam condimentum lectus vel varius auctor. Maecenas interdum
            elementum ante, ut consectetur tellus laoreet non. Etiam enim leo,
            efficitur in risus et.
          </p>
        </div>
        <div className="text__container__selectSlide">
          {textSelect.map((item, index) => (
            <div
              key={index}
              className="text__container__selectSlide__item"
              onClick={() => onClickSelectSlide(index)}
            >
              <p style={currentIndex === index ? { fontWeight: "700" } : {}}>
                {item}
              </p>
              <ArrowRight />
            </div>
          ))}
        </div>
      </div>

      <div className="prev-arrow" onClick={onClickPrevSlide}>
        <PrevArrowPhone />
      </div>
      <div className="next-arrow" onClick={onClickNextSlide}>
        <NextArrowPhone />
      </div>
      <img
        className="phone-layout"
        src="./images/phone-layout.png"
        alt="phone-layout"
      />
      <div className="phone-slide__container__wrapper">
        <Swiper
          grabCursor={true}
          keyboard={true}
          speed={400}
          loop={true}
          slideToClickedSlide={true}
          centeredSlides={true}
          className="phone-slide"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChangeTransitionEnd={() => {
            setCurrentIndex(swiperRef.current?.realIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: "1.5%",
              centeredSlides: false,
            },
            375: {
              slidesPerView: 2.5,
              spaceBetween: "1.5%",
              centeredSlides: true,
            },
            769: {
              slidesPerView: 4,
              spaceBetween: "1.5%",
            },
            1201: {
              slidesPerView: 5,
              spaceBetween: "1.5%",
            },
          }}
        >
          <SwiperSlide>
            <div>
              <img src="./images/phone-slide-1.png" alt="phone-slide-1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./images/phone-slide-2.png" alt="phone-slide-2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./images/phone-slide-3.png" alt="phone-slide-3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./images/phone-slide-4.png" alt="phone-slide-4" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./images/phone-slide-4.png" alt="phone-slide-5" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PhoneSlide