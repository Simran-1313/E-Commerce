import React,{useEffect} from 'react'
import Form from '../components/AccountForm.js/Form'
import MainpageLayout from '../components/MainpageLayout'
import { useSelector } from 'react-redux';

import AccountSidebar from '../components/AccountForm.js/AccountSidebar'
const MyAccount = ({User}) => {
 
  return (
    <MainpageLayout>
      <div className='flex flex-wrap mt-[40px] lg:mt-[80px] justify-between'>
      <AccountSidebar/>
      <Form />
      </div>
    </MainpageLayout>
  )
}

export default MyAccount