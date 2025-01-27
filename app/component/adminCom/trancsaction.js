"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const trancsaction = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const data = [
    {
      customers: "Pavithri",
      amountPayable: "450",
      TDS:'0',
      paymentgatewayTax: "1.7",
      paymentgatewayFees: "9.54",
      grossAmount:'427',
      currency:'INR',
      shipped:'Shipped',
      date:'28-8-2026',
      order:'7468'
    },
    {
      customers: "Pavithri",
      amountPayable: "450",
      TDS:'0',
      paymentgatewayTax: "1.7",
      paymentgatewayFees: "9.54",
      grossAmount:'427',
      currency:'INR',
      shipped:'Shipped',
      date:'28-8-2026',
      order:'7468'
    },
  ];

  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">Transaction List</h1>
   <div className="w-full flex justify-between">
   <div className=" h-[40px]  bg-white rounded-[5px] px-2 text-black text-[19px] font-semibold flex items-center gap-4 jusitfy-center" >
    <h1 className="">Select Month </h1>
          <select className="w-[206px] h-full px-4 rounded-[5px] focus:outline-none border-[2px] border-black">
            <option value="">Select Option</option>
            <option value="option1">Jan</option>
            <option value="option2">Feb</option>
            <option value="option3">Mar</option>
          </select>
        </div>
       <div>
        <button className="w-[131px] h-[37px] bg-Primary text-white ">Download </button>
        </div> 
   </div>
   

      {/* Table Section */}
      <div className="w-[1004px] h-[422px] rounded-[20px] bg-[#F6F6F6] mt-7 shadow-xl">
        <div className="overflow-x-auto pt-4 px-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Order
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Date
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Shipped
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Currency
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Gross Amount
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Payment gateway Fees
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Payment gateway Tax
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                 TDS
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Amount Payable
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Customers
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over the data array */}
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.order}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.date}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.shipped}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.currency}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.grossAmount}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.paymentgatewayFees}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.paymentgatewayTax}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.TDS}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.amountPayable}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.customers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default trancsaction;
