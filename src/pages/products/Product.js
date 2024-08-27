import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import MainpageLayout from "../../components/MainpageLayout";
import StarRating from "../../components/card/StarRating";
import likedIcon from "../../Icons/Wishlist.png"
import { FcAddColumn, FcPlus } from "react-icons/fc";
import { FaCartPlus } from "react-icons/fa";
import { FaPlugCirclePlus } from "react-icons/fa6";
import Minus from "../../Icons/Minus"
import Plus from "../../Icons/Plus"
import img1 from "../../Icons/icon-delivery.png"
import img2 from "../../Icons/Icon-return.png"
import Loader from "../../components/loader/Loader";
import CategoryProducts from "../../components/categoryProduct/CategoryProducts"
import Heading from "../../components/Heading";
import { productsDetails } from "../../state/actions/productsDetails";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const {
    item: productDetails,
    loading,
    error,
  } = useSelector((state) => state.productDetails);
  const colors = ["#aec6cf", "#ff6961"];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [category,setCategory] = useState("")
  
  useEffect(()=>{
    if(productDetails){
      setCategory(productDetails.category)
    }
  },[productDetails])
  
  const [categoryItems,setCategoryItems] = useState([]);

  useEffect(()=>{
    const fetchCategoryItems = async()=>{
        const items = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        setCategoryItems(items.data);
        console.log(items.data)
    }
    fetchCategoryItems();

  },[category])

  useEffect(() => {
    dispatch(productsDetails(productId));
  }, [dispatch, productId]);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [count, setCount] = useState(1);

  const handleDecrement=()=>{
    if(count>1) setCount(count-1);
  }
  const handleIncrement= ()=>{
    setCount(count+1);
  }
  if (loading) return <Loader/>;
  if (error) return <>Error: {error}</>;
  if (!productDetails) return <>No product details available.</>;

  return (
    <>
      <MainpageLayout>
        <div className="flex my-[40px] justify-between  flex-wrap">
          <div className="flex  justify-center items-center mx-auto ">
            <img
              className="md:w-[500px] md:h-[600px] w-[250px] h-[250px] bg-contain "
              src={productDetails.image}
            ></img>
          </div>
          <div className=" w-[400px] mx-auto m-8 ">
            <h1 className=" text-2xl font-semibold">{productDetails.title}</h1>
            <div>
              <h2 className="text-xl my-4 flex   items-center ">
                <div className="flex items-center h-[21px]">
                  <span className="flex items-center gap-x-[16px] ">
                    <StarRating
                      rating={`${productDetails.rating.rate}`}
                    ></StarRating>
                    <span className=" text-sm text-black/50 flex items-center justify-center">
                      &nbsp; ({productDetails.rating.count} reviews)
                    </span>
                    <span className="text-sm border-l-[2px] h-[16px] border-black/40  pl-4  text-[#00FF66] flex items-center ">
                      In Stock
                    </span>
                  </span>
                </div>
              </h2>
              <p className=" text-2xl mt-3">${productDetails.price}</p>
            </div>
            <p className="py-[24px] text-black/80 border-b-[1.5px] border-black/40 ">
              {productDetails.description}
            </p>

            <div className="flex flex-col w-full ">
              <div className="my-[12px] flex  items-center">
                <span className="text-[20px] font-normal">Colors:</span>
                <div className="flex gap-[8px] mx-[24px] ">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`  w-[32px] h-[32px]  rounded-full flex items-center justify-center ${
                        selectedColor === color
                          ? "border-[2px] border-black "
                          : "border-0 p-0 border-transparent "
                      }`}
                    >
                      <div
                        className={`inline-block w-5 h-5 rounded-full    cursor-pointer ${
                          selectedColor === color ? "w-[20px] h-[20px] " : "w-[28px] h-[28px] "
                        } `}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-[12px]">
                <span className="text-[20px] font-normal ">Size:</span>
                <div className="inline-block mx-[24px]">
                  {sizes.map((size, index) => (
                    <div
                      key={index}
                      className={`inline-block px-4 py-2 mr-2 border rounded cursor-pointer ${
                        selectedSize === size
                          ? "bg-red-500 text-white border-red-500"
                          : "border-black"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      <div>{size}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex    ">
                  <button onClick={handleDecrement} className="rounded-l group p-2 border-[1px] border-r-0 border-black hover:border-red-500 hover:bg-red-500"><Minus className=" group-hover:invert "/></button>
                  <div className="px-[34px] py-[8px] text-[20px] flex items-center justify-center border-[1px]  border-black">{count}</div>
                  <button onClick={handleIncrement} className="rounded-r group p-2 border-[1px] border-black border-l-0 hover:bg-red-500 hover:border-red-500"><Plus className="group-hover:invert"/></button>
                </div>
                <div className="bg-red-500 px-[24px] md:px-[48px] text-white flex justify-center items-center font-[500]  rounded text-[16px]">
                  Buy Now
                </div>
               <div className="border rounded flex items-center justify-center "> <a className="px-[4px]"><img className="" height={32} width={32} src={likedIcon}></img></a></div>

              </div>
              <div className=" border-[1px] border-black rounded mt-[40px]">
                  <div className="flex pt-[24px] pl-[16px] pb-[16px] border-b-[1px] border-black"> <div className="mr-[16px]"><img src={img1}></img></div>
                  <div className="inline-block">
                  <h2 className="font-[500]">Free Delivery</h2>
                  <p className="text-[12px]">Enter your postal code for Delivery Availability</p> </div>
                  </div>
                  <div className="flex  pb-[24px] pl-[16px] pt-[16px]">
                    <div className="mr-[16px]"><img src={img2}></img></div>
                    <div>
                      <h2 className="font-[500]">Return Delivery</h2>
                      <p className="text-[12px]">Free 30 Days Delivery Returns. Details</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
       <Heading title="Related">
       <CategoryProducts categoryItems={categoryItems} />
       </Heading>
      </MainpageLayout>
    </>
  );
};

export default Product;
