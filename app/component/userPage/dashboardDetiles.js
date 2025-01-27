import React from 'react'
import Image from 'next/image'
import DashboardUser from './userDetiles'
import GiveHelp from './givehelp'
import GetHelp from './gethelp'
import NewRequest from './newrequest'
import Invocie from './invoiceList'
import Renewal from './renewPlan'

const dashboardDetiles = ({activeMenu, setActiveMenu}) => {

 
    const renderComponent = () => {
        switch (activeMenu) {
          case "dashboard":
            return <DashboardUser />;
          case "businessPartners":
            return <GiveHelp />;
          case "businessPromoters":
            return <GetHelp />;
          case "newRequests":
            return <NewRequest />;
          case "invoice":
            return <Invocie />;
          case "renewal":
            return <Renewal />;
          default:
            return <DashboardUser />;
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