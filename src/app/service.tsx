import React from 'react'
import { FaCode } from 'react-icons/fa'

const Service = () => {
  return (
    <div id='service' className='flex flex-col gap-5 justify-center items-center w-dvw mt-20'>
        <span className='text-[#9a99ff]'>{'{/}'}</span>
        <span className='text-7xl text-white'>{'<service>'}</span>
        <div className="content w-9/12 flex gap-5">
            <div className="bg-neutral-600 flex items-center justify-center h-96 w-3/12 rounded-full">
                <div className="bounder flex items-center justify-center rounded-full bg-neutral-500">
                <FaCode className='text-white text-5xl m-10'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service