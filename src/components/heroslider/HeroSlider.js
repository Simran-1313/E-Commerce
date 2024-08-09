import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlider.css'
import img1 from "../../HeroCarousal/Frame 560.png"
import { Pagination, Navigation } from 'swiper/modules';
const HeroSlider = () => {
  return (
    <div className='w-full h-[344px]' >
      <Swiper
    slidesPerView={1}
    spaceBetween={0}
    loop={true}
    pagination={{
      clickable: true,
    }}
    
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide  ><img className='img-hero ' src={img1}></img></SwiperSlide>
    <SwiperSlide><div className='bg-black w-full h-full text-white'>Slide 2</div></SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </div>
  );
};

export default HeroSlider;
