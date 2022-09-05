import React from 'react'
import { Gap, TagHeader } from '../../atoms'
import { CardSewaKantor } from '../index'
const index = () => {
  return (
    <div className=' mx-32'>
        <TagHeader className="" title="Sewa - Ruang Kantor Populer" />
        <Gap h="10"/>
        <CardSewaKantor />
    </div>
  )
}

export default index