"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { LiaWhatsapp } from "react-icons/lia";
import { HiOutlineEye } from "react-icons/hi2";
import CheckBox from "@/app/component/checkbox";
import { useRegisterStore } from "@/app/store/userStore/Registeruser";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const middlecom = () => {
  const router = useRouter();
  const { registerUser } = useRegisterStore();

  const [formData1, setFormData1] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    whatsappnumber: "",
    email: "",
    state: "",
    referralCode: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };


  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const passwordVisiable = (ref) => {
    const inputFiled = ref.current;
    inputFiled.type = inputFiled.type === "password" ? "text" : "password";
    console.log("clicked");
  };



  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (!formData1.password || !formData1.confirmPassword) {
      toast.warning("Please fill all fields.");
      return;
    }
  
    if (formData1.password !== formData1.confirmPassword) {
      toast.warning("Passwords do not match");
      return; // Prevent form submission if passwords don't match
    }
  
    try {
      const fdata = {
        firstname: formData1.firstname,
        lastname: formData1.lastname,
        contact: formData1.contact,
        whatsappnumber: formData1.whatsappnumber,
        email: formData1.email,
        state: formData1.state,
        referralCode: formData1.referralCode,
        password: formData1.password, // Only take from formData1
        confirmPassword:formData1.confirmPassword
      };
  
      console.log(fdata);
  
      registerUser(fdata)
        .then((res) => {
          router.push("/login");
          toast.success("You have successfully registered, please login");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="flex justify-center">
      <div className="w-[86%] bg-Primary h-[1084px] rounded-[16px] flex flex-row">
        <div className="h-full w-[50%] md:flex hidden">
          <Image
            src="/signPageimage.png"
            alt="Sign-In Image"
            height={900}
            width={1084}
            className="object-cover h-full rounded-s-[16px]"
          />
        </div>
        <div className="flex w-[50%] flex-col items-center gap-5 text-white">
          <div className="flex flex-col justify-center items-center w-full mt-16">
            <h1 className="font-bold text-[38px]">Sign up</h1>
            <p className="text-[12px]">
              Fill in your credentials and click on the the Sign up button
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-5 mt-12">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-5">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[16px]">
                      First Name
                    </label>
                    <div className="h-[39px] w-[273px] bg-white rounded-[6px] flex items-center px-2">
                      <input
                        className="text-black flex-grow px-1.5 outline-none border-none"
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData1.firstname}
                        onChange={inputChangeHandler}
                        required
                      />
                      <CiUser className="text-[#04009A] text-[20px]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-[16px]">
                      Last Name
                    </label>
                    <div className="h-[39px] w-[273px] bg-white rounded-[6px] flex items-center px-2">
                      <input
                        className="text-black flex-grow px-1.5 outline-none border-none"
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData1.lastname}
                        onChange={inputChangeHandler}
                        required
                      />
                      <CiUser className="text-[#04009A] text-[20px]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    Contact No.
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="tel"
                      pattern="[0-9]{10}"
                      id="contact"
                      name="contact"
                      value={formData1.contact}
                      onChange={inputChangeHandler}
                      required
                    />
                    <BsTelephone className="text-[#04009A] text-[20px]" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    WhatsApp No
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="tel"
                      pattern="[0-9]{10}"
                      id="whatsappnumber"
                      name="whatsappnumber"
                      value={formData1.whatsappnumber}
                      onChange={inputChangeHandler}
                      required
                    />
                    <LiaWhatsapp className="text-[#04009A] text-[20px]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    Email address
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="email"
                      id="email"
                      name="email"
                      value={formData1.email}
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
                  <label htmlFor="" className="text-[16px]">
                    State
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="text"
                      id="state"
                      name="state"
                      value={formData1.state}
                      onChange={inputChangeHandler}
                      required
                    />
                    <Image
                      src="/sms-tracking.png"
                      alt="SMS Icon"
                      height={20}
                      width={20}
                    />{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    Referral Code
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      value={formData1.referralCode}
                      onChange={inputChangeHandler}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    Password
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      type="password"
                      id="password"
                      name="password"
                      value={formData1.password} // Use formData1 for password
                      onChange={inputChangeHandler}
                    />
                    <HiOutlineEye
                      onClick={() => {
                        passwordVisiable(passwordRef);
                      }}
                      className="text-[#04009A] text-[20px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-[16px]">
                    Confirm Password
                  </label>
                  <div className="h-[39px] w-[568px] bg-white rounded-[6px] flex items-center px-2">
                    <input
                      className="text-black flex-grow px-1.5 outline-none border-none"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData1.confirmPassword} // Use formData1 for confirmPassword
                      onChange={inputChangeHandler}
                    />
                    <HiOutlineEye
                      onClick={() => {
                        passwordVisiable(confirmPasswordRef);
                      }}
                      className="text-[#04009A] text-[20px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-start items-start w-full gap-2 mt-2">
                <CheckBox />
                <h6 className="text-[16px]">
                  I agree to the{" "}
                  <span className="font-extrabold">Terms and Conditions</span>{" "}
                  and <span className="font-extrabold">Privacy Policy.</span>
                </h6>
              </div>

              <div className="w-full mt-10 flex justify-between">
                <button
                  onClick={submitHandler}
                  className="text-[18px] border-[1px] border-white bg-black font-medium
 w-[271px] h-[39px] rounded-[2.5px]"
                >
                  Register
                </button>

                <Link
                  href="/login"
                  className="text-[18px] border-[1px] border-white font-medium
 w-[271px] h-[39px] rounded-[2.5px] justify-center items-center flex"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default middlecom;
