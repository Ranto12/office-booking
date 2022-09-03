import React from 'react';
import { Bgprimary } from '../../assets/image';
import { Button, Input } from '../../component';

const index = () => {
  return (
    <div className='w-screen h-screen flex mx-auto m-0'>
        <div className=''>
            <img src={Bgprimary} alt="bg" className=' h-screen object-cover object-right-top ' />
        </div>
        <div className='min-w-[500px] my-auto  px-10 items-center right-0'>
            <p className='mb-10 font-bold text-2xl '>Sign in</p>
            <Input className=" bg-inputColorPrimary    " Label="Email Address" placeholder="Your Email"/>
            <Input className=" bg-inputColorPrimary   " Label="Password" placeholder="Your Password"/>
            <p className='text-end font-normal text-base mb-5 text-red-600 '>Forget Your Password</p>
            <Button nameButton="Sign in" />
            <p className='text-center font-medium'>Don't have an account? <span className='text-red-700'>Sign Up</span></p>
        </div>
    </div>
  )
}

export default index