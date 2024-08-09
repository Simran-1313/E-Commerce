import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Card1 from "../../Icons/CategoryCellPhone"
import Card2 from "../../Icons/CategoryComputer"
import Card3 from "../../Icons/CategorySmartWatch"
import Card4 from "../../Icons/CategoryCamera"
import Card5 from "../../Icons/CategoryHeadphones"
import Card6 from "../../Icons/CategoryGaming"
import categoryData from "./CategoryData";
const CategoryCarousal = ({ swiperRef, className }) => {
  const [activeSlide, setActiveSlide] = useState(null);


  return (
    <div className={` ${className}`}>
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      loop={false}
      ref={swiperRef}
      modules={[Pagination, Navigation]}
      className=""
    >
      {categoryData.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ width: 170, height: 145, rowGap: 30 }}
          onMouseEnter={() => setActiveSlide(item.id)}
          onMouseLeave={() => setActiveSlide(null)}
       
        >
          <div
            className={`flex flex-col text-base font-normal justify-center items-center w-full h-full border-[1px] border-black/30 rounded ${
              activeSlide === item.id ? "hover:bg-red-500 text-white" : ""
            }`}
          >
                         {activeSlide === item.id ? (
                <item.cardComponent color="#ffffff" />
              ) : (
                <item.cardComponent color={item.color} />
              )}

            {item.title}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default CategoryCarousal;
