
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
const Sidebar = ({sections}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  
console.log(sections)
  return (
    <div className='w-[217px] h-auto md:text-[16px] text-[12px]   flex flex-col gap-[8px] lg:gap-[16px]'>
    {sections.map((category, index) => (
      <div key={index}>
     {  category?.categories?.length ?   <div
            onClick={() => toggleAccordion(index)}
            style={{
              padding: "",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: openIndex === index ? "#f0f0f0" : "white",
            }}
          >
            <div style={{  }}>{category.title}</div>
            <div><svg
              className={`md:w-6 md:h-6  w-3 h-3 transition-transform transform ${
                openIndex === index ? "rotate-180" : "-rotate-90"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
              />
            </svg></div>
          </div>:null
}       {
        category?.categories?.length ? openIndex === index && category?.categories.map((subcategory,index)=>(
          <div key={index}>
            <Link to={subcategory.link}>{subcategory.name}</Link>
            </div>
        )):(<div> <Link to={category.link}>{category.title}</Link> </div>)
       }
      </div>
    ))}
  </div>
  )
}

export default Sidebar