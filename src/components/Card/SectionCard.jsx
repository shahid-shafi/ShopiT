import React from 'react'
import StarRating from '../StarRating/StarRating';
import { AiFillPlusCircle } from 'react-icons/ai'


const Card = ({ addToCartHandler, item }) => {

    let discountedPrice = Math.round(item.price - (item.price * (item.discount / 100)));

    return (
        <div className='group text-center scale-75 sm:scale-90 pb-4 max-w-[315px]'>
            <div className='px-4 h-[200px] md:h-[260px] py-4 rounded-t-xl flex justify-center'><img className='py-1' src={item.imgSrc} alt="" /></div>
            <div className='py-4 space-y-4'>
                <h1 className='font-bold text-black px-2 text-xs sm:text-base'>{item.brand}</h1>
                <div className='flex justify-center text-xl text-primary'><StarRating /></div>
                <div className='flex justify-center gap-4 font-bold py-1'>
                    <h1 className='text-xl text-orange font-bold'>{`$${discountedPrice}`}</h1>
                    {item.discount > 0 && <h3 className='text-lightgray font-normal py-0.5'><s>{`$${item.price}`}</s></h3>}
                    {item.discount > 0 && <p>{`${item.discount}% off`}</p>}
                </div>
            </div>
            <div className='bottom-4 flex justify-center'>
                <button className='card-button flex items-center text-lg justify-between' onClick={() => { addToCartHandler(item) }}><AiFillPlusCircle className='text-xl mr-1' />Add to cart</button>
            </div>
        </div>
    )
}

export default Card