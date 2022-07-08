import React from 'react'
import Card from '../Card/Card'


const CardSection = ({ items, addToCartHandler }) => {
  return (
      <div className='text-center pt-20 font-bold'>
          <div className=''>
          <h1 className=' text-lightgray sm:text-xl text-start ml-4'>Our Store</h1>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center'>   
              {items.map((item) => 
              <Card 
                key={item.id}
                item={item}
                addToCartHandler={addToCartHandler}
              />)}
          </div>
      </div>
  )
}

export default CardSection