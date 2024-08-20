"use client";
import Image from "next/image";
import HeadContent from "./head-content";
import About from "./about";
import Portofolio from "./portofolio";
import { motion, useScroll } from "framer-motion";
import Experience from "./experience";
import Contact from "./contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <main className="flex flex-col w-dvw justify-center items-center">
      <motion.div style={{ scaleX: scrollYProgress }} />
        <HeadContent />
        <About />
        <Portofolio />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
