import React from 'react'
import CategoryCarousal from '../categoryCarousal/CategoryCarousal'
import Heading from '../Heading'
import { useRef } from 'react'
import leftarrow from "../../images/icons_arrow-left.png";
import rightarrow from "../../images/icons arrow-right.png";
const Category = () => {
    const swiperRef = useRef(null);
    const slideNext = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const slidePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slidePrev();
      }
    };
  
  return (
    <div>
        <Heading title="Categories" description="Browse By Category" >
        <div className=" flex justify-end gap-[8px]">
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slidePrev}>
              <img src={leftarrow}></img>
            </button>
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slideNext}>
              <img src={rightarrow}></img>
            </button>
          </div>
        </Heading>
        <CategoryCarousal className="my-[60px]" swiperRef={swiperRef}/>
    </div>
  )
}

export default Category