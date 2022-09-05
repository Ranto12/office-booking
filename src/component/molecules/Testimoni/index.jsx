import React, { useEffect, useState } from 'react'
import { CardTestimoni } from '../../atoms'

const index = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1024;
    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResizeWindow);
        return()=>{
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, [])
  if(width > breakpoint){
    return (
        <div className='sm:mx-32 flex md:mx-32 lg:mx-64 p-10 h-auto bg-[#EFEFEF] rounded-2xl overflow-hidden'>
            <div className='w-[600px] items-center flex'>
                <div>
                <h1 className='text-red-600 text-5xl font-bold'>Testimoni</h1>
                <p>Sedikit testimoni dari client kami</p>
                </div>
            </div>
            <div className='xl:mx-auto'>
                <div className='text-center mb-10 lg:hidden'>
                <p className='font-bold text-4xl text-[#F15C60] '>Testimoni 
                </p>
                    <span className='font-semibold text-base text-black'>Sedikit testimoni dari client kami</span>
                </div>
                <CardTestimoni />
                <CardTestimoni />
                <CardTestimoni />
            </div>
        </div>
      ) 
  } else{
    return (
        <div className='sm:mx-32 flex md:mx-32 lg:mx-64 p-10 h-auto bg-[#EFEFEF] rounded-2xl overflow-hidden'>
            <div className='xl:mx-auto'>
                <div className='text-center mb-10 lg:hidden'>
                <p className='font-bold text-4xl text-[#F15C60] '>Testimoni 
                </p>
                    <span className='font-semibold text-base text-black'>Sedikit testimoni dari client kami</span>
                </div>
                <CardTestimoni />
                <CardTestimoni />
                <CardTestimoni />
            </div>
        </div>
      )
  }
}

export default index