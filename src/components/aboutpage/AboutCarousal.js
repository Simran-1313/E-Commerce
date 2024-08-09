import React from 'react'
import  { Swiper, SwiperSlide, useSwiper }  from "swiper/react";
import { Pagination, Navigation , Autoplay} from "swiper/modules";
import "swiper/css";
import img1 from "../../images/image 46.png"
import "./About-Carousal.css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slide from './Slide';
import data from './Aboutdata';
const AboutCarousal = () => {
  return (
    <div className='flex mx-auto max-w-[1170px]  mt-[140px]'>
         <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      autoplay={
        {delay: 5000}
      }
      modules={[Pagination,Autoplay]}
      className='AboutCarousal'
      style={{width:"full" ,height:600}}
    >
      <div className='flex mx-auto'>
      {
        data.map((item,index)=>(
          <SwiperSlide style={{width:370}} data-swiper-autoplay="2000" key={index}>
        <div className="slide-content" >
         <Slide item={item}/>
        </div>
      </SwiperSlide>
        ))
      }
      </div>
      
    </Swiper>
    </div>
  )
}

export default AboutCarousal