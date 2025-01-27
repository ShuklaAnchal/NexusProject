import React from 'react'
import Image from 'next/image'
import UserList from './userList'
import Trancsaction from './trancsaction'
import VideoManagement from './videomanagement'
import TopRecivers from './topreceivers'

const dashboardDetiles = ({activeMenu, setActiveMenu}) => {

 
    const renderComponent = () => {
        switch (activeMenu) {
          case "userlist":
            return <UserList />;
          case "trancsaction":
            return <Trancsaction />;
          case "videoManagement":
            return <VideoManagement />;
          case "topRecivers":
            return <TopRecivers />;
          default:
            return <UserList />;
        }
      };
  return (
   <div className="w-[1060px] h-[860px] bg-white rounded-[30px] px-8 py-10 flex flex-col gap-12 mr-8">
            <div className="flex flex-col">
              <h1 className="text-[40px] font-semibold">Dashboard</h1>
              <h6 className="font-normal text-[16px] text-[#101010]">
                01 - 25 March, 2020
              </h6>
              <Image
                src="/Stats.png"
                alt="Stats Bar"
                width="510"
                height="60"
                className="mt-4"
              />
            </div>
            <div >{renderComponent()}</div>
          </div>
  )
}

export default dashboardDetiles