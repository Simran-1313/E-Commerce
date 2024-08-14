import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const SmallNavbar = () => {
  return (
    <nav className=" menu z-10 h-full pl-[3rem] mt-[7rem] flex backdrop-blur-xl  flex-col w-[50%] p-4 left-0  bg-white shadow-lg">
         
         
          <ul>
          <li > <Link  to='/' className="py-2" >Home</Link></li>
           <li> <Link  to='/contact' className="py-2" >Contact</Link></li>
            <li><Link  to='/about' className="py-2" >About</Link></li>
            <li><Link  to='/signup' className="py-2" >Sign Up</Link></li>
           <li> <Link className="flex gap-4 py-2 items-center"> Liked Items</Link></li>
           <li> <Link to={"/cart"} className="flex gap-4 items-center py-2"> Cart</Link></li>
            <li><Link to={"/MyAccount"} className="flex gap-4 items-center py-2"> Profile</Link></li>
         
          </ul>
        </nav>
  )
}

export default SmallNavbar