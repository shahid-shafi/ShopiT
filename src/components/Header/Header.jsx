import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import Cart from '../Cart/Cart'


const navPages = [
    {
        to: '/',
        name: 'Home'
    },
    {
        to: '/shop',
        name: 'Shop'
    },
    {
        to: '/blog',
        name: 'Blog'
    },
    {
        to: '/contact',
        name: 'Contact'
    }
]

const Header = ({ uniqueCartItems, onAddHandler, onRemoveHandler, handleDeleteFromCart }) => {
    const [showMenu, setShowMenu] = useState(false);

    const [showCart, setShowCart] = useState(false)

    const handleOnShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleOnShowCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div className=' text-white p-2 relative flex justify-between items-center z-10 bg-primary'>
            <div className='flex justify-between'>
                <button className='hamburger mr-4 space-y-2 sm:hidden cursor-pointer' onClick={handleOnShowMenu}>
                    <div className='w-7 h-0.5 bg-white'></div>
                    <div className='w-7 h-0.5 bg-white'></div>
                    <div className='w-7 h-0.5 bg-white'></div>
                </button>
                <div className='sm:ml-4 text-2xl text-black font-bold hover:scale-110'><NavLink to='/'>ShopiT</NavLink></div>
            </div>
            <Cart uniqueCartItems={uniqueCartItems} showCart={showCart} onAddHandler={onAddHandler} onRemoveHandler={onRemoveHandler} handleDeleteFromCart={handleDeleteFromCart}  />
            <div className={showMenu ? "navlist absolute sm:static top-[100%]" : "navlist absolute sm:static top-[100%] transition duration-200 hidden sm:block"}>
                <ul className='w-full sm:flex sm:justify-center mt-0'>
                    {navPages.map((page, index) =>
                        <li className='w-full uppercase font-semibold relative hover:bg-white md:hover:bg-primary flex justify-center sm:py-1 py-3 sm:px-5 nav-item' key={index}><NavLink to={page.to}>{page.name}</NavLink></li>)}
                </ul>
            </div>

            <div className='text-black text-2xl flex gap-4 '>
                <div className='group relative hover:bg-white text-center border border-black p-2 rounded-full' onClick={handleOnShowCart}>
                    {uniqueCartItems.length > 0 && <p className='absolute text-xs -right-1 -top-1 z-10 border border-y-lightgray group-hover:border-primary bg-white px-1 rounded-full'>{uniqueCartItems.length}</p>}
                    <AiOutlineShoppingCart />
                </div>
                <div className='hover:bg-white border border-black p-2 rounded-full'>
                    <BsPerson />
                </div>
            </div>
        </div >
    )
}

export default Header;


