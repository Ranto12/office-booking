import React from 'react'
import { Bgprimary } from '../../../assets/image'

const index = ({className}) => {
  return (
    <img  src={Bgprimary} alt="bg-primary" className={`h-screen w-screen object-right-top object-cover z-10 ${className}`}/>
  )
}

export default index