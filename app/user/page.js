import React from "react";
import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";
import Videos from "@/app/component/userPage/videos";

const page = () => {
  return (
    <div>
      <Navbar isUserPage={true} />

      <Videos />
      <Footer isUserPage={true} />
    </div>
  );
};

export default page;
