import React from 'react'
import { TbBrandTailwind, TbBrandNextjs, TbApi  } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer fixed bottom-0 z-100 w-full h-[60px] flex justify-center">
        <div className="madeusing flex items-center">
            <div className="about text-white">Made using</div> 
            <div className="logos flex ml-2">
                <TbBrandNextjs className="text-slate-200 ml-2 font_main"/>
                <TbBrandTailwind className="text-blue-500 ml-2 font_main"/>
                <TbApi className="text-red-500 ml-2 font_main"/>
            </div>
            <div className="ps ml-2 text-white">💖 Priyansh Sharma - </div>

            <div className="code_link flex items-center ml-2">
                <a href="https://github.com/Priyanshsharma21/YT-Transcript" target="_blank" className="text-white text-link">
                    Project Code
                </a>
                <AiFillGithub className="ml-2 font_main text-white"/>
            </div>
        </div>
    </div>
  )
}

export default Footer