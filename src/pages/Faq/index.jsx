import React from 'react'
import { Button, Navbar } from '../../component/atoms'
import { CardFaq, Dropdown, Footer } from '../../component/molecules'

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-36 px-32'>
        <div className='flex justify-center rounded-full mb-0 pb-0'>
          <Button nameButton="SewaKantor" className="italic w-48 rounded-3xl"/>
        </div>
        <div className='text-center '>
          <h1 className='text-5xl font-bold mb-10'>The Quick, Brown Fox Jumps <br /> Over a Lazy Dog</h1>
        </div>
        <div>
          <p className='text-center text-4xl text-text-abu-abu py-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptate <br /> accusantium doloremque rem aperiam, eaque ipsa quae.</p>
        </div>
        <div>
          <Dropdown/>
          <Dropdown/>
          <Dropdown/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default index