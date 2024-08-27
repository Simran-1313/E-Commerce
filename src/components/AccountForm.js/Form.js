import React, { useState } from 'react';
import MainpageLayout from '../MainpageLayout'
import "./form.css"
import { useSelector } from 'react-redux';
const Form = () => {
  const {user,isLoggedin} = useSelector((state)=>state.auth)

  console.log(user)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addresss: '',
    password: ''
    
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    addresss: '',
    password: ''
    
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      valid = false;
    } else {
      newErrors.firstName = '';
    }
    if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last Name is required';
        valid = false;
      } else {
        newErrors.lastName = '';
      }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    } else {
      newErrors.email = '';
    }
    if (!formData.addresss.trim()) {
        newErrors.addresss = 'Address is required';
        valid = false;
      } else {
        newErrors.addresss = '';
      }
      if (!formData.password.trim()) {
        newErrors.password = 'Password is required';
        valid = false;
      } else {
        newErrors.password = '';
      }


    
    setErrors(newErrors);

    if (valid) {
      console.log('Form submitted:', formData);
     
      setFormData({
        firstName: '',
    lastName: '',
    email: '',
    addresss: '',
    password: ''
    
      });
    }
  };

  const isValidEmail = (email) => {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
        <div className='xl:p-[80px] pb-[40px]  pt-[40px] flex flex-col mx-auto '>
    {isLoggedin&& <h2 className='flex justify-end'>welcome<span className='text-red-500 px-2'> {`${user?.userName}`}</span></h2>}
       <h2 className='mb-[16px] font-medium text-xl text-red-500'>Edit Your Profile </h2>
       <form onSubmit={handleSubmit} className=' flex flex-col  gap-[50px] '>
         <div className='flex   gap-[30px] sm:gap-[50px] flex-wrap w-full'>
         <div className='flex flex-col w-full md:w-[350px]'>
           <label>First Name:</label>
           <input
             type="text"
             name="firstName"
             value={formData.firstName}
             onChange={handleChange}
             placeholder='First Name'
             className='form-input '
           />
           {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
         </div>
         
         <div className='flex flex-col md:w-[350px] w-full '>
           <label>lastName:</label>
           <input
             type="text"
             name="lastName"
             value={formData.lastName}
             onChange={handleChange}
             placeholder='Last Name'
             className='form-input'
           />
           {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
         </div>
         </div>
         <div className='flex w-full flex-wrap  gap-[30px] sm:gap-[50px]'>
         <div className='flex flex-col w-full md:w-[350px]'>
           <label>Email:</label>
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             placeholder='Email'
             className='form-input'
           />
           {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
         </div>
         <div className='flex flex-col w-full md:w-[350px]'>
           <label>Address:</label>
           <input
             type="address"
             name="address"
             value={formData.addresss}
             onChange={handleChange}
             placeholder='Address'
             className='form-input'
           />
           {errors.addresss && <span style={{ color: 'red' }}>{errors.addresss}</span>}
         </div>
         </div>
         <div className='flex flex-col w-full'>
           <label>Password:</label>
           <input
             type="password"
             name="password"
             value={formData.password}
             onChange={handleChange}
             placeholder='Password'
             className='form-input'
           />
           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
         </div>
        <div className='flex justify-end gap-[50px]'>
            <button>Cancel</button>
            <button type="submit" className='px-[48px] py-[16px] rounded text-white bg-[#DB4444]'>Submit</button>
        </div>
       </form>
     </div>
    </>
  );
};

export default Form;
