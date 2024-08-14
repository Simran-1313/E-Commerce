import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Banner from "../navBar/Banner";
import cartIcon from "../../Icons/Cart1.png";
import SearchInput from "../SearchInput";
import likedIcon from "../../Icons/Wishlist.png";
import User from "../../Icons/User";
import { useAnimate,stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import SmallNavbar from "./SmallNavbar";

const CustomLink = ({ to, className = "", title }) => {
  const router = useLocation();
  return (
    <Link to={to} className={`${className} md:text-[14px] lg:text-[16px]  relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-[1px] group-hover:w-full transition-[width] ease duration-300 ${router.pathname === to ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
function useMenuAnimation(isMenuOpen){
  const [scope,animate] = useAnimate()
 
  useEffect(() => {
    const menuAnimations = isMenuOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];
        animate([
          [
            "path.top",
            { d: isMenuOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
            { at: "<" }
          ],
          ["path.middle", { opacity: isMenuOpen ? 0 : 1 }, { at: "<" }],
          [
            "path.bottom",
            { d: isMenuOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
            { at: "<" }
          ],
          ...menuAnimations
        ]);


    
  }, [isMenuOpen])

  return scope;
  

}

const Navbar = () => {

  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 850);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useLocation()
  const scope = useMenuAnimation(isMenuOpen);
  useEffect(()=>{
    setIsMenuOpen(false)
  },[navigation])

  

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 850);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <>
      <Banner />
      <div className="">
        <div className={`flex bg-white  xl:px-[115px] max-w-[1440px] mx-auto lg:px-[70px] sm:px-[20px] md:px-[40px] px-[20px] justify-between items-center mt-[28px] lg:mt-[40px] sm:mt-[20px] `}>
        {!isMdScreen ? (
            <div  ref={scope} className="flex  items-center ">
              <SmallNavbar/>
              <MenuToggle toggle={()=>setIsMenuOpen(!isMenuOpen)} />
            </div>
          ):<div ref={scope} className="hidden"/>}
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
                <SearchInput placeholder="Whats you looking for ?" className="max-w-[243px] lg:w-[210px] xl:w-[250px]    " />
                <a><img height={32} width={32} src={likedIcon} alt="Wishlist" /></a>
              <Link to={"/cart"}><img height={32} width={32} src={cartIcon} alt="Cart" /></Link>
              <Link to={"/MyAccount"}><User /></Link></>
                : <SearchInput  className=" w-[200px]" placeholder="Whats you looking for" />
              }
              
            </div>
           
        </div>
        
        
        
        
      </div>
     
      <div className="w-full mt-[16px] h-[0.5px] bg-black"></div>
    </>
  );
};

export default Navbar;
