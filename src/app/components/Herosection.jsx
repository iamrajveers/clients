"use client";
import React from "react";
import Image from "next/image";
import Heroimg from "../../../public/h1_hero.png";
import { motion } from "framer-motion";

const Herosection = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-start px-6 md:px-20 overflow-hidden">
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
            >
                <Image
                    src={Heroimg}
                    alt="Hero"
                    fill
                    priority
                    placeholder="blur"
                    className="object-cover w-full h-full z-0"
                />
                {/* Dark overlay for better text visibility */}



            </motion.div>

            {/* Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-20 text-white max-w-2xl text-left"
            >
                <motion.p
                    variants={item}
                    className="text-sm uppercase tracking-widest text-[#FB5704] mb-2 font-medium"
                >
                    Discover Your Taste
                </motion.p>

                <motion.h1
                    variants={item}
                    className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-[#212025]"
                >
                    We believe good food <br />
                    <span className="text-[#FB5704]">offers great smiles</span>
                </motion.h1>

                <motion.p
                    variants={item}
                    className="text-lg md:text-xl mb-8 text-[#212025]"
                >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat is aute irure.
                </motion.p>




                <motion.div variants={item}>
                    <button className="relative px-8 py-3 md:px-12 md:py-4 rounded-lg overflow-hidden group transition-all duration-300 border-2 border-transparent hover:border-[#FB5704]">

                        <span className="absolute inset-0 bg-[#FB5704] transition-all duration-300 transform origin-bottom group-hover:scale-y-0 group-hover:opacity-0"></span>

                        {/* Border layer - always visible in accent color */}
                        <span className="absolute inset-0 border-2 border-[#FB5704] rounded-lg transition-all duration-300 group-hover:border-white"></span>

                        {/* Content */}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span className="text-white group-hover:text-[#FB5704] font-medium transition-colors duration-300">
                                Reservation
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white group-hover:text-[#FB5704] transition-all duration-300 group-hover:translate-x-1"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </button>
                </motion.div>


            </motion.div>

            {/* Decorative elements */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="animate-bounce w-10 h-16 border-4 border-white rounded-full flex justify-center p-2">
                    <div className="w-3 h-3 rounded-full bg-white mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Herosection;