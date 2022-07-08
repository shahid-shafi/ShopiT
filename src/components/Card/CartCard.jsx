import React from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from 'react-icons/ai'

const CartCard = ({ item, onRemoveHandler, onAddHandler, handleRemoveFromCart }) => {
    const priceAfterDiscount = Math.round(item.price - (item.price * (item.discount / 100)))

    return (
        <div className='relative bg-white w-96 m-auto grid grid-cols-6 gap-3'>
            <button onClick={handleRemoveFromCart} className='absolute top-0 right-3 text-xl'><AiFillDelete /></button>
            <div className='flex items-center font-bold text-sm py-2 col-span-4'>
                <img className='h-16 w-14 mr-2' src={item.imgSrc || "/images/honeyBottle-2.webp"} alt="" />
                <h1 className=''>{item.brand}</h1>
            </div>
            <div className='flex justify-center items-center w-16 col-span-1'>
                <button className='flex justify-center items-center hover:scale-125' onClick={onRemoveHandler}><AiOutlineMinus /></button>
                <div className='px-1.5 bg-primary rounded mx-1'><p className=''>{`${item.count}`}</p></div>
                <button className='flex justify-center items-center hover:scale-125' onClick={onAddHandler}><AiOutlinePlus /></button>
            </div>
            
            <div className='px-1 font-bold col-span-1 flex justify-end items-center'>
                <p>{`$${priceAfterDiscount}`}</p>
            </div>
        </div>
    )
}

export default CartCard

    // < div className = 'bg-white' >
    //     <div className='flex justify-between gap-3 border'>
    //         <img className='h-20' src={item.imgSrc || "/images/honeyBottle-2.webp"} alt="" />
    //         <div className='font-bold text-sm py-2'>
    //             <h1 className=''>{item.brand}</h1>
    //             <p className=' font-medium'>50ml / black</p>
    //             <h3>{`$${item.price} x ${count}`}</h3>
    //         </div>
    //         <div className='flex justify-center items-center p-3 gap-3'>
    //             <div className='flex justify-center items-center text-2xl'>
    //                 <div className=''>
    //                     <button className='group border flex justify-center items-center hover:bg-primary rounded-t-md ' onClick={onAddHandler}><AiOutlinePlus /></button>
    //                     <button className='flex border border-t-0 justify-center items-center hover:bg-primary rounded-b-md' onClick={onRemoveHandler}><AiOutlineMinus /></button>
    //                 </div>
    //             </div>
    //             <button className='group text-2xl border hover:bg-primary'><AiFillDelete className='group-hover:rotate-12' /></button>
    //         </div>
    //     </div>
    //     </ >