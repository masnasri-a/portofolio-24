import React from 'react'
import { FaCode } from 'react-icons/fa'

const Experience = () => {
  return (
    <div id='experience' className='flex md:flex-row flex-col gap-5 justify-center items-center w-dvw mt-20 '>
      <div className="left md:w-6/12 w-full flex flex-col m-10">
        <div className="flex flex-col items-center">
          <span className="text-[#9a99ff]">{"{/}"}</span>
          <span className="text-7xl text-white">{"<_experience>"}</span>
        </div>
        <div className="bg-gray-300 flex md:m-24 md:p-16 rounded-lg">
          <div className="w-6/12 flex flex-col justify-center items-center">
            <span className='font-bold text-gray-950 text-9xl'>20+</span>
            <span className='text-xl'>Projects</span>
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center">
            <span className='font-bold text-gray-950 text-9xl'>4</span>
            <span className='text-xl'>Years of experience</span>
          </div>
        </div>
      </div>
      <div className="left md:w-6/12 w-full flex flex-col md:p-12 gap-5">
      <div className="text-white flex flex-col bg-neutral-800 p-12">
          <span className='font-bold text-2xl'>Lead of Research And Development</span>
          <span className='font-extrabold text-4xl'>Salt ID</span>
          <div className="h-0.5 bg-neutral-300 w-full mt-3 mb-3"></div>
          <div className="flex justify-between">
            <span>2023 - Present</span>
            <span>Bandung, Indonesia</span>
          </div>
        </div>
        <div className="text-white flex flex-col bg-neutral-800 p-12">
          <span className='font-bold text-2xl'>Software Engineer</span>
          <span className='font-extrabold text-4xl'>IDN Media <span className='text-lg'>(Part time)</span></span>
          <div className="h-0.5 bg-neutral-300 w-full mt-3 mb-3"></div>
          <div className="flex justify-between">
            <span>2022 - 2024</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        <div className="text-white flex flex-col bg-neutral-800 p-12">
          <span className='font-bold text-2xl'>Data Engineer</span>
          <span className='font-extrabold text-4xl'>eBdesk Technology</span>
          <div className="h-0.5 bg-neutral-300 w-full mt-3 mb-3"></div>
          <div className="flex justify-between">
            <span>2020 - 2023</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience