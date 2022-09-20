import React from 'react'
import { useState } from 'react'
import { ButtonSlider } from '../../molecules'
import dataSlider from './data'

const index = () => {
    const [slideIndex , setSlideIndex] = useState(1)

    const nextSlide =()=>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const PrevSlide =()=>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }


  return (
    <div className='flex justify-between items-center mx-64 relative'>
        {dataSlider.map((obj, index)=>{
            console.log(index , "index")
            if(slideIndex + 2 <= dataSlider.length ){
                return(
                    <div 
                     key={obj.id} className={slideIndex === index +1 || slideIndex +1  === index +1  || slideIndex+2  === index +1  ? 'transition duration-1000 ease-in-out hover:ease-in' : 'hidden'}>
                    <img src={obj.subTitle} alt="slide" className='bg-cover overflow-hidden object-center rounded-3xl  object-cover bg-center h-[200px] w-auto px-4'/>
                    <p className='px-4 mt-3 font-semibold text-xl'>{obj.title}</p>
                    </div>
                )
            } else if(slideIndex + 2 <= dataSlider.length +1){
                return(
                    <div 
                    key={obj.id} className={slideIndex === index +1 || slideIndex +1  === index +1  || 1  === index +1  ? 'transition duration-150 ease-out hover:ease-in' : 'hidden'}>
                    <img src={obj.subTitle} alt="slide" className='bg-cover overflow-hidden object-center rounded-3xl  object-cover bg-center h-[200px] w-auto px-4'/>
                    <p className='px-4 mt-3 font-semibold text-xl'>{obj.title}</p>
                    </div>
                
                )
            } else if (slideIndex +2 <= dataSlider.length +2){
                return(
                    <div 
                    key={obj.id} className={slideIndex === index +1 || 1  === index +1  || 2  === index +1  ? 'transition duration-150 ease-out hover:ease-in' : 'hidden'}>
                    <img src={obj.subTitle} alt="slide" className='bg-cover overflow-hidden object-center rounded-3xl  object-cover bg-center h-[200px] w-auto px-4'/>
                    <p className='px-4 mt-3 font-semibold text-xl'>{obj.title}</p>
                    </div>
                )
            }
        })}
        <ButtonSlider direction={"next"} moveSlide={nextSlide}/>
        <ButtonSlider direction={"prev"} moveSlide={PrevSlide}/>
    </div>
  )
}

export default index
