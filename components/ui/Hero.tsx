"use client";

import React from 'react'
import { Spotlight } from './Spotlight'
import Magicbutton from './Magicbutton'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
    // Animation settings: starts 20px below and invisible, then slides up and fades in
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="bg-black-100 relative flex min-h-screen w-full overflow-hidden flex-col items-center justify-center">
            {/* Background Effects */}
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20" fill="#CBACF9" />
            <Spotlight className="-top-40 left-1/2 md:-top-20 md:left-60" fill="#E4ECFF" />
            <Spotlight className="top-10 left-full md:top-28 md:left-96" fill="white" />

            <motion.div
                initial="initial"
                animate="animate"
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
            >
                {/* 1. Label Animation */}
                <motion.p
                    variants={fadeInUp}
                    className="text-sm font-medium tracking-widest text-[#00f2ff] uppercase mb-2"
                >
                    Portfolio
                </motion.p>

                {/* 2. Main Heading Animation - Keeps "Moaz" */}
                <motion.h1
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                >
                    Hi, I&apos;m <span className="text-[#00f2ff]">Moaz</span> <br /> Full Stack Developer
                </motion.h1>

                {/* 3. Paragraph Animation */}
                <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="mt-4 text-white-100 text-base md:text-lg max-w-xl"
                >
                    Building seamless user experiences
                </motion.p>

                {/* 4. Button Animation */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ delay: 0.6 }}
                >
                    <a className="relative z-10 mt-8 block" href='#about'>
                        <Magicbutton title='see my work' icon={<FaLocationArrow />} />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero