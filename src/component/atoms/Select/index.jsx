import React from 'react'
import { IconsOffice } from '../../../assets'

const index = ({className, ...rest}) => {
  return (
    <div  className={`h-16 w-full text-xl mb-5 p-4 bg-white  font-semibold rounded-lg flex ${className}`}>
        <div className='w-1/6 h-auto text-center items-center text-xl font-bold '>
            <img src={IconsOffice} alt="inconSearch" className=' w-auto' />
        </div>
        <div className='w-5/6 h-auto'>
            <select name="nama" id="nama" className='h-auto w-full outline-none rounded-xl font-semibold text-xl px-5 '>
                <option value="" className='outline-none px-3 h-20 w-full active:bg-white border-none'>mantul</option>
            </select>
        </div>
    </div>
  )
}

export default index