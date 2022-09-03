import React from 'react'

const index = ({nameButton,  ...rest}) => {
  return (
   <button className='h-auto w-auto p-4 rounded-lg' {...rest} >{nameButton}</button>
  )
}

export default index