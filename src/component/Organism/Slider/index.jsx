import React from 'react'
import { useState } from 'react'
import dataSlider from './data'

const index = () => {
    const [slideIndex , setSlideIndex] = useState(1)

    const nextSlide =()=>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } else{
            setSlideIndex(1)
        }
    }
    const PrevSlide =()=>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

  return (
    <div>
        {dataSlider.map((obj, index)=>{
            
            return(
                <div key={index} className={slideIndex === index ? 'w-full h-full absolute opacity-10 transition ease-in-out duration-300 ' : 'w-full h-full absolute opacity-0 transition ease-in-out duration-300'}>
                    <img src={obj.subTitle} alt="slide" />
                </div>
            )
        })}
    </div>
  )
}

export default index