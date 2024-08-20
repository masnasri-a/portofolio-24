"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center"
    >
      <span className="text-[#9a99ff]">{"{/}"}</span>
      <span className="text-7xl text-white">{"<about_me>"}</span>
      <div className="detail md:w-[50%] w-[90%] mt-20">
        <span className="text-amber-500 text-xl">
          ...im as backend engineer focused on crafting robust and scalable
          systems. With expertise in Python, Java, Node.js, and Solidity, I
          excel in building efficient data pipelines and blockchain
          applications. My passion lies in transforming complex data into
          actionable insights. I thrive on solving intricate challenges and
          delivering innovative solutions.
        </span>
      </div>
      <div className="line h-0.5 bg-neutral-500 w-full mt-20 mb-2"></div>
      <div className="flex h-full flex-col md:mt-20 md:mb-20 md:flex-row justify-between items-center md:ml-20 md:mr-20">
        <span className="text-lg md:text-3xl text-white md:w-[40%] w-[90%]">
          ...I have over 4 years of experience in web development, with a strong
          background in both data and back-end technologies;
        </span>
        <span className="text-[#9a99ff]">{"</>"}</span>
        <span className="text-lg md:text-2xl  text-white md:w-[40%] w-[90%]">
          ...I m Nasri Adzlani, a passionate backend, blockchain, and data
          engineer with a thirst for knowledge and a drive to build innovative
          solutions. Fueled by my enthusiasm for web programming, data, and
          blockchain technology, I thrive in environments that challenge me to
          learn and grow. Currently, as the Research and Development Lead and
          Backend Engineer at PT Ako Media Asia, I spearhead R&D efforts, manage
          projects from conception to completion, and guide my team in exploring
          cutting-edge technologies that drive product innovation;
        </span>
      </div>
    </motion.div>
  );
};

export default About;
