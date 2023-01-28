import React from 'react'
import {BsBrightnessHigh} from "react-icons/bs"; 
import { CiWarning } from "react-icons/ci";
import { FiZap } from "react-icons/fi"
import Footer from '../footer/Footer';

export default function Rightsection() {
  return (
    <div className="flex h-full flex-1  flex-col bg-lightblack">
          <div className="flex flex-col items-center text-sm h-full md:h-screen bg-lightBlack">
              <div className="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6">
                <h1 className="text-4xl text-gray-100 font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16">
                ChatGPT
               </h1>
              <div className="md:flex items-start text-center gap-3.5">
                {[
                  {
                    icon: <BsBrightnessHigh/>,
                    title: "Examples",
                    subTitle: [
                      `"Explain quantum computing in simple terms" →`,
                      `"Got any creative ideas for a 10 year old’s birthday?" →`,
                      `"How do I make an HTTP request in Javascript?" →`,
                    ],
                    hover: true,
                  },
                  {
                    icon: <FiZap/>,
                    title: "Capabilities",
                    subTitle: [
                      `Remembers what user said earlier in the conversation`,
                      `Allows user to provide follow-up corrections`,
                      `Trained to decline inappropriate requests`,
                    ],
                    hover: false,
                  },
                  {
                    icon: <CiWarning/>,
                    title: "Limitations",
                    subTitle: [
                      `May occasionally generate incorrect information`,
                      `May occasionally produce harmful instructions or biased content`,
                      `Limited knowledge of world and events after 2021`,
                    ],
                    hover: false,
                  },
                ].map((item, index) => (
                  <div
                    className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"
                    key={index}
                  >
                    <h2 className="flex gap-3 text-gray-100 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
                      {item.icon}
                      {item.title}
                    </h2>
                    <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
                      {item.subTitle.map((subTitle, subTitleIndex) => (
                        <button
                          className={`w-full bg-gray-50 text-gray-100 bg-white/5 p-3 rounded-md ${
                            item.hover
                              ? "hover:bg-black dark:hover:bg-gray-900 cursor-pointer"
                              : "cursor-text"
                          }`}
                          key={subTitleIndex}
                        >
                          {subTitle}
                        </button>
                      ))}
                    </ul>
                    
                  </div>
                  
                ))}
                
              </div>
            </div>
          </div>

          <Footer />

          
        </div>
        
        
  )
}
