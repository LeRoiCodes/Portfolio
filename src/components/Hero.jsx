// import React from 'react'
import {HERO_CONTENT} from "../constants";
import profile from "../assets/me.jpg"
import { motion } from "framer-motion";
import Button from "./Button";


const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-6xl"> Brandon Armand Nyamkimbi</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.span variants={container(1)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Penetration Tester</motion.span>
                    <motion.span variants={container(1.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Virtual Assistant</motion.span>
                    <motion.p variants={container(2)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter ">
                        {HERO_CONTENT}
                    </motion.p>
                    <motion.div variants={container(2.5)} initial="hidden" animate="visible" className="flex flex-col gap-3 items-center lg:items-start">
                        <p className="my-2 max-w-xl font-light"> Download my curriculum vitae:</p>
                        <div className="flex gap-5 items-center">
                            <Button text={"VIEW RESUME"} link={"https://drive.google.com/file/d/110Qs_OJMTgCyNswy8tvDcqH3MGOJc8j3/view?usp=sharing"} target={"_blank"} />
                            <Button text={"CONTACT ME"} link={"#contact"} target={""} />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className=" flex justify-center">
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 2.5, delay: 1.2}} className=" rounded-xl" src={profile} alt="Brandon Armand" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero