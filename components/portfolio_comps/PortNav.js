import React from 'react'

function PortNav() {
  return (
                <div className="flex items-center justify-between px-14 w-screen h-[8%] z-[1000] bg-[#000000a7] border-t-[#ffffff38] border-b-[#ffffff38] border-t-[1px] border-b-[1px] border-opacity-10 backdrop-blur-sm b-0">
                <div className='w-full flex items-center justify-start h-full border-r-[#ffffff38] border-r-[1px] border-opacity-10'>
                <h1 className="text-white font-sans uppercase text-[12px] tracking-[5px] hover:opacity-60 duration-300 hover:cursor-pointer">Haris Rashid</h1>
                </div> 
                  <div className="w-full h-full pl-10">
                    <ul className='text-white font-sans text-[12px] tracking-[5px] uppercase h-full w-full flex items-center justify-between hover:cursor-pointer'>
                    <li className='hover:opacity-60 duration-300'>Work</li>
                    <li className='hover:opacity-60 duration-300'>About</li>
                    <li className="hover:opacity-60 duration-300">Github</li>
                 </ul>
                  </div>
                </div>

  )
}

export default PortNav