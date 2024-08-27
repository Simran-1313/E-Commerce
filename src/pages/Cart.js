import React, { useEffect, useState } from "react";
import { updateItem,removeItem } from "../state/reducer/products/cartProduct";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import MainpageLayout from "../components/MainpageLayout";
import Loader from "../components/loader/Loader"

import { useDispatch, useSelector } from "react-redux";
import img1 from "../Icons/arrow1.png";
import img2 from "../Icons/arrow2.png";
import cross from "../Icons/cross.png"
import { BiCart } from "react-icons/bi";
import { productsDetails } from "../state/actions/productsDetails";



const Cart = () => {
  const items = useSelector((state) => state.cartProducts.items);

  const[list,setList] = useState(items)
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  const { item: productDetail } = useSelector(
    (state) => state.productDetails
  );
 
  useEffect(() => {
    list.forEach((item) => dispatch(productsDetails(item.productId)));
  }, [dispatch,list]);

  useEffect(() => {
    setList(items);
  }, [items]);
  
  useEffect(()=>{
    if(productDetail){
      setProductData((prevData)=>({
        ...prevData,
        [productDetail.id]:productDetail
      }))
      
    }
  },[productDetail])

  const getProductDetail = (productId) => productData[productId];
  const totalPrice = items.reduce((total, item) => {
    const product = productData[item.productId];
    const itemTotal = product ? product.price * item.quantity : 0;
    return total + itemTotal;
  }, 0);


  const handleQuantityChange = (id,count)=>{
    const item = items.find((item)=> item.productId === id)
    if(item){
      dispatch(updateItem({id,quantity: Math.max(1,item.quantity +count)}))
    }
   
  }
  const handleClick = (id)=>{
    dispatch(removeItem({id}))
    toast.success("Item removed")
  }

  return (
    <MainpageLayout className="mx-[1.5rem]">
      <div className="mt-[80px] mb-[140px]">
        <div className="flex justify-between  font-[400] shadow text-[16px] py-[24px] px-[40px]">
          <h2 className="w-[250px] ">Product</h2>
          <h2 className=" text-right">Price</h2>
          <h2 className=" text-center">Quantity</h2>
          <h2 className="text-right">Sub Total</h2>
        </div>
        {list.length === 0 &&<div className="text-4xl gap-4 font-bold flex items-center justify-center my-12 h-[30vh]"> <BiCart/>Cart is Empty!</div> }
        {list.map((item) => {
          const product = getProductDetail(item.productId);
          return product ? (
            <div
              className="flex justify-between font-poppins sm:text-[16px] font-[400] items-center py-[16px] shadow md:px-[40px] my-[20px]"
              key={item.productId}
            >
              <div className="flex items-center justify-center">
                <div className=" relative mr-[10px]">
                 { <div className="absolute left-9 -top-3" onClick={()=>handleClick(item.productId)}><img className="bg-red-600 p-[4px] rounded-full w-5" src={cross}></img></div>}
                  <img
                    width={50}
                    height={50}
                    className="bg-cover"
                    src={product.image}
                  ></img>
                </div>
                <div className=" w-[100px] sm:w-[150px]  h-auto flex">{product.title}</div>
              </div>
              <div className=" sm:w-[80px] flex justify-center">${product.price}</div>
              <div className="flex items-center justify-center w-[55px] sm:w-[72px]  h-[44px] rounded border-[1px] border-black">
                <div className="">{item.quantity}</div>
                <div className="flex flex-col ml-2 gap-4 ">
                  <button
                    onClick={() => handleQuantityChange(item.productId, -1)}
                    className="px-2"
                  >
                    <img src={img1}></img>
                  </button>

                  <button
                    onClick={() => handleQuantityChange(item.productId,1)}
                    className="px-2"
                  >
                    <img src={img2}></img>
                  </button>
                </div>
              </div>
              <div className="  sm:w-[50px]  sm:text-right">
                ${(product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ) : (<>
          <div key={item.productId}><Loader/></div>
          </>
            
          );
        })}
        <div className="flex justify-between">
          <Link
            to={"/"}
            className="px-[48px] py-[16px] flex justify-center border-[1px] border-black rounded items-center"
          >
            Return To Shop
          </Link>
          <button className="px-[48px] py-[16px] border-[1px] border-black rounded flex justify-center items-center">
            Update Cart
          </button>
        </div>
        <div className="flex  justify-between flex-wrap ">
          <div className="flex mt-[80px] flex-wrap gap-[16px] ">
            <input
              type="text"
              className="border-[1px] w-full sm:w-auto min-w-[300px] pl-[24px] h-min py-[16px] rounded border-black"
              placeholder="Coupon Code"
            ></input>
            <button className="flex mx-auto bg-[#DB4444] h-min rounded text-[16px] font-[500] text-white  items-start py-[16px] px-[48px]">
              Apply Coupon
            </button>
          </div>
          <div className="md:min-w-[470px] mx-auto w-full font-poppins mt-[80px] px-[24px] py-[32px] border-[1.5px] rounded border-black flex flex-col">
            <h2 className=" font-[500] text-[20px] pb-6">Cart Total</h2>
            <div className="flex justify-between border-b pb-[16px] border-black/50">
              <span className="font-[400] text-[16px]">Sub Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b py-[16px] border-black/50">
              <span className=""> Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between py-[16px]">
              <span className="">Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-center">
              <button className="font-[500] rounded text-white font-poppins text-[16px] px-[48px] py-[16px] bg-[#DB4444]">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainpageLayout>
  );
};

export default Cart;
