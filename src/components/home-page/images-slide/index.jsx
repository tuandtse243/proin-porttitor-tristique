import React, { useRef } from 'react'
import './images-slide.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import ImageSlideItem from './image-slide-item';
import NextArrowSlide from '../../../icons/next-arrow-slide';
import PrevArrowSlide from '../../../icons/prev-arrow-slide';

const ImagesSlide = () => {
  const swiperRef = useRef();

  const dataSlides = [
    {
      title: "Cura sodales.",
      subtitle: "Cras ac ipsum",
      description: "uspendisse accumsan nibh vitae nisl maximus.",
      imageUrl: "./images/image-slide-1.png",
    },
    {
      title: "Cura sodales.",
      subtitle: "Cras ac ipsum",
      description: "uspendisse accumsan nibh vitae nisl maximus.",
      imageUrl: "./images/image-slide-1.png",
    },
    {
      title: "Cura sodales.",
      subtitle: "Cras ac ipsum",
      description: "uspendisse accumsan nibh vitae nisl maximus.",
      imageUrl: "./images/image-slide-1.png",
    },
    {
      title: "Cura sodales.",
      subtitle: "Cras ac ipsum",
      description: "uspendisse accumsan nibh vitae nisl maximus.",
      imageUrl: "./images/image-slide-1.png",
    },
  ];

  const onClickNextSlide = () => {
    swiperRef.current.slideNext();
  }

  const onClickPrevSlide = () => {
    swiperRef.current.slidePrev();
  }

  return (
    <div className="images-slide__container">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={30}
        cssMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {dataSlides.map((item, index) => (
          <SwiperSlide key={index}>
            <ImageSlideItem
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </SwiperSlide>
        ))}
        <div className="prev-arrow" onClick={onClickPrevSlide}>
          <PrevArrowSlide />
        </div>
        <div className="next-arrow" onClick={onClickNextSlide}>
          <NextArrowSlide />
        </div>
      </Swiper>
    </div>
  );
}

export default ImagesSlide;