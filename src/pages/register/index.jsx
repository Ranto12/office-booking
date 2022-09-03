import React from 'react';
import { Bgprimary } from '../../assets/image';
import { Button, Input } from '../../component';

const index = () => {
  return (
    <div className='w-screen h-screen flex mx-auto m-0'>
        <div className=''>
            <img src={Bgprimary} alt="bg" className=' h-screen object-cover object-right-top' />
        </div>
        <div className='min-w-[500px] my-auto  px-10 items-center '>
            <p className='mb-10 font-bold text-2xl '>Register</p>
            <Input className=" bg-inputColorPrimary    " Label="Name" placeholder="Your Name"/>
            <Input className=" bg-inputColorPrimary   " Label="Email Address" placeholder="Your Email"/>
            <Input className=" bg-inputColorPrimary   " Label="Password" placeholder="Your Password"/>
            <Input className=" bg-inputColorPrimary   " Label="Company" placeholder="Your Company"/>
            <Input className=" bg-inputColorPrimary   " Label="Phone Number" placeholder="+62"/>
            <p className='text-end font-normal text-base mb-5 text-red-600 '>have an account ? <span className='text-red-700 cursor-pointer'>Sign in</span></p>
            <Button nameButton="Sign Up" />
        </div>
    </div>
  )
}

export default index