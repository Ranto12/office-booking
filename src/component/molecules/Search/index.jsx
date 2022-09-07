import React from 'react'
import { IconSearch } from '../../../assets'
import { Input } from '../../atoms'

const index = () => {
  return (
    <div className='w-full h-20 flex  items-center bg-white rounded-2xl '>
    <div className='w-1/12 h-auto text-center items-center text-xl font-bold '>
      <img src={IconSearch} alt="inconSearch" className='' />
    </div>
    <div className='w-11/12 h-auto'>
      <Input className="w-full h-screen text-lg font-semibold" placeholder="Lokasi atau nama gedung..." />
    </div>
  </div>
  )
}

export default index