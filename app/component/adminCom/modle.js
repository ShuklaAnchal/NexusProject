import React from 'react'

const modle = ({setShowModal}) => {
  return (
    <div className='w-[1035px] h-[646px] flex flex-col rounded-[20px] bg-red-500 z-[50] absolute top-[10%] left-[16%]'>
      <div className='w-full bg-Primary rounded-t-[20px] flex justify-center items-center py-3'>
        <h1 className='text-[25px] text-white font--medium'>View & Edit List</h1>
      </div>

      <div className='flex items-center justify-center py-16'>
 <form action="" className='flex flex-col gap-4 items-center'>
<div className='flex flex-row gap-6'>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Name</label>
        <input type="text" className='border-[2px] border-black w-[427px] h-[40px] rounded-[6px]' />
    </div>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Email</label>
        <input type="text" className='border-[2px] border-black  w-[427px] h-[40px] rounded-[6px]' />
    </div>
</div>

<div className='flex flex-row gap-6'>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Phone</label>
        <input type="text" className='border-[2px] border-black w-[427px] h-[40px] rounded-[6px]' />
    </div>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Referred By</label>
        <input type="text" className='border-[2px] border-black  w-[427px] h-[40px] rounded-[6px]' />
    </div>
</div>

<div className='flex flex-row gap-6'>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Bussiness Promoters</label>
        <input type="text" className='border-[2px] border-black w-[427px] h-[40px] rounded-[6px]' />
    </div>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Bussoness Income</label>
        <input type="text" className='border-[2px] border-black  w-[427px] h-[40px] rounded-[6px]' />
    </div>
</div>

<div className='flex flex-row gap-6'>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Status</label>
        <input type="text" className='border-[2px] border-black w-[427px] h-[40px] rounded-[6px]' />
    </div>
    <div className='flex flex-col gap-2'>
        <label className='text-[16px]'>Recived Payment</label>
        <select type="text" className='border-[2px] border-black  w-[427px] h-[40px] rounded-[6px]' >
        <option>Active</option>
        <option>Inactive</option>
    </select>
    </div>
</div>

<button className='text-[21px] bg-Primary w-[225px] h-[46px] items-center rounded-[6px] mt-7'>Save Changes</button>
 </form>
 
      </div>
    </div>
  )
}

export default modle