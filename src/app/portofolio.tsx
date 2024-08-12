import React from 'react'
import Image1 from '@/../public/ice.png'
import Image2 from '@/../public/ima.png'
import Image3 from '@/../public/fif.png'
import Image4 from '@/../public/loyalty.png'
import Image5 from '@/../public/pilkada.png'
import Image from 'next/image'

const Portofolio = () => {
    return (
        <div id='portofolio' className='flex flex-col justify-center items-center mt-40'>
            <span className='text-[#9a99ff]'>{'{/}'}</span>
            <span className='text-7xl text-white'>{'<portofolio>'}</span>
            <div className="project mt-20 flex flex-col gap-20">
                <div className="flex gap-4 w-full justify-around  text-2xl">
                    <div className="image-1 w-[40%] flex flex-col gap-3 ">
                        <Image src={Image1} alt="Picture of the author" className='rounded-xl w-full h-full object-cover opacity-15 transition-opacity duration-300 hover:opacity-100' />
                        <span className='font-bold text-white' >{'{ _ice }'}</span>
                    </div>
                    <div className="image-2 w-[40%] flex flex-col gap-3">
                        <Image src={Image2} alt="Picture of the author" className='rounded-xl w-full h-full object-cover opacity-15 transition-opacity duration-300 hover:opacity-100' />
                        <span className='font-bold text-white' >{'{ _intelegent_media_analytic }'}</span>
                    </div>
                </div>
                <div className="flex gap-4 w-full justify-around  text-2xl">
                    <div className="image-1 w-[40%] flex flex-col gap-3">
                        <Image src={Image3} alt="Picture of the author" className='rounded-xl w-full h-full object-cover opacity-15 transition-opacity duration-300 hover:opacity-100' />
                        <span className='font-bold text-white' >{'{ _fif_complaint_system }'}</span>
                    </div>
                    <div className="image-2 w-[40%] flex flex-col gap-3">
                        <Image src={Image4} alt="Picture of the author" className='rounded-xl w-full h-full object-cover opacity-15 transition-opacity duration-300 hover:opacity-100' />
                        <span className='font-bold text-white' >{'{ _loyalty_management }'}</span>
                    </div>
                </div>
                <div className="flex gap-4 w-full justify-around  text-2xl">
                    <div className="image-1 w-[40%] flex flex-col gap-3">
                        <Image src={Image5} alt="Picture of the author" className='rounded-xl w-full h-full object-cover opacity-15 transition-opacity duration-300 hover:opacity-100' />
                        <span className='font-bold text-white' >{'{ _pilkada_analytic }'}</span>
                    </div>
                    <div className="image-2 w-[40%] flex flex-col gap-3 justify-center items-center">
                        <span className='text-white'>{'etc..'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio