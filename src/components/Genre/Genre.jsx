import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { AiFillCaretUp } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'


const catagories = [
    {
        imgSrc: '/Images/Genre/Grocery.png',
        name: 'Grocery',
        to: '/grocery'
    },
    {
        imgSrc: '/Images/Genre/Electronic.png',
        name: 'Electronics',
        to: '/electronics'
    },
    {
        imgSrc: '/Images/Genre/Fashion.png',
        name: 'Fashion',
        to: '/fashion',
        arrowDown: < FiChevronDown className='group-hover:rotate-180' />,
        dropdown: [
            {
                name: "Men's Wear",
                to: '/fashion/mens-wear'
            },
            {
                name: "Women's Wear",
                to: '/fashion/womens-wear'
            },
            {
                name: "Kid's Wear",
                to: '/fashion/kids-wear'
            },
        ]
    },
    {
        imgSrc: '/Images/Genre/Cosmetic.png',
        name: 'Cosmetic',
        to: '/cosmetic'
    },
    {
        imgSrc: '/Images/Genre/Home.png',
        name: 'Home',
        to: '/home-appliances',
        arrowDown: < FiChevronDown className='group-hover:rotate-180' />,
        dropdown: [
            {
                name: "Furniture",
                to: '/home/furniture'
            },
            {
                name: "Kitchen & Dining",
                to: '/home/kitchen-dining'
            },
            {
                name: "Home Decor",
                to: '/home/home-decor'
            },
        ]
    },
    {
        imgSrc: '/Images/Genre/Mobiles.png',
        name: 'Mobiles',
        to: '/mobiles'
    },

]

const Genre = () => {
    return (
        <div className='text-center text-sm h-16 md:h-24 bg-light text-lightgray font-bold flex justify-around items-center self-baseline z-10'>
            {catagories.map(item =>
                <NavLink to={item.to} key={item.name}> <div className='relative group md:px-4 cursor-pointer '>
                    {item.dropdown && <div className='absolute bg-white hidden group-hover:block rounded-md top-[107%] w-max text-left md:space-y-4 shadow-md shadow-black p-2 z-50'>
                        <div className='absolute -top-[16px] text-white text-2xl shadow-black'><AiFillCaretUp /></div>
                        {item.dropdown.map(dropDownItem => <div key={dropDownItem.name}>
                            <Link className='group flex justify-between items-center hover:text-primary' to={dropDownItem.to}><div className=' text-[.6rem] md:text-sm'>{dropDownItem.name}</div><span className='text-xl hidden hover:block'><BiChevronRight /></span></Link>
                        </div>)}
                    </div>}
                    <div className='w-8 md:w-16 h-8 md:h-16 m-auto overflow-hidden'>
                        <img src={item.imgSrc} alt="" />
                    </div>
                    <h1 className='flex items-center justify-center group-hover:text-primary'>{item.name}{item.arrowDown}</h1>
                </div></NavLink>
            )}
        </div>
    )
}

export default Genre