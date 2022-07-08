import React from 'react'
import Card from '../components/Card/Card'
const mobiles = [
    {
        id: 401,
        brand: 'ASUS ROG Phone-3 Snapdragon-865',
        imgSrc: '/Images/Mobiles/AsusRogPhone3Snapdragon865.png',
        price: 650,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 402,
        brand: 'Google Pixel XL (Very Silver, 128GB)',
        imgSrc: '/Images/Mobiles/GooglePixel.png',
        price: 1052,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 403,
        brand: 'HTC 10 (Black, 32GB)',
        imgSrc: '/Images/Mobiles/HTC10.png',
        price: 630,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 404,
        brand: 'Huawei Mate X2 (8GB, 128GB)',
        imgSrc: '/Images/Mobiles/HuaweiMateX2.png',
        price: 420,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 405,
        brand: 'APPLE iPhone 12 (Purple, 64GB)',
        imgSrc: '/Images/Mobiles/Iphone12.png',
        price: 900,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 406,
        brand: 'Oneplus 6 (Gray Onyx, 128GB)',
        imgSrc: '/Images/Mobiles/Oneplus6.png',
        price: 600,
        discount: 30,
        rating: 4,
        numRatings: 100
    },
    {
        id: 407,
        brand: 'OPPO F3 (Sunrise Red, 64GB)',
        imgSrc: '/Images/Mobiles/OppoF3.png',
        price: 400,
        discount: 21,
        rating: 4,
        numRatings: 100
    },
    {
        id: 408,
        brand: 'Samsung A50 (Black, 128)',
        imgSrc: '/Images/Mobiles/SamsungA50.png',
        price: 300,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 409,
        brand: 'Vivo Y93 (Nebula Purple, 128GB)',
        imgSrc: '/Images/Mobiles/VivoY93NebulaPurple.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 410,
        brand: 'Xiaomi Poco F2 Pro (Silver, 128GB)',
        imgSrc: '/Images/Mobiles/XiaomiPocoF2Pro.png',
        price: 300,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 411,
        brand: 'HTC Desire 626s (2GB, 32GB)',
        imgSrc: '/Images/Mobiles/HTCDesire626s.png',
        price: 180,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 412,
        brand: 'Huawei Nova Y60 (Aqua Green, 64GB)',
        imgSrc: '/Images/Mobiles/HuaweiNovaY60.png',
        price: 280,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 413,
        brand: 'APPLE iPhone 12 ProMax (Silver, 512)',
        imgSrc: '/Images/Mobiles/Iphone12ProMax.png',
        price: 2300,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 414,
        brand: 'Oppo F9 Starry Purple',
        imgSrc: '/Images/Mobiles/OppoF9StarryPurple.png',
        price: 350,
        discount: 14,
        rating: 4,
        numRatings: 100
    },
    {
        id: 415,
        brand: 'Samsung S21 (Phantom Violet, 256GB)',
        imgSrc: '/Images/Mobiles/SamsungS21.png',
        price: 280,
        discount: 26,
        rating: 4,
        numRatings: 100
    },
    {
        id: 416,
        brand: 'Xiaomi Redmi Note 9',
        imgSrc: '/Images/Mobiles/XiaomiRedmiNote9.png',
        price: 170,
        discount: 5,
        rating: 4,
        numRatings: 100
    },
    {
        id: 417,
        brand: 'Huawei P40 (256GB)',
        imgSrc: '/Images/Mobiles/HuaweiP40.png',
        price: 600,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 418,
        brand: 'APPLE iPhone SE 2020',
        imgSrc: '/Images/Mobiles/iphoneSE2020.png',
        price: 550,
        discount: 14,
        rating: 4,
        numRatings: 100
    },
    {
        id: 419,
        brand: 'Oppo Reno4 Pro (SilkyWhite, 128GB)',
        imgSrc: '/Images/Mobiles/OppoReno4ProWhite.png',
        price: 550,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 420,
        brand: 'Huawei P50 Pocket',
        imgSrc: '/Images/Mobiles/HuaweiP50.png',
        price: 1460,
        discount: 11,
        rating: 4,
        numRatings: 100
    },
    {
        id: 421,
        brand: 'ASUS Rog 5 Ultimate',
        imgSrc: '/Images/Mobiles/AsusRog5Ultimate.png',
        price: 1110,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 422,
        brand: 'Infinix Hot 10',
        imgSrc: '/Images/Mobiles/InfinixHot10.png',
        price: 200,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 423,
        brand: 'Nokia 3.1 (White, 4GB, 64GB)',
        imgSrc: '/Images/Mobiles/Nokia3.1.png',
        price: 200,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 424,
        brand: 'Samsung Galaxy M30s',
        imgSrc: '/Images/Mobiles/SamsungGalaxyM30s.png',
        price: 281,
        discount: 22,
        rating: 4,
        numRatings: 100
    },
]

const Mobiles = ({addToCartHandler}) => {
  return (
      <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>
          {mobiles.map(item =>
              <Card
                  key={item.id}
                  item={item}
                  addToCartHandler={addToCartHandler}
              />)}
      </div>
  )
}

export default Mobiles