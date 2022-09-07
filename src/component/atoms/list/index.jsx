import React, { useState } from 'react'
import { IconsOffice } from '../../../assets'

const index = () => {
  const [style , setStyle] = useState(false)
  const [valueSearch, setValueSearch] = useState("kantor")

  const Dropdown =()=>{
    if(style === false){
      setStyle(true)
    }else{
      setStyle(false)
    }
  }

  const SetValueInput = (e)=>{
    setValueSearch(e.target.name)
  }

console.log(valueSearch);

  return (
    <div className='h-auto w-full mx-4'>
      <div className={`h-16 w-full text-xl mb-1  bg-white  font-semibold flex z-9999 ${style ? "rounded-t-lg" : "rounded-lg"}`}>
        <div className='w-1/6 h-auto text-center m-4 items-center text-xl font-bold '>
        <img src={IconsOffice} alt="inconSearch" className=' w-auto' />
        </div>
        <div className='w-5/6 h-auto text-center flex items-center justify-around'>
          <div>{valueSearch}</div>
          <div onClick={Dropdown} className="cursor-pointer"> 👇 </div>
        </div>
      </div>
        <div className={`w-full h-auto    text-center rounded-b-lg ${style ? "" : "hidden"}`}>
          <p className='w-full h-16 text-center rounded-lg border-black border-3 flex items-center justify-center text-lg font-semibold bg-slate-300 bg-opacity-70 hover:bg-opacity-100' onClick={SetValueInput} value="Kantor Budiman">Kantor Budiman</p>
          <p className='w-full h-16 text-center rounded-lg border-black border-3 flex items-center justify-center text-lg font-semibold bg-slate-300 bg-opacity-70 hover:bg-opacity-100'>Kantor Budiman</p>
          <p className='w-full h-16 text-center rounded-lg border-black border-3 flex items-center justify-center text-lg font-semibold bg-slate-300 bg-opacity-70 hover:bg-opacity-100'>Kantor Budiman</p>
          <p className='w-full h-16 text-center rounded-lg border-black border-3 flex items-center justify-center text-lg font-semibold bg-slate-300 bg-opacity-70 hover:bg-opacity-100'>Kantor Budiman</p>
        </div>
    </div>
  )
}

export default index