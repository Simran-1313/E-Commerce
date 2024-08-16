import React from 'react'
import "./loader.css"
import MainpageLayout from '../MainpageLayout'
const Loader = () => {
  return (
    <MainpageLayout className="  h-[50vh]  flex items-center justify-center ">
        <section className="loader">
    <div className="slider" style={{ '--i': 0 }}></div>
    <div className="slider" style={{ '--i': 1 }}></div>
    <div className="slider" style={{ '--i': 2 }}></div>
    <div className="slider" style={{ '--i': 3 }}></div>
    <div className="slider" style={{ '--i': 4 }}></div>
  </section>
    </MainpageLayout>
  )
}

export default Loader