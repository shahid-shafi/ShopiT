import React from 'react'
import CardSection from '../components/CardSection/CardSection'
import { MdLocalShipping, MdSupportAgent } from 'react-icons/md'
import { BsCoin } from 'react-icons/bs'
import Carousal from '../components/Carousal/Carousal' 



const Home = ({ items, addToCartHandler, cart }) => {
  return (
    <div className='text-dark'>
    <Carousal/>
      <div className=' bg-light text-dark pb-5 sm:pb-10'>
        <CardSection items={items} addToCartHandler={addToCartHandler} />
      </div>

      <div className=' bg-dimgray p-14 md:px-0  py-32 sm:px-10 overflow-hidden '>
        <div className='space-y-24 md:space-y-0 md:space-x-4 lg:space-x-16 md:flex md:justify-center md:items-start'>
          <div className='space-y-3 text-center  scale-125 sm:scale-100'>
            <div className='space-y-3'>
              <div className='bg-primary text-4xl text-black flex justify-center items-center w-20 h-20 m-auto border-2 rounded-full border-black'><MdLocalShipping/></div>
              <h1 className='font-bold text-lg text-black'>Shipping Fast & Quick Delivery</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='flex m-auto text-center w-72'>
              <p className='font-bold text-5xl text-lightgray'>01</p>
              <div className='w-full mx-10 border-b' />
            </div>
          </div>

          <div className='space-y-3 md:space-y-0 text-center md:flex md:flex-col-reverse scale-125 md:scale-100'>
            <div className='space-y-3'>
            <div className='bg-primary text-4xl text-black flex justify-center items-center w-20 h-20 m-auto border-2 rounded-full border-black'><BsCoin/></div>
              <h1 className='font-bold text-lg text-black'>Money Back & Guarantee</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='flex m-auto text-center w-72 md:pb-4'>
              <p className='font-bold text-5xl text-lightgray'>02</p>
              <div className='w-full mx-10 border-b' />
            </div>
          </div>

          <div className='space-y-3 text-center  scale-125 sm:scale-100'>
            <div className='space-y-3'>
            <div className='bg-primary text-4xl text-black flex justify-center items-center w-20 h-20 m-auto border-2 rounded-full border-black'><MdSupportAgent/></div>
              <h1 className='font-bold text-lg text-black'>Online Support 24/7</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className='flex m-auto text-center w-72'>
              <p className='font-bold text-5xl text-lightgray'>03</p>
              <div className='w-full mx-10 border-b' />
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home