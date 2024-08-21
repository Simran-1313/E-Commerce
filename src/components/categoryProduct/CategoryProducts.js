import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from "../card/Card"



const CategoryProducts = ({categoryItems}) => {
  
    return (
   
        <div className='flex flex-wrap justify-center mb-[60px] mt-[60px] gap-[40px] items-center'>{
          categoryItems.length > 0 ? (
            categoryItems.map((item) => (
              <div key={item.id} className=''>
                <Card product={item}></Card>
              </div>
            ))
          ) : (
            <p>No items found in this category.</p>
          )
        }</div>
   
  )
}

export default CategoryProducts