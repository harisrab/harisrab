import React from 'react'
import Image from 'next/image'

function ProjectThumb({bg}) {
  return (
        <div className='relative h-[400px] w-full bg-yellow-400'>
            <Image priority layout="fill" src={bg} className='h-full w-full absolute t-0 l-0 object-cover'/>
            <div className='h-full w-full absolute t-0 l-0 bg-black opacity-20 hover:cursor-pointer hover:opacity-80 duration-300'></div>

            </div>

  )
}

export default ProjectThumb