import React from 'react'
import "./loader.css"
import MainpageLayout from '../MainpageLayout'
const Loader = () => {
  return (
    <MainpageLayout className="  h-[50vh]  flex items-center justify-center ">
   <span class="loader"></span>
    </MainpageLayout>
  )
}

export default Loader