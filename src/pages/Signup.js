import React from "react";
import { Link } from "react-router-dom";

import login from "../images/Side Image.png";
import google from "../images/Icon-Google.png";
import { useState } from "react";

import authService from "../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../state/actions/registerUser";
import toast from "react-hot-toast";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch()
  const errorresponse = useSelector((state)=>state.auth.error)


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!username || username.trim()===""){
      setError("Name required")
      toast.error("name required");
      return
    }

    if(!email ||email.trim()===""){
      setError("Email is required")
      toast.error("email required")
      return
    }
    if(!password){
      setError("password is required")
      toast.error("password required")
      return
    }

    dispatch(registerUser({username,email,password}))
    
    
  };

  return (
    <>
      <div className="flex w-full  xl:justify-center mt-[60px] items-center mb-[8.8rem]">
        <div className="w-0 md:w-auto">
          <img src={login}></img>
        </div>
        <div className="flex-col flex mx-auto md:ml-[8.5rem] gap-y-[3rem] ">
          <h2 className="flex justify-center font-sans font-medium text-4xl">
            Create An account
          </h2>
          <p className="text-base">Enter Your Details</p>
          {/* {userCreated && (
          <div className='my-4 text-center' >
            User created.<br/> Now you can {' '} <Link href={'/steps/login'} className='underline' >Login &raquo;</Link>
          </div>
        )} */}
          {error && (
            <div className="my-4 text-center">
             {error}
             {errorresponse&&<p>{errorresponse}</p>}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col  w-full gap-[2.5rem]">
            <input
              type="text"
              
              className="signup "
              placeholder="Name"
              
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="email"
              
              className="signup "
              placeholder="Email"
              
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              value={password}
              className="signup"
              placeholder="Password"
              
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button
            //   disabled={creatingUser}
              className="  text-white rounded text-base font-medium bg-[#DB4444] w-full py-[16px] px-[122px]"
              type="submit"
            >
              Create Account
            </button>
            <button className="flex py-[16px] px-[86px] gap-[16px] border-2">
              <img src={google}></img> Sign up with Google{" "}
            </button>
          </form>
          <p className="flex justify-center text-gray-500">
            Already Have account?{" "}
            <Link
              to="/login"
              className="underline
            "
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
 
  );
};

export default SignUp;
