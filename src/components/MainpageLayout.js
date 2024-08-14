import React from 'react'
import Breadcrumb from './Breadcrumb'
const MainpageLayout = ({children, className}) => {
  return (
    <div className={` mx-[2rem] lg:mx-[8.5rem] md:mx-[6rem] sm:mx-[3rem]  overflow-hidden ${className}`} >
      {children}</div>
  )
}

export default MainpageLayout