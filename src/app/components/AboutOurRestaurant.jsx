"use client";
import React from "react";
import Image from "next/image";
import AboutImg2 from "../../../public/about2.png";
import { GiMeal } from "react-icons/gi";

const AboutOurRestaurant = () => {
    return (
        <section className="min-h-screen px-6 md:px-20 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-light">

            <div className="flex-1 relative w-full h-[400px] md:h-[550px]">
                <Image
                    src={AboutImg2}
                    alt="About Us"
                    fill
                    className=" rounded-2xl shadow-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Text Content on Right - Better spacing and button */}
            <div className="flex-1 max-w-xl space-y-6 md:space-y-8">
                <p className="text-sm uppercase tracking-widest text-[#FB5704] flex items-center gap-2">
                    <GiMeal className="text-lg" />
                    Discover Your Taste
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-[#212025] leading-tight">
                    We Provide Good Food For Your Family!
                </h1>

                <div className="space-y-4">
                    <p className="text-lg text-gray-700">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                    </p>

                    <p className="text-gray-600">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable.
                    </p>
                </div>

                {/* Button with icon */}
                <button className="bg-[#FB5704] hover:bg-[#E04B00] text-white font-medium px-8 py-3 rounded-md flex items-center gap-2 transition-colors duration-300 mt-4">
                    <GiMeal />
                    Explore Our Menu
                </button>
            </div>

        </section>
    );
};

export default AboutOurRestaurant;