import React, { useEffect } from 'react'
import Heading from "../Heading"
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../../state/productSlice'
import Card from '../card/Card'
import Img1 from "../../images/Frame 600.png"
import { Link } from 'react-router-dom'
import img from "../../images/JBL.png"
import CountDown from "../../components/CountDown"
const ThisMonth = () => {
    const dispatch = useDispatch();
    const {items:products, loading, error} = useSelector((state)=>state.products)
    useEffect(()=>{
        dispatch(fetchProducts(4));
        
    },[dispatch])
    
    console.log(products)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div className='flex flex-col  '>
        <Heading title="This Month" description="Best Selling Products ">
          <div className='flex justify-end '>
          <Link to={"/products"}  className="bg-[#DB4444] flex justify-center  items-center  px-[48px] py-[16px] text-[16px] rounded font-poppins font-medium text-white" >View All</Link >
          </div>
        </Heading>
        <div className='flex flex-wrap   justify-center gap-[30px] my-[60px]'>
      {products.map((product) => (
       <div className=' '>
         <Card product={product}/>
       </div>
        
      ))}
    </div>
    <div className='flex bg-black h-auto flex-wrap  text-white justify-between items-center mt-[80px] mb-[71px]' >
      <div className=' max-w-[600px]  px-[56px] py-[69px]'>
      <h4 className='text-[#00FF66] font-[600] text-base'>Categories</h4>
      <h2 className='text-[48px] font-mono font-[600] leading-[60px] my-[32px]'>Enhance Your Music Experience</h2>
      <CountDown date={Date.now() + 2 * 24 * 60 * 60 * 1000}/>
      <button className='mt-[40px] font-[500] text-[16px] text-white bg-[#00ff66] rounded px-[48px] py-[16px] '>Buy Now</button>
      </div>
      <div>
      <div className='relative w-[600px]   h-auto flex justify-center items-center pr-[44px] pb-[43px] pt-[37px] pl-[27px] rounded-full  bg-black bg-opacity-10 backdrop-filter backdrop-blur-xl'>
  <div className='absolute flex items-center h-auto  inset-0  bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_0%,_rgba(0,0,0,0.1)_60%,_rgba(0,0,0,0)_90%)] rounded-full'></div>
  <img className='relative w-full h-full  bg-cover' src={img} alt='' height={330} width={568} />
</div>
      </div>
    </div>
    </div>
  )
}

export default ThisMonth