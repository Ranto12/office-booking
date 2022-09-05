import React from 'react'

const index = ({title, ...rest}) => {
  return (
    <h1 {...rest} className='xl:mx-32 text-center md:text-center lg:text-left  font-bold text-3xl text-black'>
        {title}
    </h1>
  )
}

export default index