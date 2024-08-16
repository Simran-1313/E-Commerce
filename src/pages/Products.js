import React, { useEffect} from "react";
import {fetchProductsAll} from "../state/productsAllSlice"
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import MainpageLayout from "../components/MainpageLayout";
import Loader from "../components/loader/Loader";

const Products = () => {
    const dispatch = useDispatch()
    const {items:products,loading, error} = useSelector((state)=>state.productsAll)
    
    useEffect(()=>{
      dispatch(fetchProductsAll())
    },[dispatch])
    if(loading) {
      return (<Loader/>)
    }
  return (
    <MainpageLayout>
        <div className="flex flex-wrap gap-[40px] justify-center items-center mt-[80px] mb-[140px]">
        {
            products.map((product)=>(
                <Card product={product}/>
            ))
        }
        </div>
    </MainpageLayout>
  )
}

export default Products