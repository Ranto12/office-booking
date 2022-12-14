import React from 'react'
import { Button, Input, List, Select } from '../../atoms'
import { Search } from '../../molecules'

const index = () => {
  return (
        <div className='h-[300px]  w-[630px] bg-wrapper-Input rounded-lg p-10  flex flex-wrap isolate overflow-hidden z-10'>
           <div className='flex h-20 w-full z-10'>
            <div className='flex min-w-max'>
            <List />
            </div>
            <div className='flex w-auto'>
              <Button nameButton="Sewa"  className="bg-white text-black"/>
              <Button nameButton="Beli" className=" bg-white text-black mx-4"/>
            </div>
           </div>
           <Search/>
          <Button nameButton="Cari Kantor" />
        </div>
  )
}

export default index