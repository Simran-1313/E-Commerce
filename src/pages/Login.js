import React, { useEffect, useState } from "react";
import authService from "../services/authService";
import Layout from "../components/Layout";
import login from "../images/Side Image.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  const user = useSelector((state)=>state.auth.user)
  const errorresponse = useSelector((state)=>state.auth.error)

  useEffect(() => {
    if (isLoggedin &user!==null) {
      navigate("/");
      toast.success("Logged In Successfully");
    }
  }, [isLoggedin,]);
  
    // useEffect(()=>{
    //   if(errorresponse){
    //     toast.error("login failed write correct credentials")
    //   }
    // },[errorresponse])
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email||email.trim()===""){
     setError("email required")
     toast.error("email required")
     return
    }
    if(!password){
      setError("password required")
      toast.error("password required")
      return
     }
    dispatch(loginUser({ email, password }));
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

          {error && <p className="text-center text-red-500">{error}</p>}
          {errorresponse&&<p className="text-center text-red-500">{errorresponse}</p>}
          <p className="text-base">Enter Your Details</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full  gap-[2.5rem]"
          >
            <input
              type="email"
              className=" signup"
              
              placeholder="Email "
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
};
export default Login;
