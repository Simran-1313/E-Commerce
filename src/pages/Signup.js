import React from 'react'
import { Link } from 'react-router-dom'

import login from '../images/Side Image.png'
import google from '../images/Icon-Google.png'
import { useState } from 'react'
const Signup = () => {
  const [email,setEmail] = useState('');
  const [name,setName] = useState('')
  const [password,setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false)
  const[userCreated, setUserCreated]=useState(false);
  const[error, setError] = useState(false);
  
  // Function to handle the form submission of register page.

  async function handleFormSubmit(e){
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response=  await fetch('https://next-auth-api-six.vercel.app/api/register',{
        method:'POST',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-Type':'application/json'},
        credentials:'include'
      });
      
      if(response.ok){
      
        setUserCreated(true);
        setEmail("")
        setName("")
        setPassword("")
        
       }
      else{
        setError(true);
      }
     
     setCreatingUser(false);
      
   
      
    

    
    
  }
  return (
    <>
      <div className='flex w-full  xl:justify-center mt-[60px] items-center mb-[8.8rem]' >
        <div><img src={login} ></img></div>
        <div className='flex-col flex ml-[8.5rem] gap-y-[3rem] ' >
          <h2 className='flex justify-center font-sans font-medium text-4xl' >Create An account</h2>
          <p className='text-base' >Enter Your Details</p>
           {userCreated && (
        <div className='my-4 text-center' >
          User created.<br/> Now you can {' '} <Link href={'/steps/login'} className='underline' >Login &raquo;</Link>
        </div>
      )}
      {
        error && (
          <div className='my-4 text-center' >
                An error has occured.<br/>
                Please try again Later...
          </div>
        )
      }
          <form onSubmit={handleFormSubmit} className='flex flex-col  gap-[2.5rem]' >
            <input type='text' value={name} className='signup ' placeholder='Name' onChange={(e)=>setName(e.target.value)} ></input>
            <input type='email' value={email} className='signup ' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} ></input>
            <input type='password' value={password} className='signup' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button  disabled={creatingUser}  className= '  text-white rounded text-base font-medium bg-[#DB4444] w-full py-[16px] px-[122px]' type='submit'>Create Account</button>
            <button className='flex py-[16px] px-[86px] gap-[16px] border-2' ><img src={google}></img> Sign up with Google </button>
          </form>
          <p className='flex justify-center text-gray-500'>Already Have account? <Link to='/login' className='underline
          ' >Log in</Link></p>
        </div>
      </div>
          {/* <section className='mt-24 h-[70vh]' >
      <h1 className='text-center text-primary text-4xl mb-4 ' >
        Register
      </h1>
      {userCreated && (
        <div className='my-4 text-center' >
          User created.<br/> Now you can {' '} <Link href={'/steps/login'} className='underline' >Login &raquo;</Link>
        </div>
      )}
      {
        error && (
          <div className='my-4 text-center' >
                An error has occured.<br/>
                Please try again Later...
          </div>
        )
      }
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit} >
        <input type='email' placeholder='email' required value={email}
          disabled={creatingUser}
        onChange={(e)=>{
          setEmail(e.target.value);

        }}  />
        <input  type="password" required placeholder='password' value={password}
          disabled={creatingUser}
        onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <button type='submit' disabled={creatingUser} > Register</button>
        <div className='text-center my-4 text-gray-500 border-t pt-4 ' >
            Existing Account?&nbsp; <Link className='underline ' href={'/login'}> Login here&raquo;</Link>
          </div>
      </form>
      
    </section> */}
    </>
  )
}

export default Signup