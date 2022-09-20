import React from 'react'
import { Bgprimary } from '../../assets'
import { Button, Card, CardDetailOffice, Footer, Gap, Navbar } from '../../component'

const index = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-40 px-44 flex w-full'>
        <div className='w-2/3 px-10 pr-52'>
          <h1 className="text-5xl font-bold py-4">Wisma Atlet</h1>
          <p className='text-2xl '>Jl. Kemayoran, Jakarta Pusat</p>
          <CardDetailOffice/>
              <Button nameButton="Saya Berminat" className="w-[400px] mt-16"/>
        </div>
        <div className='w-1/3 '>
          <img src={Bgprimary} alt="iamgeDetail " className='w-full object-right-top object-cover rounded-2xl  h-[560px]' />
        </div>

      </div>
        <div className='pt-40 px-44 flex w-full'>
          <div className='w-2/3'>wqed</div>
          <div className='w-1/3'>asda</div>
        </div>
      <Footer/>
    </div>
  )
}

export default index