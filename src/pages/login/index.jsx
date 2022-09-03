import React from 'react';
import { Bgprimary } from '../../assets/image';
import { Button, Input } from '../../component';

const index = () => {
  return (
    <div className='w-screen h-screen flex'>
        <div className=''>
            <img src={Bgprimary} alt="bg" className='bg-gradient-to-br bg-left-top bg-cover h-screen ' />
        </div>
        <div className='min-w-[400px] my-auto  px-10 items-center '>
            <p className='mb-10 font-bold text-2xl '>Sign in</p>
            <Input className=" bg-inputColorPrimary   w-[340px] " Label="Email Address" placeholder="Your Email"/>
            <Input className=" bg-inputColorPrimary   w-[340px] " Label="Password" placeholder="Your Password"/>
            <p className='text-end font-light text-lg mb-5 '>Forget Your Password</p>
            <Button nameButton="Sign in" className="bg-primaryButton"/>
        </div>
    </div>
  )
}

export default index