import React from 'react'
import { Profil } from '../../../assets/image'
import { BgPrimary, Navbar } from '../../atoms';
import { SearchMenu } from '../../Organism';

const index = () => {
  return (
    <div className='h-screen relative'>
        <BgPrimary className="absolute -z-10 h-full"/>
       <div className='px-20 py-6 h-full '>
        <div className='h-full '>
            <div className='h-4/5 justify-end items-end flex'>
                <SearchMenu/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default index