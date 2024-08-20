import React, { useState, useEffect } from "react";
import {motion} from 'framer-motion'
import { Link, useLocation } from "react-router-dom";
import Banner from "../navBar/Banner";
import cartIcon from "../../Icons/Cart1.png";
import SearchInput from "../SearchInput";
import likedIcon from "../../Icons/Wishlist.png";
import User from "../../Icons/User";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import SmallNavbar from "./SmallNavbar";
import authService from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../state/authSlice";
import toast from "react-hot-toast";


const CustomLink = ({ to, className = "", title }) => {
  const router = useLocation();
  return (
    <Link
      to={to}
      className={`${className} md:text-[14px] lg:text-[16px]  relative group`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-black absolute left-0 -bottom-[1px] group-hover:w-full transition-[width] ease duration-300 ${
          router.pathname === to ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
function useMenuAnimation(isMenuOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isMenuOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];
    animate([
      [
        "path.top",
        { d: isMenuOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isMenuOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isMenuOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isMenuOpen]);

  return scope;
}

const Navbar = ({ className}) => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 850);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const {isLoggedin} = useSelector((state)=> state.auth)
  const navigation = useLocation();
  const dispatch = useDispatch()
  const scope = useMenuAnimation(isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigation]);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = ()=>{
     dispatch(logoutUser());
     toast.success("Logged Out Successfully")
     



  }

  return (
    <div className=" sticky top-0  bg-white z-10  ">
      <Banner />
      <div>
        <div className="overflow-visible">
          <div
            className={`flex  z-10 bg-white  xl:px-[115px] max-w-[1440px] mx-auto lg:px-[70px] sm:px-[20px] md:px-[40px] px-[20px] justify-between items-center pt-[28px] lg:pt-[40px] sm:pt-[20px] ${className} `}
          >
            {!isMdScreen ? (
              <div ref={scope} className="flex  items-center ">
                <SmallNavbar />
                <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} />
              </div>
            ) : (
              <div ref={scope} className="hidden" />
            )}
            <div>
              <h1 className="font-[700] text-[24px] font-poppins">Exclusive</h1>
            </div>

            <div
              className={`hidden md:flex gap-[48px] ${
                isMdScreen ? "flex" : "hidden"
              }`}
            >
              <CustomLink title="Home" to="/" />
              <CustomLink title="Contact" to="/contact" />
              <CustomLink title="About" to="/about" />
              <CustomLink title="Sign Up" to="/signup" />
            </div>
            <div className="flex  gap-[16px] ">
              {isMdScreen ? (
                <>
                  <SearchInput
                    placeholder="Whats you looking for ?"
                    className="max-w-[243px] lg:w-[210px] xl:w-[250px]    "
                  />
                  <a>
                    <img
                      height={32}
                      width={32}
                      src={likedIcon}
                      alt="Wishlist"
                    />
                  </a>
                  <Link to={"/cart"}>
                    <img height={32} width={32} src={cartIcon} alt="Cart" />
                  </Link>
                  {/* <Link to={"/MyAccount"}><User /></Link> */}
                  <div className="relative " onClick={() => setIsDropdown(!isDropdown)}>
                    <User />
                    {isDropdown && 
                    <motion.div className="w-[225px] -z-20 w- p-[18px]  rounded bg-black/50 backdrop-blur-lg shadow-lg  absolute right-[5px] top-12 " 
                       initial={{opacity:0, y:-150}}
                       animate={{opacity:1,y:0}}
                       
                       transition={{duration: 0.5, ease:'easeInOut'}}
                    >
                      <div className="text-white font-poppins gap-[13px] flex flex-col text-[14px]">
                        <Link to={'/MyAccount'} className=" flex"> Manage My Account</Link>
                        <div>My Order</div>
                        <div>My Cancellations</div>
                        <div>My Reviews</div>
                        {
                          isLoggedin?<div className="cursor-pointer" onClick={handleLogout}>Logout</div>:<Link to={'/signup'}>SignUp</Link>
                        }
                      </div>
                    </motion.div>}
                  </div>
                </>
              ) : (
                <SearchInput
                  className=" w-[200px]"
                  placeholder="Whats you looking for"
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-full mt-[16px] h-[0.5px] bg-black"></div>
      </div>
    </div>
  );
};

export default Navbar;
