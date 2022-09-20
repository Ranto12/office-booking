import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Logo } from '../../../assets'

const index = () => {
  return (
    <div className=' relative left-0 bottom-5 text-center w-full px-32 mt-20'>
        <div className='w-full md:flex px-5'>
            <div className='md:w-2/3 justify-start'>
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
            <div className='md:w-1/3 w-full md:flex md:text-left   '>
                <div className='text-base font-medium gap-y-20 w-full md:w-1/2 right-0 md:flex justify-end' >
                    <div className='md:max-w-max '>
                        <p className='font-semibold text-2xl  mb-5'>SewaKantor</p>
                        <p>Home</p>
                        <p>Kantor</p>
                        <p>Team</p>
                    </div>
                </div>
                <div className='text-base my-5 md:mt-0 font-medium gap-y-20 w-full md:w-1/2  md:flex justify-end' >
                    <div className='md:max-w-max '>
                        <p className='font-semibold text-2xl  mb-5'>Bantuan</p>
                        <p>Syarat & Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                        <p>About Us</p>
                        <Link to='/faq'><p>FAQ</p></Link>
                    </div>
                </div>
            </div>
        </div>
        <hr  className='border-b-1 border-black '/>
        <p className='font-semibold text-lg py-10'>All rights reserved © SewaKantor Corporation 2021</p>
    </div>
    
  )
}

export default index