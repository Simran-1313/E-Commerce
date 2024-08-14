import React from "react";
import { useSelector,useDispatch } from "react-redux";
import toast from "react-hot-toast";
import StarRating from "./StarRating";
import productimg from "../../images/Frame 611.png";
import wishlisticon from "../../images/heart small.png";
import groupicon from "../../images/Quick View.png";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../state/cartProduct";



const Card = ({ product }) => {
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const id = product.id;
  const ratingValue = product.rating.rate;
  const discount = product.discount;
  const isDiscount = product.isDiscount;
  const isNew = false;
  const count = product.rating.count;
  const price = parseFloat(product.price)
  const title = product.title.length > 25 ? product.title.substring(0,25)+' ...':product.title

  const handleClick = (id)=>{
    navigate(`/products/${id}`)
  }

  const clickHandler = (id)=>{
    const newItem = {
      productId:id,
      quantity:1
    }

    dispatch(addItem(newItem))
    toast.success("Added to Cart")
  }

  return (
    <div  className="w-[270px] h-[350px]  card">
      <div className=" image-container overflow-hidden w-[270px] h-[250px] bg-[#F5F5F5] ">
        <img onClick={()=>handleClick(id)}
          className="m-auto bg-cover absolute top-[35px] left-[40px]"
          height={180}
          width={190}
          src={product.image ||productimg }
        ></img>
        <button className="add-to-cart" onClick={()=>clickHandler(id)} >Add to Cart</button>
        {isDiscount && <div className="discount">-{discount}%</div>}
        {isNew && <div className="new">New</div>}
        <div className="card-bar flex flex-col gap-[8px] justify-center">
          <div className=" w-[34px] flex justify-center items-center bg-white h-[34px] rounded-full">
            <img width={24} height={24} src={wishlisticon}></img>
          </div>
          <div className="w-[34px] flex justify-center items-center bg-white h-[34px] rounded-full">
            <img width={24} height={24} src={groupicon}></img>
          </div>
        </div>
      </div>
      <div className="mx-auto description">
        <h2 className="font-medium mt-[16px] text-left text-base font-poppins">
          {title}
        </h2>
        <p className="flex gap-[12px] my-[8px]">
          <span className="font-medium text-base font-poppins text-[#DB4444]">
            ${price}
          </span>
          <span className="line-through font-medium text-base font-poppins text-black/50">
          {isDiscount ? `$${(price + discount*price/100).toFixed(2)}`:`$${(price+ 20).toFixed(2) }`}
          </span>
        </p>
        <div className=" gap-3 flex items-center">
          <StarRating rating={ratingValue} />
          <span className=" text-black/50 flex items-center"> ({count})</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
