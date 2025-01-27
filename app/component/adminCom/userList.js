"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Modle from './modle'

const userList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const data = [
    {
      name: "Pavithri",
      email: "anchal12@gmail.com",
      phone: "123-456-7890",
      status: "active",
    },
    {
      name: "John Doe",
      email: "anchal12@gmail.com",
      phone: "987-654-3210",
      status: "active",
    },
    // Add more data entries as needed
  ];

  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">User List</h1>
        
        <div className="w-[337px] h-[45px] bg-white border-[1px] border-black rounded-[5px] flex flex-row items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[86%] h-full px-4 rounded-[5px] focus:outline-none"
            placeholder="Search..."
          />
        <div className="h-full w-[14%] border-r-[2px] border-black flex items-center bg-Primary">
            <IoSearchOutline className="w-full text-[25px] text-white" />
          </div>
        </div>
     


      {/* Table Section */}
      <div className="w-[1004px] h-[422px] rounded-[20px] bg-[#F6F6F6] mt-7 shadow-xl">
        <div className="overflow-x-auto pt-4 px-3">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Name
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Email
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Phone
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Status
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                 View
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Iterate over the data array */}
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.name}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.email}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                  {row.phone}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.status}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    <button  onClick={() => setShowModal(true)} className="w-[90px] h-[37px] bg-Primary text-white rounded-[5px] ">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {showModal ? <Modle setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default userList;
