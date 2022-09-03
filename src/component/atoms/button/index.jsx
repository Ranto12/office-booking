import React from 'react'

const index = ({nameButton,  ...rest}) => {
  return (
   <button {...rest} className='h-16 w-full text-xl mb-5 p-4 bg-primaryButton text-white font-semibold rounded-lg'  >{nameButton}</button>
  )
}

export default index