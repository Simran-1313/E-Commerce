import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../state/actions/logoutUser'
import toast from 'react-hot-toast'
const SmallNavbar = () => {
  const {user} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const {isLoggedin} = useSelector((state)=>state.auth)

  const clickHandler = ()=>{
    dispatch(logoutUser());
   toast.success("Logged Out Successfully")
   
  }
  const CustomLink = ({ to, className = "", title }) => {
  const router = useLocation();

    

  return (
    <Link to={to} className={`${className} md:text-[14px] lg:text-[16px]  relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block w-0 bg-white absolute left-0 -bottom-[1px] group-hover:w-full transition-[width] ease duration-300 ${router.pathname === to ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
  return (
    <nav className=" menu text-white/90 z-10 h-full pl-[3rem] mt-[7rem] flex backdrop-blur-xl  flex-col w-[50%] p-4 left-0  bg-black/50 shadow-lg">
         
         
          <ul>
            {
              isLoggedin? <div className='p-[15px] flex justify-between text-xl font-bold'> Hi {user?.userName}<div className='cursor-pointer' onClick={clickHandler}>LogOut</div> </div>:""
            }
          <li > <CustomLink title='Home' to='/' /></li>
           <li> <CustomLink title='Contact' to='/contact' /></li>
            <li> <CustomLink title='About' to='/about' /></li>
            {!isLoggedin&&<li><CustomLink title='Sign Up' to='/signup' /></li>}
           <li> <CustomLink title='Liked Items' to='' /></li>
           <li> <CustomLink title='Cart' to='/cart' /></li>
            <li><CustomLink title='Profile' to='/MyAccount' /></li>
         
          </ul>
        </nav>
  )
}

export default SmallNavbar