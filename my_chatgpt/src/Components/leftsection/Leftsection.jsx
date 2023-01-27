import React from 'react'
import {
    DiscordIcon,
    ExternalLinkIcon,
    LogOutIcon,
    PlusIcon,
    SunIcon,
  } from "../../constants";

export default function Leftsection() {
  return (
    <div className='flex w-72 bg-black h-screen'>
      <div className='m-2 w-full'>
        <a href='new' className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20">
              <PlusIcon />
              New chat
        </a>
      </div>
    </div>
  )
}
