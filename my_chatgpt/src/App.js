import React from 'react'
import Leftsection from './Components/leftsection/Leftsection'
import Rightsection from './Components/rightsection/Rightsection';
import { BsBrightnessHigh,BsBoxArrowUpRight, } from "react-icons/bs";
import { FaDiscord, } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";




export default function App() {
  const title = ['Light mode','OpenAI Discord','Update & FAQ','Log Out'];


  const icon = [
    <BsBrightnessHigh/>,
    <FaDiscord/>,
    <BsBoxArrowUpRight />,
    <MdOutlineLogout className='text-lg'/>
  ];

  const messages = ['messages','messages','messages','messages'];

  return (
    <div className='grid grap-2 grid-cols-6'> 

      <div className=''>
        <Leftsection title={title} icon={icon}  messages={messages} />  
      </div>

      <div className='col-span-5'>
        <Rightsection />
      </div>

      
    </div>
  )
}
