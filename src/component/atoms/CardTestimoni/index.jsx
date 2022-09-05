import React from 'react'
import { Profil } from '../../../assets'

const index = () => {
  return (
    <div className='w-full h-[139px] bg-slate-200 p-10 flex items-center rounded-lg mb-5'>
        <div className='w-full  '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quibusdam. Ratione ad corrupti rerum eligendi officiis iure numquam at est.</p>
            <p className='font-bold block mt-3'>Ranto <span className='font-normal'>- Altera Academy</span></p>
        </div>
        <div className='max-w-[60px] mx-5 h-20 rounded-full bg-pink-50 overflow-hidden'>
            <img src={Profil} alt="profil"  className='object-cover bg-cover object-right-top   '/>
        </div>
    </div>
  )
}

export default index