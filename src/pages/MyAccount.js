import React from 'react'
import Form from '../components/AccountForm.js/Form'
import MainpageLayout from '../components/MainpageLayout'
import AccountSidebar from '../components/AccountForm.js/AccountSidebar'
const MyAccount = () => {
  return (
    <MainpageLayout>
      <div className='flex mt-[80px] justify-between'>
      <AccountSidebar/>
      <Form/>
      </div>
    </MainpageLayout>
  )
}

export default MyAccount