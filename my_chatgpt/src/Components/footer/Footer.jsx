import React from 'react'
import { FiSend } from "react-icons/fi"

const Footer = () => {
    return (
      <div>
        <div className="input -mt-28  px-56">
            <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white rounded-md bg-[rgba(64,65,79,var(--tw-bg-opacity))]">
            <textarea
              tabIndex="0"
              data-id="root"
              rows="1"
              className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent outline-none overflow-y-hidden h-[23px] text-white"
            ></textarea>
            <button className="absolute p-1 rounded-md text-gray-400 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-black">
              <FiSend />
            </button>
          </div>
          
          <div className="px-3 pt-2 pb-3 text-center text-xs text-gray-100/50 md:px-4 md:pt-3 md:pb-6">
          <a href="" target="_blank" className="underline">
          ChatGPT Clone
        </a>
        &nbsp;Created by Yassine benmansour 
      </div>

          </div>

      </div>

    )
}

export default  Footer