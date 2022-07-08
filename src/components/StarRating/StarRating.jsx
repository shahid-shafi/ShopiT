import React, {useState} from 'react'
import { AiFillStar } from 'react-icons/ai'
const StarRating = () => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

  return (
    
    <div className='flex'>
    {[...Array(5)].map((x, index) => {
      let starRating = index + 1;
         return( 
          <label key={index} className='mx-0.5'>
             <input className='hidden' 
                type="radio" name='rating' 
                value={starRating} 
                onClick={()=>setRating(starRating)}
              />

             <AiFillStar
                className=' text-2xl cursor-pointer' 
               color={starRating <= (hover || rating) ? "#fdc726" : '#666666'} 
                onMouseEnter={() => setHover(starRating)}
                onMouseLeave={() => setHover(null)} 
             />
           </label>
         )

    })}
    </div>
  )
}

export default StarRating