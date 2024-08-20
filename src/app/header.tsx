"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaAlignRight } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white dark:text-white">
            \\ Nas
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaAlignRight />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-2xl flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sky-400 "
                aria-current="page"
              >
                _home
              </a>
            </li>
            <li>
              <motion.a
                href="#about"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="block py-2 px-3 text-amber-400"
              >
                _about
              </motion.a>
            </li><li>
              <motion.a
                href="#portofolio"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="block py-2 px-3 text-amber-400"
              >
                _portofolio
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="block py-2 px-3 text-amber-400"
              >
                _experience
              </motion.a>
            </li>
            <li>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="block py-2 px-3 text-amber-400"
              >
                _contact
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
