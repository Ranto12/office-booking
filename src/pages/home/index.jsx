import React from 'react'
import {  ClientOffice, Content, Footer, Gap, LeandingPage, SliderOffice, Testimoni } from '../../component'

const index = () => {
  return (
    <div>
      <LeandingPage/>
      <Gap  height="10"/>
      <SliderOffice />
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