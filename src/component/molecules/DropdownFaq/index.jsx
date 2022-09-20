import React, { useState } from 'react'

const index = () => {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        if(show === false){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
  return (
    <div className='lg:mx-64 shadow-md flex justify-between px-10 py-5'>
        <div className='  lg:p-5 rounded-xl text-3xl font-semibold'>
            <h1 className=''>The Quick, Brown Fox Jumps Over a Lazy Dog ?</h1>
        <p className={` py-5 text-3xl font-normal opacity-80 ${show ? '' : 'hidden'}`}>Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque rem aperiam, eaque ipsa quae.</p>
        </div>
        <h1 className='text-6xl text-text-abu-abu cursor-pointer items-center flex ' onClick={handleShow}>
                {show ? '˄' : '˅'}
        </h1>
    </div>
  )
}

export default index