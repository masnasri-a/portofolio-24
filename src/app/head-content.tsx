"use client";
import React, { useEffect, useRef } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa';
import Typed from 'typed.js';

const HeadContent = () => {
    const el = useRef(null);
    useEffect(() => {
        var typed = new Typed(el.current, {
            strings: ['_data_engineer','_backend_developer', '_fullstack_developer', '_blockchain_developer', '_researcher'],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 4000,
            startDelay: 1000,
            smartBackspace: true,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-between w-full h-dvh pb-40">
            <div className=""></div>
            <div className="content">
            <h1 className="text-lg md:text-xl font-bold text-center text-white">// HI, I&apos;M NASRI, A ...</h1>
            <div className="text-2xl md:text-9xl">
                <span className=' text-white'>{'{" '} </span>
                <span className='text-amber-400 font-bold' ref={el} />
                <span className='text-white'>{' "}'} </span>
            </div>
            </div>
            <a href='#about' className="cursor-pointer text-white">
                <FaAngleDoubleDown />
            </a>
        </div>
    )
}

export default HeadContent