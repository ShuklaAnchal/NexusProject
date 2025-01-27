"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { LuCircleChevronLeft } from "react-icons/lu";

const GetHelp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [pageIndex, setPageIndex] = useState(0); // Assuming pageIndex is managed here
  const [pageCount, setPageCount] = useState(5); // Assuming there are 5 pages for example
  const [canPreviousPage, setCanPreviousPage] = useState(true); // Example state for previous button
  const [canNextPage, setCanNextPage] = useState(true); // Example state for next button

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to go to the previous page
  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  // Function to go to the next page
  const nextPage = () => {
    if (pageIndex < pageCount - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const data = [
    { name: "Pavithri", phone: "123-456-7890", amount: "₹ 500", status:'Inactive' },
    { name: "John Doe", phone: "987-654-3210", amount: "₹ 500" ,status:'Inactive' },
    // Add more data entries as needed
  ];


  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">Get Help</h1>

      {/* Dropdown and Search Bar Section */}
      <div className="flex flex-row w-[1004px] bg-Primary h-[59px] rounded-[10px] justify-center items-center gap-7 py-4">
        {/* Dropdown */}
        <div className="w-[198px] h-[45px] bg-white rounded-[5px] px-2 text-Primary text-[17px] font-medium">
          <select className="w-full h-full px-3 rounded-[5px] focus:outline-none">
            <option value="">Select Option</option>
            <option value="option1">Lavel 1</option>
            <option value="option2">Lavel 2</option>
            <option value="option3">Lavel 3</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="w-[752px] h-[45px] bg-white rounded-[5px] flex flex-row items-center">
          <div className="h-full w-[7%] border-r-[2px] border-black flex items-center">
            <IoSearchOutline className="w-full text-[25px]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-[90%] h-full px-4 rounded-[5px] focus:outline-none"
            placeholder="Search..."
          />
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
                  Phone
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Amount
                </th>
                <th className="border-b-[1px] border-gray-300 px-8 h-[52px] text-left">
                  Status
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
                    {row.phone}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.amount}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-between mt-4">
        <div className="flex gap-1">
          <div className="text-[20px] font-medium">Items per page: </div>
          <div className="border-2 border-black w-10 h-7 flex items-center justify-center">
            {" "}
            {pageCount}
          </div>
        </div>
        <div className="w-[145px]">
          <div className="flex flex-row justify-center items-center gap-[8px]">
            <div onClick={previousPage} disabled={!canPreviousPage}>
              <LuCircleChevronLeft className="text-Primary text-[25px]" />
            </div>
            <div>1 2 3 ..</div>
            <div>
              <FaChevronCircleRight
                className="text-Primary text-[25px]"
                onClick={nextPage}
                disabled={!canNextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
