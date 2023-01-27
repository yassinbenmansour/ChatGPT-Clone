import React from 'react'
import Leftsection from './Components/leftsection/Leftsection'

import {
  DiscordIcon,
  ExternalLinkIcon,
  LogOutIcon,
  SunIcon,
} from "./constants/index";


export default function App() {
  const title = ['Light mode','OpenAI Discord','Update & FAQ','Log Out'];
  const icon = [
    <SunIcon/>,
    <DiscordIcon />,
    <ExternalLinkIcon />,
    <LogOutIcon />,
  ];
  return (
    <div> 
      <Leftsection title={title} icon={icon} />  
    </div>
  )
}
