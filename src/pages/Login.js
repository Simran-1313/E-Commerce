import React, { useState } from "react";
import authService from "../services/authService";
import Layout from "../components/Layout";
import login from "../images/Side Image.png";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setIsloggedIn,IsloggedIn}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(email, password);
      console.log(response);
      setIsloggedIn(true)
      navigate('/')
    } catch (err) {
      setError(`${err}`);
    }
  };

return (
  <>
    <div className="flex w-full xl:justify-center  items-center mt-[60px] mb-[8.8rem]">
      <div className="w-0  md:w-auto">
        <img src={login}></img>
      </div>
      <div className="flex-col  flex mx-auto md:ml-[8.5rem]  gap-y-[3rem] ">
        <h2 className="flex justify-center font-sans font-medium text-4xl">
          Log In to Exclusive
        </h2>
        
        {error && <p>{error}</p>}
        <p className="text-base">Enter Your Details</p>
        <form onSubmit={handleSubmit} className="flex flex-col w-full  gap-[2.5rem]">
          <input
            type="text"
            className=" signup"
            placeholder="Email or Phone Number"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="signup"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="flex justify-between gap-[8.5rem]  items-center">
            <button
              className="text-white rounded text-base font-medium bg-[#DB4444] py-[16px] px-[48px]"
              type="submit"
            >
              log In
            </button>
            <Link
              to="/login"
              className="underline text-red-500
     "
            >
              forgot Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  </>
);
}
export default Login;
