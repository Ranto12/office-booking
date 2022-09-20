import React from 'react'
import { useState } from 'react'
import { Logo, Profil } from '../../../assets'

const index = () => {
    const [bgnav, setBgnav] = useState(false)

    const handleBgnav =()=>{
        if(window.scrollY >= 20 ){
            setBgnav(true)
        }else{
            setBgnav(false)
        }
    }

    window.addEventListener('scroll', handleBgnav)
  return (
    <nav className={`fixed w-full px-10  z-50 ${bgnav ? 'bg-opacity-95 bg-white shadow-slate-800 shadow-sm' : ''}`}>
           <div className='flex justify-between h-1/5 items-center'>
                <h4 className=' text-black font-bold text-4xl italic'>
                    <img src={Logo} alt="logo"/>
                </h4>
                <div className='flex justify-center'>
                    <p className={`font-semibold text-white text-xl mr-7 ${bgnav ? 'text-black font-bold  opacity-100' : ''}`} >Ranto <br/><span className='font-normal text-base'>Admin</span></p>
                    <div className='h-16 w-16 rounded-full bg-white '>
                        <img src={Profil} alt="profil"  className='rounded-full w-full h-full object-right-top object-cover'/>
                    </div>
                </div>
            </div>
    </nav>
  )
}

export default index