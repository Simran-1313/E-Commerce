import React, { useRef ,useEffect} from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchProductsAll} from "../../state/productsAllSlice"
import Heading from "../Heading";
import TodaysCarousel from "../todaysCarousal/TodaysCarousal";

import MainpageLayout from "../MainpageLayout";
import leftarrow from "../../images/icons_arrow-left.png";
import rightarrow from "../../images/icons arrow-right.png";

const Todays = () => {

  const dispatch = useDispatch()
  const {items:products,loading, error} = useSelector((state)=>state.productsAll)
  
  useEffect(()=>{
    dispatch(fetchProductsAll())
  },[dispatch])
  
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <MainpageLayout className=" ">
        <Heading className="flex-wrap" title="Today's" description="Flash  Sales" isCounter={true}>
          
          <div className="  justify-end gap-[8px] hidden lg:flex">
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slidePrev}>
              <img src={leftarrow}></img>
            </button>
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slideNext}>
              <img src={rightarrow}></img>
            </button>
          </div>
        </Heading>
      </MainpageLayout>
     
     <TodaysCarousel
        products={products}
        swiperRef={swiperRef}
        className=" mt-[40px] mx-4 lg:ml-[8.5rem] md:ml-[6rem] sm:ml-[3rem] "
      />
    
      <div className="flex justify-center items-center mt-[60px]">
        <Link className="bg-[#DB4444] flex justify-center items-center  px-[48px] py-[16px] text-[16px] rounded font-poppins font-medium text-white" to={"/products"} >View All Products</Link>
      </div>
      
    </>
  );
};

export default Todays;
  