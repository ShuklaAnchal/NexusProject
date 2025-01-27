import React from "react";
import Image from "next/image";

const videoBlock = () => {
  return (
    <div className="h-[236px] flex flex-col justify-between">
      <div className="w-[301px] h-[187px] bg-red-500 rounded-[10px]"></div>
      <div className="flex flex-row gap-3">
        <div className="h-[37px] w-[37px] rounded-full border-2 border-black flex justify-center items-center">
          <Image src="/logoPas.png" alt="logo" width="23" height="12" />
        </div>
        <div className="flex flex-col text-black">
          <h1 className="text-[15px] font-semibold">
            What do to gain Concentration
          </h1>
          <h6 className="text-[13px] font-normal">Virton</h6>
        </div>
      </div>
    </div>
  );
};

export default videoBlock;
