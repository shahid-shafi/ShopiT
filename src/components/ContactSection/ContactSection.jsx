import React from 'react'

const ContactSection = () => {
  return (
    <div className='space-y-8 sm:space-y-0 pb-8 pt-14 text-center grid sm:grid-cols-2 sm:text-left gap-y-8 md:grid-cols-4 sm:px-8 bg-slate-800 text-slate-400'>
          <div className='space-y-3 w-[60%] m-auto'>
            <h3 className='text-lg md:text-xl text-slate-300 font-bold'>Information</h3>

        <div className='text-xs sm:text-sm space-y-3'>
            <p className='hover:text-lime-700'>About Us</p>
            <p className='hover:text-lime-700'>Carriers</p>
            <p className='hover:text-lime-700'>Delivary Information</p>
            <p className='hover:text-lime-700'>Privacy Policy</p>
            <p className='hover:text-lime-700'>Terms & Conditions</p>
        </div>
        </div>

          <div className='space-y-3 w-[60%] m-auto'>
              <h3 className='text-lg md:text-xl text-slate-300 font-bold'>My Account</h3>

              <div className='text-xs sm:text-sm space-y-3'>
                  <p className='hover:text-lime-700'>My Account</p>
                  <p className='hover:text-lime-700'>Login Account</p>
                  <p className='hover:text-lime-700'>My Cart</p>
                  <p className='hover:text-lime-700'>Wishlist</p>
                  <p className='hover:text-lime-700'>Checkout</p>
              </div>
          </div>

          <div className='space-y-3 w-[60%] m-auto'>
              <h3 className='text-lg md:text-xl text-slate-300 font-bold'>Customer Services</h3>

              <div className='text-xs sm:text-sm space-y-3'>
                  <p className='hover:text-lime-700'>Our Services</p>
                  <p className='hover:text-lime-700'>Call</p>
                  <p className='hover:text-lime-700'>Mail</p>
                  <p className='hover:text-lime-700'>Privacy Policy</p>
                  <p className='hover:text-lime-700'>Need Help</p>
              </div>
          </div>

          <div className='space-y-3 w-[60%] m-auto'>
              <h3 className='text-lg md:text-xl text-slate-300 font-bold'>Contact Us</h3>

              <div className='text-xs sm:text-sm space-y-3'>
                  <p className=''>Address: 90 Feet NH Srinagar City</p>
                  <p className=''>Phone: +910123456789</p>
                  <p className=''>Email: myemail@gmail.com</p>
              </div>
          </div>
        
    </div>
  )
}

export default ContactSection