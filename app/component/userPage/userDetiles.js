import React from 'react'

const userDetiles = () => {
  return (
  <div className='flex flex-col gap-10'>
      <div className='w-[978px] h-[299px] rounded-[20px] bg-[#E3E3E3] text-[20px] shadow-xl'>
     <div className='border-b-[1px] border-[#fff] flex justify-between w-full px-12 items-center h-[60px] mt-2'>
       <h1 className=' font-medium '>Name</h1>
       <h2 className='font-light '>Anchal Shukla</h2>
     </div>

     <div className='border-b-[1px] border-[#fff] flex justify-between w-full px-12 items-center h-[53px]'>
       <h1>Reference no.</h1>
       <h2>640389ab394ee</h2>
     </div>

     <div className='border-b-[1px] border-[#fff] flex justify-between w-full px-12 items-center h-[53px]'>
       <h1>Business Promoters</h1>
       <h2>201</h2>
     </div>
     <div className='border-b-[1px] border-[#fff] flex justify-between w-full px-12 items-center h-[53px]'>
       <h1>Business Income</h1>
       <h2>100500</h2>
     </div>
     <div className='flex justify-between w-full px-12 items-center h-[53px]'>
       <h1>Business Partners</h1>
       <h2>5</h2>
     </div>
    </div>

    <div className='w-[973px] h-[96px] bg-[#E7E7E7] flex justify-between items-center rounded-[10px] px-3'>
     <div>
        <h1 className='font-semibold text-[25px] '>Referance Link</h1>
     </div>

     <div className='flex font-normal gap-3 items-center'>
 <div className='text-[18px]'>virton.in/#/register/640389ab394ee</div>
<button className='w-[90px] h-[37px] bg-Primary rounded-[5px]'>Copy</button>
     </div>
    </div>
  </div>
  )
}

export default userDetiles