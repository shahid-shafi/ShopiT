import React from 'react'
import Card from '../components/Card/Card'

const womensWear = [
    {
        id: 501,
        brand: 'Blue Half Sleeves T-Shirt for Ladies',
        imgSrc: '/Images/WomensWear/BlueLadiesShirt.png',
        price: 180,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 502,
        brand: 'Brown Long-Coat With Epaulettes',
        imgSrc: '/Images/WomensWear/BrownLongCoatWithEpaulettes.png',
        price: 443,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 503,
        brand: 'Black Long-Neck Ladies Shoes',
        imgSrc: '/Images/WomensWear/BlackLongNeckShoes.png',
        price: 310,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 504,
        brand: 'Cream Color Sleeveless Pajama',
        imgSrc: '/Images/WomensWear/CreamColorSleevelessPajama.png',
        price: 600,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 505,
        brand: 'Flower Print Mesh Patchwork Dress',
        imgSrc: '/Images/WomensWear/FlowerPrintMeshPatchworkDress.png',
        price: 350,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 506,
        brand: 'Golden-Black Wedding Dress',
        imgSrc: '/Images/WomensWear/GoldenBlackWeddingDress.png',
        price: 950,
        discount: 26,
        rating: 4,
        numRatings: 100
    },
    {
        id: 507,
        brand: 'Half-Sleeves Printed Long-Dress',
        imgSrc: '/Images/WomensWear/HalfSleevesPrintedLongDress.png',
        price: 500,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 508,
        brand: 'Red Color High-Heels Sandal',
        imgSrc: '/Images/WomensWear/RedHighHeelsSandal.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 509,
        brand: 'Sky-Blue Ladies Shoes',
        imgSrc: '/Images/WomensWear/SkyBlueLadiesShoes.png',
        price: 308,
        discount: 9,
        rating: 4,
        numRatings: 100
    },
    {
        id: 510,
        brand: 'Black Long Gown For Ladies',
        imgSrc: '/Images/WomensWear/BlackLongGownForLadies.png',
        price: 221,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 511,
        brand: 'Kashmiri Pashmina Kani Suits',
        imgSrc: '/Images/WomensWear/KashmiriPashminaKaniSuits.png',
        price: 700,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 512,
        brand: 'Black Frock Coat Ladies',
        imgSrc: '/Images/WomensWear/BlackFrockCoatLadies.png',
        price: 280,
        discount: 8,
        rating: 4,
        numRatings: 100
    },
    {
        id: 513,
        brand: 'Ladies Long Sleeve Pink Coat',
        imgSrc: '/Images/WomensWear/LadiesLongSleeveCoatPink.png',
        price: 230,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 514,
        brand: 'Nike Ladies Inner Wear',
        imgSrc: '/Images/WomensWear/LadiesTop.png',
        price: 155,
        discount: 23,
        rating: 4,
        numRatings: 100
    },
    {
        id: 515,
        brand: 'Flite Red-Black Ladies Slippers',
        imgSrc: '/Images/WomensWear/RedBlackLadiesSlippers.png',
        price: 132,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 516,
        brand: 'MultiColor Floral Print LongDress',
        imgSrc: '/Images/WomensWear/MultiColorFloralPrintDress.png',
        price: 320,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 517,
        brand: 'Red Sleeveless Printed Long Frock',
        imgSrc: '/Images/WomensWear/RedSleevelessLongFrock.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 518,
        brand: 'Blue Ladies Running Shorts',
        imgSrc: '/Images/WomensWear/RunningShorts.png',
        price: 150,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 519,
        brand: 'Sleeveless Blue Wedding Pajama',
        imgSrc: '/Images/WomensWear/SleevelessBlueWeddingPajama.png',
        price: 380,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 520,
        brand: 'Sleeveless CoatType Creamy LongDress',
        imgSrc: '/Images/WomensWear/SleevelessCoatTypeCreamyDress.png',
        price: 280,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
    {
        id: 521,
        brand: 'Stripped Shorts For Ladies',
        imgSrc: '/Images/WomensWear/StrippedShorts.png',
        price: 250,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 522,
        brand: 'Stripes Halftone SunDress',
        imgSrc: '/Images/WomensWear/StripesHalftoneSunDress.png',
        price: 500,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 523,
        brand: 'Red LongSleeves Ladies Jacket',
        imgSrc: '/Images/WomensWear/RedLongSleevesLadiesJacket.png',
        price: 380,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 524,
        brand: 'Simple Slippers for Ladies',
        imgSrc: '/Images/WomensWear/SlipperLadies.png',
        price: 280,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
]
const WomensWear = ({ addToCartHandler }) => {
    return (
        <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>
            {womensWear.map(item =>
                <Card
                    key={item.id}
                    item={item}
                    addToCartHandler={addToCartHandler}
                />)}
        </div>
    )
}

export default WomensWear