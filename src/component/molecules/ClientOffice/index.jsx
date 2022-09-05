import React from 'react'
import { LogoAlta, LogoDicoding, LogoUndemy } from '../../../assets'
import { Gap, TagHeader, TagIcons } from '../../atoms'

const index = () => {
  return (
    <div className='mx-32 '>
        <TagHeader title="Berbagi Klien Kami"/>
        <Gap height="10"/>
        <div className='flex flex-wrap gap-5 justify-center lg:justify-start xl:mx-32 '>
            <TagIcons img={LogoAlta}/>
            <TagIcons img={LogoUndemy}/>
            <TagIcons img={LogoDicoding}/>
        </div>
    </div>
  )
}

export default index