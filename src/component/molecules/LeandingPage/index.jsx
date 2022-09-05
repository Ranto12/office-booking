import React from 'react'
import { Profil } from '../../../assets/image'
import { BgPrimary } from '../../atoms';
import { SearchMenu } from '../../molecules';

const index = () => {
  return (
    <div className='h-screen relative'>
        <BgPrimary className="absolute -z-10 h-full"/>
       <div className='px-20 py-6 h-full '>
        <div className='h-full '>
            <div className='flex justify-between h-1/5 '>
                <h4 className='relative text-black font-bold text-4xl italic'>Sewa <span className='text-red-500'>Kantor</span></h4>
                <div className='flex'>
                    <p className='font-semibold text-white text-xl mr-10'>Ranto <br /> <span className='font-normal text-base'>Admin</span></p>
                    <div className='h-16 w-16 rounded-full bg-white relative'>
                        <img src={Profil} alt="profil"  className='absolute  rounded-full w-full h-full object-right-top object-cover'/>
                    </div>
                </div>
            </div>
            <div className='h-4/5 justify-end items-end flex'>
                <SearchMenu/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default index