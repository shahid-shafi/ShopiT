import React from 'react'
import Card from '../components/Card/Card'

const electronic = [
         {
        id: 101,
        brand: 'Base wireless Buds',
        imgSrc: '/Images/ElectImages/Buds.png',
        price: 180,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 102,
        brand: 'Canon Camera',
        imgSrc: '/Images/ElectImages/CanonCamera.png',
        price: 550,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 103,
        brand: 'Gaming Controller/Mouse',
        imgSrc: '/Images/ElectImages/Controller.png',
        price: 110,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 104,
        brand: 'I-Mac Desktop White',
        imgSrc: '/Images/ElectImages/DesktopWhite.png',
        price: 1900,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 105,
        brand: 'Refrigirator',
        imgSrc: '/Images/ElectImages/Fridge.png',
        price: 350,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 106,
        brand: 'Grinder Mixer',
        imgSrc: '/Images/ElectImages/Grinder.png',
        price: 150,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 107,
        brand: 'Samsung UHD TV',
        imgSrc: '/Images/ElectImages/HDDisplay.png',
        price: 500,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 108,
        brand: 'HeadPhone',
        imgSrc: '/Images/ElectImages/HeadPhone.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 109,
        brand: 'Iphone 13 Max Pro',
        imgSrc: '/Images/ElectImages/Iphone.png',
        price: 1208,
        discount: 9,
        rating: 4,
        numRatings: 100
    },
    {
        id: 110,
        brand: 'Laptop',
        imgSrc: '/Images/ElectImages/Laptop.png',
        price: 1220,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 111,
        brand: 'MacBook Pro (32Gb RAM)',
        imgSrc: '/Images/ElectImages/MacBook.png',
        price: 1800,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 112,
        brand: 'Apple Ipad Pro',
        imgSrc: '/Images/ElectImages/MacLaptop.png',
        price: 2280,
        discount: 8,
        rating: 4,
        numRatings: 100
    },
    {
        id: 113,
        brand: 'MouseKeyBoard',
        imgSrc: '/Images/ElectImages/MouseKeyBoard.png',
        price: 230,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 114,
        brand: 'Android Phone',
        imgSrc: '/Images/ElectImages/PhoneAndroid.png',
        price: 455,
        discount: 23,
        rating: 4,
        numRatings: 100
    },
    {
        id: 115,
        brand: 'Power Bank',
        imgSrc: '/Images/ElectImages/PowerBank.png',
        price: 280,
        discount: 26,
        rating: 4,
        numRatings: 100
    },
    {
        id: 116,
        brand: 'Router',
        imgSrc: '/Images/ElectImages/Router.png',
        price: 320,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 117,
        brand: 'SmartWatch',
        imgSrc: '/Images/ElectImages/SmartWatch.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 118,
        brand: 'TV 32inch Display',
        imgSrc: '/Images/ElectImages/Television.png',
        price: 500,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 119,
        brand: 'Washing Machine 8kg',
        imgSrc: '/Images/ElectImages/washingMachine.png',
        price: 380,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 120,
        brand: 'Multimedia Speakers',
        imgSrc: '/Images/ElectImages/SoundBox.png',
        price: 280,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
]

const ElectronicItems = ({ addToCartHandler }) => {
  return (
      <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>
        {electronic.map(item => 
        <Card 
            key={item.id}
            item={item}
                addToCartHandler={addToCartHandler}
        />)}
    </div>
  )
}

export default ElectronicItems