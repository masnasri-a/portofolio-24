import React from 'react'
import { IoLogoLinkedin, IoLogoMedium, IoLogoWhatsapp, IoMailSharp } from 'react-icons/io5'

const Contact = () => {
    return (
        <div id="contact">
            <div className="flex flex-col w-dvw justify-center items-center">
                <span className="text-[#9a99ff]">{"{/}"}</span>
                <span className="text-7xl text-white">{"<_contact_me>"}</span>
            </div>
            <div className="flex justify-around">
                <div className="bg-neutral-500 md:m-12 m-6 rounded p-4 md:p-8">
                    <a href="https://www.linkedin.com/in/nasri-adzlani-477620165/">
                        <IoLogoLinkedin size={35} />
                    </a>
                </div>
                <div className="bg-neutral-500 md:m-12 m-6 rounded p-4 md:p-8">
                    <a href="https://medium.com/@nasriadzlani">
                        <IoLogoMedium size={35} />
                    </a>
                </div>
                <div className="bg-neutral-500 md:m-12 m-6 rounded p-4 md:p-8">
                    <a href="mailto: nasriadzlani@live.com">
                        <IoMailSharp size={35} />
                    </a>
                </div>
                <div className="bg-neutral-500 md:m-12 m-6 rounded p-4 md:p-8">
                    <a href="https://wa.me/+6282228893284">
                        <IoLogoWhatsapp size={35} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact