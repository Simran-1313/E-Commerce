import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import products from "../components/ProductsData.json";
import Layout from "../components/Layout";
import HeroSlider from "../components/heroslider/HeroSlider";
import Breadcrumb from "../components/Breadcrumb";
import TodaysCarousel from "../components/todaysCarousal/TodaysCarousal";
import sections from "../components/sidebar/Section";
import Sidebar from "../components/sidebar/Sidebar";
import MainpageLayout from "../components/MainpageLayout";
import Heading from "../components/Heading";
import Todays from "../components/todays/Todays";
import Category from "../components/category/Category";
import ThisMonth from "../components/thismonth/ThisMonth";
import OurProducts from "../components/ourproducts/OurProducts";
import Featured from "../components/featured/Featured";
import EndTags from "../components/EndTags";
import Loader from "../components/loader/Loader";
import { productsAll } from "../state/actions/productsAll";
const Homepage = () => {
  
  const dispatch = useDispatch()
  const {items:products,loading, error} = useSelector((state)=>state.productsAll)
  
  useEffect(()=>{
    dispatch(productsAll())
  },[dispatch])
  
  if (loading) return <Loader/>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <main className="bg-[#ffff]  ">
        <MainpageLayout>
        
          <div className="flex flex-wrap-reverse lg:mb-[9rem] mb-12 lg:flex-nowrap md:flex-wrap-reverse  md:mx-auto   gap-[16px] w-[100%] ">
            <div className=" lg:pt-[40px] pt-8 flex justify-normal  ">
              <Sidebar sections={sections} />
            </div>
           
            <div className=" md:max-w-[85%]  w-[100%]  mt-8 md:mt-0  md:mx-auto lg:mx-0 lg:border-l-[1px] border-black/30  md:border-0  flex justify-center md:px-[45px] md:pt-[40px] ">
              <HeroSlider />
            </div>
          </div>
        </MainpageLayout>
        <div>
          <Todays products={products} />
        </div>
        <MainpageLayout>
          <div className="w-full bg-black/30 h-[1px] my-[60px] " />
          <Category />
          <div className="w-full bg-black/30 h-[1px] my-[70px] " />
          <ThisMonth/>
          <OurProducts products={products}/>
          <Featured/>
          <EndTags/>
        </MainpageLayout>
      </main>
    </>
  );
};

export default Homepage;
