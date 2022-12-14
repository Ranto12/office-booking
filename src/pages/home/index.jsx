import React from 'react'
import {  ClientOffice, Content, Footer, Gap, LeandingPage, Navbar,  Slider,  Testimoni } from '../../component'

const index = () => {
  return (
    <div>
      <Navbar/>
      <LeandingPage/>
      <Gap  height="10"/>
      {/* <SliderOffice /> */}
      <Slider/>

      <Gap  height="10"/>
      <Content />
      <Gap height="10"/>
      <ClientOffice />
      <Gap height="28"/>
      <Testimoni />
      <Gap height="20"/>
      <Footer/>
    </div>
  )
}

export default index