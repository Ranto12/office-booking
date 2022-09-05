import React from 'react'
import { Facebook, Instagram, Linkedin, Logo } from '../../../assets'

const index = () => {
  return (
    <div className='mx-32 h-auto my-5   text-center py-5'>
        <div className='w-full flex px-5'>
            <div className='w-2/3 justify-start'>
                <img src={Logo} alt="logo" className='mx-auto md:ml-5'/>
                <div className='block md:text-left md:ml-5'>
                    <p className='block text-lg font-medium '>Alterra Academy
                            <br />
                        Jalan Pemuda No. 9 Rawamangun,
                            <br />
                        Jakarta Timur - 13220
                    </p>
                </div>
                <div className='flex gap-3 justify-center my-4 mb-10 md:justify-start md:ml-5'>
                    <img src={Facebook} alt="facobook" />
                    <img src={Instagram} alt="Instagram" />
                    <img src={Linkedin} alt="Linkedin" />
                </div>
            </div>
            <div className='w-1/3 flex md:text-left'>
                <div className='text-base font-medium gap-y-20 md:w-1/2 ' >
                    <p className='font-semibold text-2xl  mb-5'>SewaKantor</p>
                    <p>Home</p>
                    <p>Kantor</p>
                    <p>Team</p>
                </div>
                <div className='text-base mt-5 md:mt-0 font-medium gap-y-20 md:w-1/2 ' >
                    <p className='font-semibold text-2xl  mb-5'>Bantuan</p>
                    <p>Syarat & Ketentuan</p>
                    <p>Kebijakan Privasi</p>
                    <p>About Us</p>
                    <p>FAQ</p>
                </div>
            </div>
        </div>
        <hr  className='border-b-1 border-black '/>
        <p className='font-semibold text-lg'>All rights reserved © SewaKantor Corporation 2021</p>
    </div>
  )
}

export default index