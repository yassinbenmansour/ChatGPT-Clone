import React from 'react'
import {
    PlusIcon,
  } from "../../constants";

export default function Leftsection(props) {
  return (
    <div className='flex w-64 bg-black h-screen flex-col'>
      <div className='m-2 w-60'>
       <a href="new chtat" className='flex items-center cursor-pointer gap-3 hover:bg-gray-500/10  border border-gray-500 rounded-md py-3 px-2 tracking-wide duration-150 transition-colors  text-sm text-white  '>
        <PlusIcon/>
        New chat
       </a>
      </div>



      <div className="m-2 w-60">
         


        <ul>
            {props.title.map((title, index) => (
        <li key={index}>
          <a href="" className='flex items-center cursor-pointer gap-3 hover:bg-gray-500/10  rounded-md py-3 px-2 tracking-wide duration-150 transition-colors  text-sm text-white  '>
            {props.icon[index]}
            {title}
            </a> 
        </li>
      ))}
    </ul>
        
       </div>



    
    </div>
  )
}
