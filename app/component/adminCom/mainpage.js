"use client";
import React, { useState } from "react";
import Image from "next/image";
import DashboardDetiles from "./dashboardData";
import { TbLogout } from "react-icons/tb";

const virdashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div>
      <div className="flex flex-row py-6">
        <div>
          <Image
            src="/vrilogo.png"
            alt="logo"
            width="165"
            height="69"
            className="pl-8"
          />

          <div className="flex flex-col text-[25px] font-semibold mt-[96px] text-white">
            <div className="h-[57px] w-[390px] border-t-[1px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "userlist" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("userlist")}
              >
                User List
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "trancsaction" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("trancsaction")}
              >
                Transaction List
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "videoManagement" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("videoManagement")}
              >
                Video Management
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "topRecivers" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("topRecivers")}
              >
                Top Receivers List
              </div>
            </div>

            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer gap-2
 flex items-center px-8 ${
   activeMenu === "logout" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("logout")}
              >
                <TbLogout />
                Logout
              </div>
            </div>
          </div>
        </div>

        <DashboardDetiles
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </div>
    </div>
  );
};

export default virdashboard;
