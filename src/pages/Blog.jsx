import React, {useEffect, useState} from 'react'

const items = [
  {
    id: 1,
    img: '/images/blogImage-1.webp'
  },
  {
    id: 2,
    img: '/images/blogImage-2.webp'
  },
  {
    id: 3,
    img: '/images/blogImage-3.webp'
  }
]

const Blog = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
  
    setTimeout(()=>{

      if(currentImage === 3) setCurrentImage(0);
      else setCurrentImage(currentImage + 1);

    }, 3000)
  }, [currentImage])
  

  return (
    <div>

    <div className='py-6 px-10 bg-dark md:px-14'>
        {items.map((item, index)=> 
          <div><img className={index === currentImage ? "md:w-[90%] m-auto" : "hidden"} src={item.img} alt="" /></div>
        )}
    </div>
    
    </div>
  )
}

export default Blog