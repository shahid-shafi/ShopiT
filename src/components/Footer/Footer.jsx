import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGoogle } from 'react-icons/fa'
import { CgTwitter } from 'react-icons/cg'

const Footer = () => {
  return (
      <div className='relative footer space-y-20 text-lightgray'>
        <div className='pt-36 px-6 text-center sm:w-[600px] m-auto space-y-8'>
            <h1 className='text-3xl font-bold leading-none text-black'>ShopiT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ullam, nemo repudiandae aliquid quos magni accusantium eaque.
            </p>
        <div className='flex space-x-2 justify-center py-1 text-black text-2xl'>
          <div className='social hover:bg-bg-fb'>{<FaFacebookF />}</div>
          <div className='social hover:bg-bg-tw'>{<CgTwitter/>}</div>
          <div className='social hover:bg-bg-fb'>{<FaLinkedinIn/>}</div>
          <div className='social hover:bg-gradient-to-br from-orange to-bg-fb'>{<FaInstagram/>}</div>
          <div className='social hover:bg-lightgray'>{<FaGoogle/>}</div>
            </div>
        </div>
          <p className='text-center'>Copyright @2020 ShopiT. All rights reserved</p>
    </div>
  )
}

export default Footer;