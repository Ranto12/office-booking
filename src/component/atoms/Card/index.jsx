import React from 'react'
import { Bgprimary } from '../../../assets'

const index = () => {
  return (
    <div className='h-[600px] w-[365px] rounded-2xl bg-white cursor-pointer'>
        <div className='h-[465px] w-[365px]  rounded-xl'>
            <img src={Bgprimary} alt="office"  className='h-full object-center object-cover rounded-xl'/>
        </div>
        <div className='h-[135px] w-[365px]  rounded-b-xl px-6'>
            <p className='text-2xl font-bold mb-5 pt-4'>Wisma Atlit</p>
            <p className='text-base font-semibold text-gray-400'>Mulai dari</p>
            <p className='text-2xl font-bold'>Rp. 200.000 /sqm /bulan</p>
        </div>
    </div>
  )
}

export default index