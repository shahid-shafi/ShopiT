import React from 'react'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const items = [
  {
    icon: <MdLocationPin />,
    heading: 'Address',
    cityOne: {
      name: 'NewYork Office',
      p1: '190 Broadway, New York',
      p2: 'NewYork City, USA',
    },
    cityTwo: {
      name: 'London Office',
      p1: '204, Paul St, London NE,',
      p2: 'London City, UK',
    },
    cityThree: {
      name: 'Abu Dhabi Office',
      p1: "Int'l Airport Rd Al Manhal,",
      p2: 'Abu Dhabi, UAE',
    }
  },

  {
    icon: <BsTelephoneFill />,
    heading: 'Phone',
    cityOne: {
      name: 'NewYork Office',
      p1: '+1 012-345-678, Phone',
      p2: '+1 876-543-210, fax',
    },
    cityTwo: {
      name: 'London Office',
      p1: '+44 012-345-678, Phone',
      p2: '+44 876-543-210, fax',
    },
    cityThree: {
      name: 'Abu Dhabi Office',
      p1: "+97 012-345-678, Phone",
      p2: '+97 876-543-210 fax',
    }
  },

  {
    icon: <MdEmail />,
    heading: 'Email',
    cityOne: {
      name: 'NewYork Office',
      p1: 'honbee.ny@gmail.com',
      p2: 'services.ny@honbee.com',
    },
    cityTwo: {
      name: 'London Office',
      p1: 'honbee.lon@gmail.com',
      p2: 'services.lon@honbee.com',
    },
    cityThree: {
      name: 'Abu Dhabi Office',
      p1: 'honbee.abu@gmail.com',
      p2: 'services.abu@honbee.com',
    }
  },

]

const Contact = () => {

  return (
    <div>
      <div className=' bg-dimgray text-center p-32'>
        <div className='space-y-3'>
          <h1 className='uppercase font-bold text-xl md:text-4xl'>Contact Us</h1>
          <h3 className='text-xs md:text-base font-medium'><NavLink className='hover:text-primary' to='/'>Home</NavLink><span className=' mx-3'>&gt;</span>Contact Us</h3>
        </div>
      </div>

      <div className=' bg-primary text-center space-y-10 md:flex md:space-y-0 md:justify-around p-20 m-auto '>
        {items.map(item =>  <div className='space-y-3'>
               <div className='space-y-2'>
                 <div className='flex justify-center items-center w-16 h-16 bg-light m-auto text-3xl rounded-full border-2 text-lightgray'>
                   <span>{item.icon}</span>
                 </div>
                 <h1 className='uppercase font-bold'>{item.heading}</h1>
               </div>
               <div>
                 <h1 className='font-semibold '>{item.cityOne.name}</h1>
                 <p>{item.cityOne.p1}</p>
                 <p>{item.cityOne.p2}</p>
               </div>
     
               <div>
                 <h1 className='font-semibold '>{item.cityTwo.name}</h1>
                 <p>{item.cityTwo.p1}</p>
                 <p>{item.cityTwo.p2}</p>
               </div>
     
               <div>
                 <h1 className='font-semibold'>{item.cityThree.name}</h1>
                 <p>{item.cityThree.p1}</p>
                 <p>{item.cityThree.p2}</p>
               </div>
             </div>)}
      </div>

    </div>
  )
}

export default Contact