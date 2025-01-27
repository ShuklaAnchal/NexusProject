import React from 'react'

const renewPlan = () => {
  return (
       <div className="w-[1006px] h-[485px] flex flex-col">
    <h1 className="text-[35px] font-medium ">Renew you Virton+ plan</h1>
    <p className='text-[20px] font-medium w-[824px]'>Your reseller plan expires soon. You have 9 remaining credits. Renew your plan to get uninterrupted services.</p>

 <div className='w-full flex justify-center mt-16 gap-10'>
 <div className='w-[308px] h-[308px] flex flex-col '>
        <div className='w-full h-[60px] flex justify-center items-center bg-Primary rounded-t-[10px]'>
      <h1 className='text-[40px] text-white font-medium'>Renewal</h1>
        </div>
<div className='h-[248px] w-full bg-[#DAD7FF] font-medium flex items-center flex-col py-8'>
 <h1 className='text-[40px]'>₹ 590</h1>
 <h2 className='text-[20px] mb-5'>Credits:	10</h2>
 <button className='bg-Primary h-[30px] px-5 text-white text-[20px] rounded-[5px]'>Select Plan</button>
</div>
     </div>


     <div className='w-[308px] h-[308px] flex flex-col '>
        <div className='w-full h-[60px] flex justify-center items-center bg-Primary rounded-t-[10px]'>
      <h1 className='text-[40px] text-white font-medium'>Upgrade</h1>
        </div>
<div className='h-[248px] w-full bg-[#DAD7FF] font-medium flex items-center gap-[50px] flex-col py-8'>
 <h1 className='text-[40px]'>₹ 1190</h1>
 <button className='bg-Primary h-[30px] px-5 text-white text-[20px] rounded-[5px]'>Select Plan</button>
</div>
     </div>
 </div>
    </div>

  )
}

export default renewPlan