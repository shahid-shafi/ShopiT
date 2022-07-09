import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
const slides = [
    {
        url: '/Images/Carousal/image-1.webp'
    },
    {
        url: '/Images/Carousal/image-2.jpg'
    },
    {
        url: '/Images/Carousal/image-3.jpg'
    },
    {
        url: '/Images/Carousal/image-4.jpg'
    },
    {
        url: '/Images/Carousal/image-5.jpg'
    }
]

const Carousal = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex(currentIndex + 1)
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex)
        }, 3000);
    }, [currentIndex])


    const handleOnPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const handleOnNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const handleOnSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className='relative p-2 bg-light'>
            <div className='relative h-36 md:h-72 flex items-center'>
                <div className='absolute imageSlider' onClick={handleOnPrevious}><BsChevronCompactLeft /></div>

                <div className='bg-center h-36 md:h-72 w-screen bg-cover bg-no-repeat' style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',}}></div>

                <div className='absolute imageSlider right-0' onClick={handleOnNext}><BsChevronCompactRight /></div>
            </div>

            <div className='absolute bottom-2 text-white left-[46%] flex md:text-2xl text-base cursor-pointer text-center'>{slides.map((slide, slideIndex) => <div className='hover:text-primary opacity-70 hover:opacity-100'><GoPrimitiveDot onClick={() => handleOnSlide(slideIndex)} /></div>)}</div>
        </div>
    )
}

export default Carousal