import React, {useState, useEffect} from 'react'
import Image from 'next/image'

function ProjectThumb({type, bg, title, desc, stack, deployment, github}) {
  const [stackItems, setStackItems] = useState([]);

  useEffect(() => {
    // Convert an array to string
    const items = stack.join(', ');
    setStackItems(items);
  }, [stack])
  return (
        <div className='relative h-[400px] w-full md:w-[600px] bg-yellow-400 text-white flex flex-col  md:relative'>
            <Image priority layout="fill" src={bg} className='h-[50%] md:h-full w-full md:absolute t-0 l-0 object-fill md:object-cover'/>
            <div className='uppercase font-sans text-[12px] tracking-[3px] flex flex-col justify-between p-8 h-full w-full md:absolute md:t-0 md:l-0 bg-black opacity-0 hover:opacity-80 duration-300'>
              <div>
                  <p className=''>{type}</p>
                  <h1 className='text-[20px] tracking-[5px] font-bold my-4'>{title}</h1>
                  <p className='normal-case tracking-[0.5px] text-[14px] mb-4'>{desc}</p>
                  <p className='capitalize tracking-[2px] mb-4'><span className='font-bold'>Stack: </span>{stackItems}</p>
              </div>  
              <div>
              {deployment && (
                  <p className='normal-case mb-4 tracking-[2px]'>Deployment: <a target="_blank" href={deployment} className="underline text-gray-400 hover:text-gray-500 duration-200">{deployment}</a></p>
              )}
              {github && (
                  <p className='normal-case tracking-[2px]'>Github: <a target="_blank" href={github} className="underline text-gray-400 hover:text-gray-500 duration-200">{github}</a></p>
              )}
              </div>
            </div>

            </div>

  )
}

export default ProjectThumb