import React from 'react'
import Navbar from '@/app/component/navbar'
import Footer from '@/app/component/footer'
import MiddleCom from '@/app/component/signinpage/middlecom'
const page = () => {
  return (
    <div className='h-auto w-full'>
     <div className='flex flex-col gap-24'>
        <Navbar />
        <MiddleCom />
       <Footer />
     </div>
    </div>
  )
}

export default page