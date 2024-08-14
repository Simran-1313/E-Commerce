import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css'
import img1 from "../../HeroCarousal/Frame 560.png"
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
const HeroSlider = () => {
  return (
    <div className='w-full lg:h-[344px]' >
      <Swiper
    slidesPerView={1}
    spaceBetween={0}
    loop={true}
    autoplay={
      {delay: 4000}
    }
    pagination={{
      clickable: true,
    }}
   
    modules={[Pagination,Autoplay]}
 
    className="mySwiper"
  >
    <SwiperSlide   ><img className='img-hero ' src={img1}></img></SwiperSlide>
    <SwiperSlide><img className='img-hero ' src={img1}></img></SwiperSlide>
    <SwiperSlide><img className='img-hero ' src={img1}></img></SwiperSlide>
    <SwiperSlide><img className='img-hero ' src={img1}></img></SwiperSlide>
    <SwiperSlide><img className='img-hero ' src={img1}></img></SwiperSlide>
    
  </Swiper>
    </div>
  );
};

export default HeroSlider;
