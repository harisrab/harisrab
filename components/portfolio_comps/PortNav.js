import React from 'react'
import Link from 'next/link'

function PortNav() {
  return (
                <div className="flex items-center justify-between flex-col md:flex-row px-14 w-screen h-[40%] py-10 md:py-0 md:h-[8%] z-[1000] bg-[#000000a7] border-t-[#ffffff38] border-b-[#ffffff38] border-t-[1px] border-b-[1px] border-opacity-10 backdrop-blur-sm b-0">
                <div className='w-full flex items-center justify-center h-full  border-r-[#ffffff38] md:border-r-[1px] md:border-opacity-10'>
                  <h1 className="text-white font-sans uppercase text-[12px] tracking-[5px] hover:opacity-60 duration-300 hover:cursor-pointer">Haris Rashid</h1>
                </div> 
                  <div className="w-full h-full md:pl-10">
                    <ul className='text-white font-sans text-[12px] tracking-[5px] uppercase h-full w-full flex items-center justify-between flex-col md:flex-row  hover:cursor-pointer'>
                    
                    <Link href="/" passHref>
                      <li className='hover:opacity-60 duration-300'>Work</li>
                    </Link>
                    <Link href="/" passHref>
                      <li className='hover:opacity-60 duration-300'>Writings</li>
                    </Link>
                    <Link href="/" passHref>
                      <li className='hover:opacity-60 duration-300'>About</li>
                    </Link>
                    <a href='https://github.com/harisrab'>
                      <li className="hover:opacity-60 duration-300">Github</li>
                    </a>
                 </ul>
                  </div>
                </div>

  )
}

export default PortNav