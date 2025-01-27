import React from "react";


const Newrequest = () => {

  const data = [
    { name: "Pavithri", date:"16-05-2024", invoiceNo:'15', totalPrice:"₹ 500" },
    { name: "John Doe", date:"16-05-2024", invoiceNo:'15', totalPrice:"₹ 500"  },
    // Add more data entries as needed
  ];
  return (
    <div className="w-[1006px] h-[485px] flex flex-col">
      <h1 className="text-[35px] font-medium">Invoice List</h1>
      <p className="text-[22px] font-semibold mt-2">Select Year & Month</p>
    <div className="flex gap-4">
    <div className="border-[2px] border-black w-[137px] h-[40px] bg-white rounded-[5px] px-2 text-Primary text-[17px] font-medium">
          <select className="w-full h-full px-3 rounded-[5px] focus:outline-none">
            <option value="">January</option>
            <option value="option1">Lavel 1</option>
            <option value="option2">Lavel 2</option>
            <option value="option3">Lavel 3</option>
          </select>
        </div>
        <div className="w-[137px] border-[2px] border-black h-[40px] bg-white rounded-[5px] px-2 text-Primary text-[17px] font-medium">
          <select className="w-full h-full px-3 rounded-[5px] focus:outline-none">
            <option value="">2025</option>
            <option value="option1">Lavel 1</option>
            <option value="option2">Lavel 2</option>
            <option value="option3">Lavel 3</option>
          </select>
        </div>
    </div>
      {/* Table Section */}
      <div className="w-[1004px] h-[422px] rounded-[20px] bg-[#F6F6F6] mt-7 shadow-xl">
        <div className="overflow-x-auto pt-4 px-3">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Name
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Date
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                  Invoice No.
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
                 Total Price
                </th>
                <th className="border-b-[1px] border-gray-300 px-4 h-[52px] text-left">
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
                    {row.date}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.invoiceNo}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-8 h-[52px]">
                    {row.totalPrice}
                  </td>
                  <td className="border-b-[1px] border-gray-300 px-4 h-[52px] flex gap-4 items-center">
                    <button className="w-[92px] h-[37px] py-2 bg-Primary text-white rounded-[5px]">
                      Invoice
                    </button>
                    <button className="w-[108px] h-[37px] border-[1px] border-Primary py-2 rounded-[5px] text-Primary">
                     Download
                    </button>
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

export default Newrequest;
