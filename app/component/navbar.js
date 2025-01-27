import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ isUserPage }) => {
  return (
    <div className="h-[101px] w-full bg-Primary">
      <div className="container flex flex-row justify-between items-center h-full">
        {/* Conditionally render logo */}
        <Image 
          src={isUserPage ? "/logoPas.png" : "/SemiLogo.png"} 
          alt="Logo" 
          width="165" 
          height="69" 
          className=""
        />

        {/* Conditionally render buttons */}
        <div className="flex flex-row gap-4">
          {isUserPage ? (
            <>
              <Link 
                className="w-[115px] h-[33px] bg-white text-Primary rounded-[2px] justify-center items-center flex" 
                href="/user"
              >
                My Videos
              </Link>
              <Link 
                className="w-[115px] h-[33px] text-white border-[2px] border-white rounded-[2px] justify-center items-center flex" 
                href="/user/virdashboard"
              >
                Viral Plus
              </Link>
            </>
          ) : (
            <>
              <Link 
                className="w-[115px] h-[33px] bg-white text-Primary rounded-[2px] justify-center items-center flex" 
                href="/login"
              >
                Login
              </Link>
              <Link 
                className="w-[115px] h-[33px] text-white border-[1px] border-white justify-center items-center flex rounded-[2px]" 
                href="/signin"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;