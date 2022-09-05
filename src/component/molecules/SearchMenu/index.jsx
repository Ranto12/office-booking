import React from 'react'
import { IconSearch } from '../../../assets'
import { Button, Input, Select } from '../../atoms'

const index = () => {
  return (
        <div className='h-[300px]  w-[630px] bg-wrapper-Input rounded-lg p-10 relative flex flex-wrap isolate overflow-hidden '>
           <div className='flex h-20 w-full'>
            <div className='flex w-1/3'>
            <Select className="mx-4 " />
            </div>
            <div className='flex w-1/3'>
            <Button nameButton="Sewa"  className="bg-white text-black "/>
            <Button nameButton="Beli" className=" bg-white text-black mx-4"/>
            </div>
           </div>
          <div className='w-full h-20 flex flex-wrap items-center bg-white rounded-2xl'>
            <div className='w-1/12 h-auto text-center items-center text-xl font-bold '>
              <img src={IconSearch} alt="inconSearch" className='' />
            </div>
            <div className='w-11/12 h-auto'>
              <Input className="w-full h-screen text-lg font-semibold" placeholder="Lokasi atau nama gedung..." />
            </div>
          </div>
          <Button nameButton="Cari Kantor"/>
        </div>
  )
}

export default index