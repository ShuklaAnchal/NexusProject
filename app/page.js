import React from "react";
import Navbar from "@/app/component/navbar";
import MiddleCom from "@/app/component/mainPage/middlecom";
import Footer from "@/app/component/footer";

const page = () => {
  return (
    <div className="h-auto w-full">
      <div className="flex flex-col gap-5">
        <Navbar />
        <MiddleCom />
        <Footer />
      </div>
    </div>
  );
};

export default page;
