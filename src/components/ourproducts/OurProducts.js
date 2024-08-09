import React,{useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid"; 
import Card from "../card/Card";
import { Pagination, Navigation, Grid } from "swiper/modules";
import Heading from "../Heading";
import leftarrow from "../../images/icons_arrow-left.png";
import rightarrow from "../../images/icons arrow-right.png";
import { Link } from "react-router-dom";


const OurProducts = ({products, className}) =>{
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

    return(
        <div>
            <Heading title="Our Products" description="Explore Our Products">
            <div className=" flex justify-end gap-[8px]">
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slidePrev}>
              <img src={leftarrow}></img>
            </button>
            <button className="button w-[46px] h-[46px] rounded-full flex  items-center justify-center bg-[#f5f5f5]" onClick={slideNext}>
              <img src={rightarrow}></img>
            </button>
          </div>
            </Heading>
            <div className={`flex my-[60px] ${className}`}>
        <Swiper
          slidesPerView={"auto"} // Number of slides visible at once
          spaceBetween={30}
          loop={false}
          grid={{
            rows: 2,
             
          }}
          ref={swiperRef}
          modules={[Pagination, Navigation, Grid]}
          className="Swiper"
          style={{height:800}}
        >
          
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{width:270}} >
              <div className="w-[270px]">
                <Card product={product} />
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <Link to={"/products"} className="bg-[#DB4444] flex justify-center items-center  px-[48px] py-[16px] text-[16px] rounded font-poppins font-medium text-white">View All Products</Link>
      </div>
        </div>
    )
}
export default OurProducts