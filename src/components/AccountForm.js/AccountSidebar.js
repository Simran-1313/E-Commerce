import React,{useState} from 'react'
import Disclosure from './Disclosure'
const AccountSidebar = () => {
    

  return (
    <div className=' flex flex-col min-w-[200px]'>
<Disclosure className="w-full font-[500] " title="Manage My Acoount">
        <ul>
        <li>My Profile</li>
        <li>Address Book</li>
        <li>My PAyment Options</li>
        </ul>
      </Disclosure>
      <Disclosure className="w-full flex font-[500] " title="My Orders">
        <ul>
        <li>My Returns</li>
        <li>My Cancellations</li>
        
        </ul>
      </Disclosure>
      <Disclosure title="My WishList" className="font-[500]"></Disclosure>
    </div>
  )
}

export default AccountSidebar