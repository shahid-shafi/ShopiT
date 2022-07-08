import React from 'react'
import Card from '../components/Card/Card'

const mensWear = [
    {
        id: 301,
        brand: 'Black Shirt',
        imgSrc: '/Images/MensWear/BlackShirt.png',
        price: 180,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 302,
        brand: 'Black Sweat Shirt',
        imgSrc: '/Images/MensWear/BlackUpper.png',
        price: 250,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 303,
        brand: 'Blue Coat',
        imgSrc: '/Images/MensWear/BlueCoat.png',
        price: 130,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 304,
        brand: 'Black Sweat Shirt Long Sleeves',
        imgSrc: '/Images/MensWear/BlackSweatShirtLongSleeves.png',
        price: 400,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 305,
        brand: 'Addidas Black Cap',
        imgSrc: '/Images/MensWear/Cap.png',
        price: 150,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 306,
        brand: 'SHORT CAMOUFLAGE CAPRI',
        imgSrc: '/Images/MensWear/Capri.png',
        price: 150,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 307,
        brand: 'Short Sleeve Tshirt Cream Color',
        imgSrc: '/Images/MensWear/CreamColorTshirt.png',
        price: 200,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 308,
        brand: 'Stylish Gray Coat',
        imgSrc: '/Images/MensWear/GrayCoat.png',
        price: 350,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 309,
        brand: 'Winter Jacket Gray Color',
        imgSrc: '/Images/MensWear/GrayJacket.png',
        price: 308,
        discount: 19,
        rating: 4,
        numRatings: 100
    },
    {
        id: 310,
        brand: 'Green Stylish Pants',
        imgSrc: '/Images/MensWear/GreenPant.png',
        price: 175,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 311,
        brand: 'NZEE Stylish Shoes',
        imgSrc: '/Images/MensWear/MenShoes.png',
        price: 400,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 312,
        brand: 'Trousers',
        imgSrc: '/Images/MensWear/pent.png',
        price: 180,
        discount: 45,
        rating: 4,
        numRatings: 100
    },
    {
        id: 313,
        brand: 'Black Yellow Shorts',
        imgSrc: '/Images/MensWear/BlackYellowShorts.png',
        price: 230,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 314,
        brand: 'Gray Stylish Sweater',
        imgSrc: '/Images/MensWear/SweaterGray.png',
        price: 255,
        discount: 23,
        rating: 4,
        numRatings: 100
    },
    {
        id: 315,
        brand: 'Tshirts Multiple Colors',
        imgSrc: '/Images/MensWear/Tshirt-triple.png',
        price: 280,
        discount: 26,
        rating: 4,
        numRatings: 100
    },
    {
        id: 316,
        brand: 'Yellow Upper',
        imgSrc: '/Images/MensWear/YellowUpper.png',
        price: 320,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 317,
        brand: 'Yellow Tshirt',
        imgSrc: '/Images/MensWear/YellowTshirt.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 318,
        brand: 'Green Long Sleeve T-Shirt',
        imgSrc: '/Images/MensWear/GreenLongSleeveShirt.png',
        price: 300,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 319,
        brand: 'Nike Shoes',
        imgSrc: '/Images/MensWear/NikeShoes.png',
        price: 380,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 320,
        brand: 'Fort Jeans Black & Grey',
        imgSrc: '/Images/MensWear/FortJeansBlackandGrey.png',
        price: 280,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
    {
        id: 321,
        brand: 'LightPink Long Sleeve Tshirt',
        imgSrc: '/Images/MensWear/LightPinkLongSleeveTshirt.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 322,
        brand: 'Puma Black-Orange Shoes',
        imgSrc: '/Images/MensWear/PumaBlackOrangeShoes.png',
        price: 500,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 323,
        brand: 'BatMan Costume',
        imgSrc: '/Images/MensWear/BatManCostume.png',
        price: 562,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 324,
        brand: 'Camouflage Pattern Trouser',
        imgSrc: '/Images/MensWear/CamouflageTrouser.png',
        price: 177,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
]

const MensWear = ({ addToCartHandler }) => {
  return (
      <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>
          {mensWear.map(item =>
              <Card
                  key={item.id}
                  item={item}
                  addToCartHandler={addToCartHandler}
              />)}
      </div>
  )
}

export default MensWear