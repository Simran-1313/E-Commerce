import React, { useEffect, useState } from "react";
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
const Homepage = () => {
  //  const [products, setProducts] = useState([])

  //  useEffect(()=>{
  //   const Products = async()=>{
  //     const res = await fetch('../components/ProductsData.json')
  //      const Items = await res.json();
  //      setProducts(Items.products)
  //      console.log(Items.products)
  //   }

  //   Products();
  //  },[])

  return (
    <>
      <main className="bg-[#ffff]  ">
        <MainpageLayout>
        
          <div className="flex flex-wrap-reverse mb-[9rem] lg:flex-nowrap md:flex-wrap-reverse  md:mx-auto   gap-[16px] w-[100%] ">
            <div className="pt-[40px] flex justify-normal mx-auto ">
              <Sidebar sections={sections} />
            </div>
           
            <div className=" max-w-[85%] lg:border-l-[1px] border-black/30  md:border-0 flex justify-center px-[45px] pt-[40px] ">
              <HeroSlider />
            </div>
          </div>
        </MainpageLayout>
        <div>
          <Todays />
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
