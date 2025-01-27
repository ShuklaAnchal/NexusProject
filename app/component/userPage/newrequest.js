"use client";
import React, { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { LuCircleChevronLeft } from "react-icons/lu";

const newrequest = () => {
  // Define your data array properly
  const data = [
    { name: "Pavithri", phone: "123-456-7890", amount: "₹ 500" },
    { name: "John Doe", phone: "987-654-3210", amount: "₹ 500" },
    // Add more data entries as needed
  ];

  const [pageIndex, setPageIndex] = useState(0); // Assuming pageIndex is managed here
  const [pageCount, setPageCount] = useState(5); // Assuming there are 5 pages for example
  const [canPreviousPage, setCanPreviousPage] = useState(true); // Example state for previous button
  const [canNextPage, setCanNextPage] = useState(true); // Example state for next button


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

  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">New Requests</h1>

      <div className="w-[1004px] h-[422px] rounded-[20px] bg-[#F6F6F6] mt-7 shadow-xl">
        <div className="overflow-x-auto pt-4 px-3">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                {/* Column Headers */}
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
                  {/* Last column with "Paid" button */}
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    <button className="w-[163px] h-[41px] py-2 bg-Primary text-white rounded-lg">
                      Accept Payment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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

export default newrequest;
