import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from "../components/card/Card"

import { useParams } from 'react-router-dom'
import MainpageLayout from '../components/MainpageLayout';

const Category = () => {
  const {category} = useParams();
  const [categoryItems,setCategoryItems] = useState([]);
  useEffect(()=>{
    const fetchCategoryItems = async()=>{
        const items = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        setCategoryItems(items.data);
        console.log(items.data)
    }
    fetchCategoryItems();

  },[])
    return (
    <MainpageLayout>
        <div className='flex flex-wrap justify-center mt-[60px] gap-[40px] items-center'>{
        categoryItems.map((item)=>(<div className=''>
        <Card product={item}></Card></div>))
        }</div>
    </MainpageLayout>
  )
}

export default Category