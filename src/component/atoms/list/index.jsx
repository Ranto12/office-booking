import React, { useEffect, useState } from 'react'
import { IconsOffice } from '../../../assets'

const index = () => {
  const [style , setStyle] = useState(false)
  const [valueSearch, setValueSearch] = useState("kantor")

  const data = [
    {
      id: 1,
      name: "kantor Purworejo"
    },
    {
      id: 2,
      name: "kantor Indonesia"
    }
  ]

  const Dropdown =()=>{
    if(style === false){
      setStyle(true)
    }else{
      setStyle(false)
    }
  }

  useEffect(()=>{
    setStyle(false)
    if(valueSearch.length > 10){
      setValueSearch(valueSearch.slice(0,10)+"..")
    } else{
      setValueSearch(valueSearch)
    }
  },[valueSearch])


console.log(style);
  return (
    <div className='h-auto w-full mx-4'>
      <div className={`h-16 w-full text-xl mb-1  bg-white  font-semibold flex z-9999 ${style ? "rounded-t-lg" : "rounded-lg"}`}>
        <div className='w-1/6 h-auto text-center m-4 items-center text-xl font-bold '>
        <img src={IconsOffice} alt="inconSearch" className=' w-auto' />
        </div>
        <div className='w-5/6 h-auto text-center flex items-center justify-around'>
          <div className='overflow-hidden text-left '>{valueSearch}</div>
          <div onClick={Dropdown} className="cursor-pointer"> 👇 </div>
        </div>
      </div>
        <div className={`w-full h-auto text-center rounded-b-lg ${style ? "" : "hidden"}`}>
          {data.map((item)=>{
            return(
              <div key={item.id} className='w-full h-16 text-center rounded-lg border-black border-3 flex items-center justify-center text-lg font-semibold bg-slate-300 bg-opacity-70 hover:bg-opacity-100'   onClick={() => {setValueSearch(item.name)}}>{item.name}</div>
            )
          })}      
        </div>
    </div>
  )
}

export default index