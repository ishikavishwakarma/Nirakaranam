import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Slider from "./Slider";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
const Newcomp = () => {
  const parent = {
    initial:{},
    animate:{},
    exit:{},
  };
  const circle = {
    initial: { opacity:0, scale: 0 },
    animate: {opacity:1, scale: 1},
    exit: { opacity:0, scale: 0 }
  };
  return (
    <div className="w-full h-[80vh] md:h-[90vh] py-10 px-10 overflow-hidden">
      <motion.div variants={parent}   initial="initial"
        animate="animate"
        exit="exit"
        transition={{staggerChildren:0.9,easings:"0.76, 0, 0.24, 1"}} className="div flex justify-between px-20">

  <motion.div variants={circle} className="box flex flex-col ite gap-3 h-72 border-2  p-5 border-zinc-600 rounded-xl w-96 bg-[#e4e3e3]">
<div className="div">
  <img src="../../images/s-1.svg" alt="" />
</div>
    <h1>Team
Augmentation</h1>
<p>Enabling your team to reach project goals.</p>
  </motion.div>
  <motion.div variants={circle} className="box h-80 border-2 border-zinc-600 rounded w-96 bg-red-300"></motion.div>
  <motion.div variants={circle} className="box h-80 border-2 border-zinc-600 rounded w-96 bg-red-300"></motion.div>
      </motion.div>
    </div>
  )
}

export default Newcomp