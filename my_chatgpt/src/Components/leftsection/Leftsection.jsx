import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import {FiMessageSquare} from "react-icons/fi"

export default function Leftsection({icon , title , messages}) {
  return (
    <div className='flex  bg-black h-screen flex-col'>
      <div className='m-2 '>
       <a href="new chtat" className='flex items-center cursor-pointer gap-3 hover:bg-gray-500/10  border border-gray-500 rounded-md py-3 px-2 tracking-wide duration-150 transition-colors  text-sm text-white  '>
        <AiOutlinePlus/>
        New chat
       </a>
      </div>

      <div className="m-2 ">
            
        <ul>
            {messages.map((messages) => (
        <li>
          <a className='flex items-center cursor-pointer gap-3 hover:bg-gray-500/10  rounded-md py-3 px-2 tracking-wide duration-150 transition-colors  text-sm text-white  '>
            <FiMessageSquare className='text-lg'/>
            {messages}
            </a> 
        </li>
      ))}
    </ul>
        
       </div>

      <div className="flex-col flex-1 overflow-y-auto border-b border-white/20 m-2 ">
              <div className="flex flex-col gap-2 text-gray-100 text-sm">
                {/*  */}
              </div>
            </div>

      <div className="m-2 ">
            
        <ul>
            {title.map((title, index) => (
        <li key={index}>
          <a className='flex items-center cursor-pointer gap-3 hover:bg-gray-500/10  rounded-md py-3 px-2 tracking-wide duration-150 transition-colors  text-sm text-white  '>
            {icon[index]}
            {title}
            </a> 
        </li>
      ))}
    </ul>
        
       </div>



    
    </div>
  )
}
