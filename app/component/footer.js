import React from "react";
import Image from "next/image";
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiSkypeFill } from "react-icons/ri";

const footer = ({isUserPage}) => {
  return (
    <div className="h-[331px] w-full bg-Primary">
      <div className="container flex flex-col w-[88%]">
        <div className="flex flex-row text-white pt-12 gap-24 border-b-[1px] border-white pb-10">
          <div className="flex flex-col w-[435px]">
            <Image
              src={isUserPage ? "/logoPas.png" : "/SemiLogo.png"}
              alt="Logo"
              width={isUserPage? 165 :279 }
              height={isUserPage? 69 :117 }
              className=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
              eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
            </p>
          </div>

          <div className="pt-8 flex flex-col gap-3 tracking-wider">
            <h1 className="font-semibold text-[22px]">Important Links</h1>
            <div className="text-[16px] font-normal flex flex-col gap-2">
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col gap-3 text-[16px] font-normal tracking-wider">
            <p>Terms & Conditions</p>
            <p>Contact Support</p>
            <div className="flex flex-row gap-4">
              <div className="px-1 py-1 border-2 border-white text-[18px]">
                {" "}
                <RiFacebookFill />
              </div>
              <div className="px-1 py-1 border-2 border-white text-[18px]">
                {" "}
                <RiInstagramFill />
              </div>
              <div className="px-1 py-1 border-2 border-white text-[18px]">
                {" "}
                <FaLinkedinIn />
              </div>
              <div className="px-1 py-1 border-2 border-white text-[18px]">
                {" "}
                <RiSkypeFill />
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center items-center mt-4 px-12">
          <h4>Copyright © 2025. All rights reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
