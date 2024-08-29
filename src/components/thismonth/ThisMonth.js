import React, { useEffect } from "react";
import Heading from "../Heading";
import { useDispatch, useSelector } from "react-redux";

import Card from "../card/Card";
import Img1 from "../../images/Frame 600.png";
import { Link } from "react-router-dom";
import img from "../../images/JBL.png";
import CountDown from "../../components/CountDown";
import { productsMonths } from "../../state/actions/products";
const ThisMonth = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productsMonths(4));
  }, [dispatch]);

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col  ">
      <Heading title="This Month" description="Best Selling Products ">
        <div className="flex md:justify-end  justify-center mt-8 md:mt-0  ">
          <Link
            to={"/products"}
            className="bg-[#DB4444] flex justify-center  items-center  px-[48px] py-[16px] text-[16px] rounded font-poppins font-medium text-white"
          >
            View All
          </Link>
        </div>
      </Heading>
      <div className="flex flex-wrap   justify-center gap-[30px] my-[60px]">
        {products.map((product) => (
          <div className=" ">
            <Card product={product} />
          </div>
        ))}
      </div>
      <div className="flex bg-black h-auto flex-wrap   text-white justify-between   items-center mt-[80px] mb-[71px]">
        <div className=" max-w-[560px]  xl:w-[550px] lg:w-[400px] md:w-[389px] px-5 py-8 md:px-7 md:py-10 lg:px-10 lg:py-14 xl:px-[56px] xl:py-[69px]">
          <h4 className="text-[#00FF66] font-[600] text-base">Categories</h4>
          <h2 className=" xl:text-[48px] text-3xl sm:text-[24px] lg:text-[32px] md:text-[28px]  font-[600] leading-[60px] my-[32px]">
            Enhance Your Music Experience
          </h2>
          <CountDown date={Date.now() + 2 * 24 * 60 * 60 * 1000} />
          <button className="mt-[40px] font-[500] text-[16px] text-white bg-[#00ff66] rounded px-[48px] py-[16px]  ">
            Buy Now
          </button>
        </div>
        <div className="mt-[40px] mb-9 md:mt-0 sm:mb-0">
          <div className="relative sm:w-[50vw] box-border ml-4 md:ml-0  w-[320px]  max-w-xl xl:w-[450px] md:w-[250px] md:mx-auto lg:w-[340px] md:my-auto lg:mr-[47px]">
            <div className="absolute inset-0 bg-[#8d8d8d]  blur-[80px] rounded-full z-0"></div>
            <img
              className="relative z-5 w-full h-full  bg-cover"
              src={img}
              alt=""
              height={330}
              width={568}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
