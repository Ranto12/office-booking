import React from 'react'
import { Profil } from '../../../assets'

const index = () => {
  return (
    <nav className='fixed w-full px-10 pt-7  z-50'>
           <div className='flex justify-between h-1/5   '>
                <h4 className=' text-black font-bold text-4xl italic'>Sewa <span className='text-red-500'>Kantor</span></h4>
                <div className='flex justify-center'>
                    <p className='font-semibold text-white text-xl'>Ranto <br/><span className='font-normal text-base'>Admin</span></p>
                    <div className='h-16 w-16 rounded-full bg-white '>
                        <img src={Profil} alt="profil"  className='rounded-full w-full h-full object-right-top object-cover'/>
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default index