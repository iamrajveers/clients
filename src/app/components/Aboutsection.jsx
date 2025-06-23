"use client";
import React from "react";
import Image from "next/image";
import AboutImg from "../../../public/about.png";
import { GiMeal, GiForkKnifeSpoon, GiHotMeal, GiMeat } from "react-icons/gi";
import { motion } from "framer-motion";

const Aboutsection = () => {
  const features = [
    { icon: <GiMeal />, text: "Fresh ingredients daily" },
    { icon: <GiForkKnifeSpoon />, text: "Expert chef prepared meals" },
    { icon: <GiHotMeal />, text: "Family-friendly portions" },
    { icon: <GiMeat />, text: "Premium quality meats" },
  ];

  // Animation variants defined directly in component
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10 bg-light relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#FB5704]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#FB5704]/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        className="flex-1 max-w-xl space-y-6 relative z-10"
      >
        <motion.p 
          variants={itemVariants}
          className="text-sm uppercase tracking-widest text-[#FB5704] font-medium"
        >
          Discover Your Taste
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-[#212025] leading-tight"
        >
          We Craft <span className="text-[#FB5704]">Delicious Memories</span> For Your Family!
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-700 leading-relaxed"
        >
          At our restaurant, we don't just serve food - we create experiences. 
          Every dish is prepared with love using the freshest locally-sourced ingredients 
          to bring authentic flavors to your table.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              <span className="text-4xl text-[#FB5704] mt-1">
                {feature.icon}
              </span>
              <p className="text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 relative z-10"
      >
        <div className="relative">
          <Image
            src={AboutImg}
            alt="About Us"
            width={600}
            height={800}
            className="rounded-2xl shadow-2xl object-cover w-full h-full max-h-[600px]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-[#FB5704]">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Aboutsection;