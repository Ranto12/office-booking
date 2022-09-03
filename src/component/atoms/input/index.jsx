import React from 'react'

const index = ({className, ...rest}) => {
  return (
    <input className={`px-5 py-4 outline-none  ${className}`} {...rest} />
  )
}

export default index