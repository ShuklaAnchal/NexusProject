import React from "react";
import Image from "next/image";
const middlecom = () => {
  return (
    <div className="flex flex-row container items-center justify-between gap-5">
      <div className="flex flex-col w-[650px]">
        <h1 className="text-[55px] text-black font-semibold	">
          Power and <span className="text-[#FFCC33]">Success Inspired</span>{" "}
          Life
        </h1>
        <div className="text-[18px] flex flex-col gap-4">
          <p>
            Knowledge is the greatest wealth. Financial security is the
            foundation of a peaceful life. Along with this, when there is mutual
            cooperation and mutual trust, our life becomes very beautiful.
          </p>
          <p>Thank you for choosing us as your gateway to a secure life. </p>
          <p>Let's travel together, have a better tomorrow.</p>
        </div>
        <div className="flex flex-row text-[20px] font-medium gap-5 mt-7">
          <button className="bg-Primary w-[208px] h-[42px] text-white">
            Online Courses
          </button>
          <button className="w-[176px] h-[42px] border-[2px] border-black">
            Videos
          </button>
        </div>
      </div>
      <div className="">
        <Image src="/Rectangle.png" alt="Side Image" height={407} width={700} />
      </div>
    </div>
  );
};

export default middlecom;
