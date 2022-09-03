import React from 'react'

const index = ({className,Label, ...rest}) => {
  return (
    <div>
      <label className='font-bold text-lg ' htmlFor='input'>{Label}</label>
      <input className={`px-5 py-5 w-full outline-none mx-auto flex rounded-lg mb-5 mt-3 h-16 text-lg font-semibold ${className}`}  id="input"  {...rest} />
    </div>
  )
}

export default index