"use client";
import React from "react";

const topreceivers = () => {


  const data = [
    {
      Name: "Pavithri",
      email: "shimnasreedaran@gmail.com",
      phone:'2563148574',
      state: "Maharashtra",
      totalIncome: "₹50,000",
      promoters:'427',
    },
    {
      Name: "Pavithri",
      email: "shimnasreedaran@gmail.com",
      phone:'2563148574',
      state: "Maharashtra",
      totalIncome: "₹50,000",
      promoters:'427',
    },
  ];

  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">Top Receivers List</h1>

      {/* Table Section */}
      <div className="w-[1004px] h-[422px] rounded-[20px] bg-[#F6F6F6] mt-7 shadow-xl">
        <div className="overflow-x-auto pt-4 px-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Name
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Email
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Phone
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  State
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Total Income
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                 No. of Promoters
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over the data array */}
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.Name}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.email}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.phone}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.state}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.totalIncome}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px]">
                    {row.promoters}
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

export default topreceivers;
