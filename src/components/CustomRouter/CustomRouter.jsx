import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Blog from '../../pages/Blog'
import Contact from '../../pages/Contact'
import ElectronicItems from '../../pages/ElectronicItems'
import GroceryItems from '../../pages/GroceryItems'
import MensWear from '../../pages/MensWear'
import WomensWear from '../../pages/WomensWear'
import Cosmetics from '../../pages/Cosmetics'
import Mobiles from '../../pages/Mobiles'
import KidsWear from '../../pages/KidsWear'
import ProductDetail from '../ProductDetail.jsx/ProductDetail'

const CustomRouter = ({ items, addToCartHandler, cart }) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home items={items} addToCartHandler={addToCartHandler} cart={cart} />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/electronics' element={<ElectronicItems addToCartHandler={addToCartHandler}/>} />
      <Route path='/grocery' element={<GroceryItems addToCartHandler={addToCartHandler}/>} />
      <Route path='/fashion/mens-wear' element={<MensWear addToCartHandler={addToCartHandler}/>} />
      <Route path='/fashion/womens-wear' element={<WomensWear addToCartHandler={addToCartHandler}/>} />
      <Route path='/fashion/kids-wear' element={<KidsWear addToCartHandler={addToCartHandler}/>} />
      <Route path='/cosmetic' element={<Cosmetics addToCartHandler={addToCartHandler}/>} />
      <Route path='/mobiles' element={<Mobiles addToCartHandler={addToCartHandler}/>} />
      <Route path='/product-detail' element={<ProductDetail/>}/>

    </Routes>
  )
}

export default CustomRouter