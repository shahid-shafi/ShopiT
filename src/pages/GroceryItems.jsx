import React from 'react'
import Card from '../components/Card/Card'

const grocery = [
    {
        id: 201,
        brand: 'Brinky Biscuit',
        imgSrc: '/Images/Grocery/BrinkyBiscuit.png',
        price: 5,
        discount: 0,
        rating: 4,
        numRatings: 100
    },
    {
        id: 202,
        brand: 'B-Up Brownie Chocolate (500g)',
        imgSrc: '/Images/Grocery/ChocolateB-Up.png',
        price: 20,
        discount: 30,
        rating: 4,
        numRatings: 100
    },
    {
        id: 203,
        brand: 'Coffee',
        imgSrc: '/Images/Grocery/Coffee.png',
        price: 11,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 204,
        brand: 'Cooking Oil',
        imgSrc: '/Images/Grocery/CookingOil.png',
        price: 10,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 205,
        brand: 'Daily Juice',
        imgSrc: '/Images/Grocery/DailyJuiceCan.png',
        price: 35,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 206,
        brand: 'Jeera Biryani Rice',
        imgSrc: '/Images/Grocery/JeeraRice.png',
        price: 150,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 207,
        brand: 'Just Juice',
        imgSrc: '/Images/Grocery/JustJuice.png',
        price: 50,
        discount: 45,
        rating: 4,
        numRatings: 100
    },
    {
        id: 208,
        brand: 'Masala Fries',
        imgSrc: '/Images/Grocery/MasalaFries.png',
        price: 5,
        discount: 0,
        rating: 4,
        numRatings: 100
    },
    {
        id: 209,
        brand: 'Oreo Biscuit',
        imgSrc: '/Images/Grocery/Oreo.png',
        price: 7,
        discount: 0,
        rating: 4,
        numRatings: 100
    },
    {
        id: 210,
        brand: 'Peanut Butter',
        imgSrc: '/Images/Grocery/PeaNutButter.png',
        price: 35,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 211,
        brand: 'Pop Chips',
        imgSrc: '/Images/Grocery/PopChips.png',
        price: 18,
        discount: 15,
        rating: 4,
        numRatings: 100
    },
    {
        id: 212,
        brand: 'Real Juice',
        imgSrc: '/Images/Grocery/RealJuice.png',
        price: 22,
        discount: 10,
        rating: 4,
        numRatings: 100
    },
    {
        id: 213,
        brand: 'Oats Strawberry Flavour',
        imgSrc: '/Images/Grocery/OatsStrawberry.png',
        price: 23,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 214,
        brand: 'Tata Salt 1kg Pack',
        imgSrc: '/Images/Grocery/TataSalt.png',
        price: 15,
        discount: 23,
        rating: 4,
        numRatings: 100
    },
    {
        id: 215,
        brand: 'Turmeric Powder (1Kg)',
        imgSrc: '/Images/Grocery/TurmericPowder.png',
        price: 80,
        discount: 26,
        rating: 4,
        numRatings: 100
    },
    {
        id: 216,
        brand: 'Whey+ Protein 2kg Pack',
        imgSrc: '/Images/Grocery/WheyProteinPowder.png',
        price: 220,
        discount: 25,
        rating: 4,
        numRatings: 100
    },
    {
        id: 217,
        brand: 'Delight Cashew Nuts 1kg',
        imgSrc: '/Images/Grocery/DelightCashewNuts.png',
        price: 150,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 218,
        brand: 'Monster Energy Drink',
        imgSrc: '/Images/Grocery/MonsterEnergyDrink.png',
        price: 50,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 219,
        brand: 'Oats Tomato Flavour',
        imgSrc: '/Images/Grocery/OatsTomato.png',
        price: 23,
        discount: 17,
        rating: 4,
        numRatings: 100
    },
    {
        id: 220,
        brand: 'Soya Sticks Chips',
        imgSrc: '/Images/Grocery/SoyaSticksChips.png',
        price: 28,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
    {
        id: 221,
        brand: 'Ice Cream Chocolate Flavour',
        imgSrc: '/Images/Grocery/IceCream.png',
        price: 25,
        discount: 20,
        rating: 4,
        numRatings: 100
    },
    {
        id: 222,
        brand: 'Fresh Cheese Pizza',
        imgSrc: '/Images/Grocery/Pizza.png',
        price: 50,
        discount: 35,
        rating: 4,
        numRatings: 100
    },
    {
        id: 223,
        brand: 'Chocolate Family Pack',
        imgSrc: '/Images/Grocery/ChocolatePack.png',
        price: 80,
        discount: 29,
        rating: 4,
        numRatings: 100
    },
    {
        id: 224,
        brand: 'Fresh Omni Dates',
        imgSrc: '/Images/Grocery/FreshOmniDates.png',
        price: 28,
        discount: 16,
        rating: 4,
        numRatings: 100
    },
]

const GroceryItems = ({ addToCartHandler }) => {
    return (
        <div className=' bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>
            {grocery.map(item =>
                <Card
                    key={item.id}
                    item={item}
                    addToCartHandler={addToCartHandler}
                />)}
        </div>
    )
}

export default GroceryItems