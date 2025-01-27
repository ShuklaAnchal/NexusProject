"use client";
import React, { useState } from "react";
import Image from "next/image";
import DashboardDetiles from "./dashboardDetiles";
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
   activeMenu === "dashboard" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("dashboard")}
              >
                Dashboard
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "businessPartners" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("businessPartners")}
              >
                Business partners
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "businessPromoters" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("businessPromoters")}
              >
                Business promoters
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "newRequests" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("newRequests")}
              >
                New requests
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "invoice" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("invoice")}
              >
                Invoice
              </div>
            </div>
            <div className="h-[57px] w-[390px] border-b-[1px] border-white flex items-center ">
              <div
                className={`w-full h-[45px] cursor-pointer
 flex items-center px-8 ${
   activeMenu === "renewal" ? "bg-white text-Primary" : ""
 }`}
                onClick={() => handleMenuClick("renewal")}
              >
                Renewal
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
