import React, { useRef } from "react";
import  { Swiper, SwiperSlide, useSwiper }  from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TodaysCarousal.css";
import Card from "../card/Card";
import leftarrow from "../../images/icons_arrow-left.png";
import rightarrow from "../../images/icons arrow-right.png";
import { Pagination, Navigation } from "swiper/modules";
import MainpageLayout from "../MainpageLayout";


const TodaysCarousel = ({ products,className , swiperRef}) => {


  return (
    <div className={`carousel-container-today  ${className} `}>
      
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={false}
        ref={swiperRef}
       
        modules={[Pagination, Navigation]}
        className="Todayswiper "
      >
        {products.map((product) => (
          <SwiperSlide  >
            <div className=" w-[270px]"><Card key={product.id} product={product}  /></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TodaysCarousel;
