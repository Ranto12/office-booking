import React from 'react'
import {  Content, Gap, LeandingPage } from '../../component'

const index = () => {
  return (
    <div>
      <LeandingPage/>
      <Gap h={10} />
      <Content />
      <Gap h={10}/>
    </div>
  )
}

export default index