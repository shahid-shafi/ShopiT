import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

const Newsletter = () => {
  return (
      <div className='text-center bg-white py-20 space-y-10 -z-10'>
        <div className='scale-75 md:scale-100'>
            <h1 className='font-bold text-4xl'>Join Newsletter Now</h1>
            <p className='text-lightgray text-lg'>Stay updated on sales, new items and more</p>
        </div>
      <div className=' group relative w-[400px] md:w-[480px] m-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-primary to-orange opacity-50  rounded-md group-hover:blur'></div>
       <div className='relative flex justify-between px-4 py-1 bg-dimgray rounded-md text-lightgray shadow-md'>
              <input className='pr-28 outline-none text-sm bg-dimgray' type="email" placeholder='Your Email Address'/>
              <div className='text-4xl'><HiOutlineMail /></div>
       </div>
      </div>
    </div>
  )
}

export default Newsletter