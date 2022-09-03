import React from 'react'
import { Bgprimary } from '../../../assets/image'

const index = ({...rest}) => {
  return (
    <img {...rest} src={Bgprimary} alt="bg-primary" className=' h-screen w-screen object-right-top object-cover z-10 '/>
  )
}

export default index