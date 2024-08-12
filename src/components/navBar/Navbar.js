import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../navBar/Banner";
import cartIcon from "../../Icons/Cart1.png";
import SearchInput from "../SearchInput";
import likedIcon from "../../Icons/Wishlist.png";
import User from "../../Icons/User";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 

const CustomLink = ({ to, className = "", title }) => {
  const router = useLocation();
  return (
    <Link to={to} className={`${className} md:text-[14px] lg:text-[16px] relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-[1px] group-hover:w-full transition-[width] ease duration-300 ${router.pathname === to ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 850);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation()
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 850);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(()=>{
    setIsMenuOpen(false);

  },[location])

  return (
    <>
      <Banner />
      <div className="relative">
        <div className={`flex bg-white  xl:px-[136px] lg:px-[70px] sm:px-[20px] md:px-[40px] px-[20px] justify-between items-center mt-[40px]`}>
        {!isMdScreen && (
            <div className="flex items-center ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black focus:outline-none"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-8 h-8 " />
                ) : (
                  <Bars3Icon className="w-8 h-8 " />
                )}
              </button>
            </div>
          )}
          <div ><h1 className="font-[700] text-[24px] font-poppins">Exclusive</h1></div>
          
       
          
          
   
          
            <div className={`hidden md:flex gap-[48px] ${isMdScreen ? 'flex' : 'hidden'}`}>
              <CustomLink title='Home' to='/' />
              <CustomLink title='Contact' to='/contact' />
              <CustomLink title='About' to='/about' />
              <CustomLink title='Sign Up' to='/signup' />
            </div>
            <div className="flex gap-[16px] ">
              { isMdScreen?
                <>
                <SearchInput placeholder="Whats you looking for ?" className="max-w-[243px] lg:w-[210px] xl:w-[250px]  " />
                <a><img height={32} width={32} src={likedIcon} alt="Wishlist" /></a>
              <Link to={"/cart"}><img height={32} width={32} src={cartIcon} alt="Cart" /></Link>
              <Link to={"/MyAccount"}><User /></Link></>
                : <SearchInput  className=" w-[200px]" placeholder="Whats you looking for" />
              }
              
            </div>
           
        </div>
        
        
        <div className={` ${isMenuOpen ? 'block' : 'hidden'} absolute z-10 top-full left-0 w-full bg-white shadow-lg`}>
          <div className="flex flex-col  p-4">
         
            <Link  to='/' className="py-2" >Home</Link>
            <Link  to='/contact' className="py-2" >Contact</Link>
            <Link  to='/about' className="py-2" >About</Link>
            <Link  to='/signup' className="py-2" >Sign Up</Link>
            
              <a className="flex gap-4 py-2 items-center"> Liked Items</a>
              <Link to={"/cart"} className="flex gap-4 items-center py-2"> Cart</Link>
              <Link to={"/MyAccount"} className="flex gap-4 items-center py-2"> Profile</Link>
          </div>
        </div>
        
      </div>
     
      <div className="w-full mt-[16px] h-[0.5px] bg-black"></div>
    </>
  );
};

export default Navbar;
