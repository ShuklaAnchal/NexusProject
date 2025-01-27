"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineEye } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { UserLoginStore } from '@/app/store/userStore/Registeruser';
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const { LoginUser } = UserLoginStore();
  const [formData, setFormData] = useState({
    firstname: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = async(e) => {
    e.preventDefault();
    try {
      const loginuserdata = {
        firstname:formData.firstname,
        password:formData.password
      }

      const response = await LoginUser(loginuserdata);
      console.log(response);
      const { token } = response.data.token;
   
   
      if (typeof window !== "undefined") {
        localStorage.setItem("token", token);
      }

      router.push("/user")
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }

  };

  return (
    <div className="flex justify-center">
      <div className="w-[86%] bg-Primary h-[502px] rounded-[16px] flex flex-row">
        <div className="h-full w-[50%]">
          <Image
            src="/loginPageImage.png"
            alt="Login Image"
            height={502}
            width={650}
            className="object-cover h-full rounded-s-[16px] w-full"
          />
        </div>
        <div className="flex w-[50%] flex-col items-center gap-5 text-white">
          <div className="flex flex-col justify-center items-center w-full mt-4">
            <h1 className="font-bold text-[38px]">Login</h1>
            <p className="text-[16px]">Fill in your credentials and click on the Login button</p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2 mt-8">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">User name</label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="text"
                      id="firstname"
                      name="firstname"  
                      value={formData.firstname}
                      onChange={inputChangeHandler}
                      required
                    />
                    <Image
                      src="/sms-tracking.png"
                      alt="SMS Icon"
                      height={20}
                      width={20}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">Password</label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="Password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={inputChangeHandler}
                      required
                    />
                    <HiOutlineEye className="text-[#04009A] text-[20px]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-end items-end w-full">
                <h6 className="text-[17px] font-normal">Forgot Password?</h6>
              </div>

              <div className="w-full mt-8 flex flex-col justify-between gap-6">
                <button className="text-[18px] border-[1px] border-black bg-white text-black font-medium w-[129px] h-[34px] rounded-[1.79px]" onClick={handleLoginSuccess}>
                  Login
                </button>
                <h3 className="text-[17px] font-normal">Don’t have an account? <Link href="/signin"><span className="font-bold"> Sign Up</span></Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;