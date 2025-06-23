import React from 'react'
import { GiChefToque, GiMeal } from "react-icons/gi";
import { MdOutlineLocalDining } from "react-icons/md";

const Ourservicessection = () => {
    return (


        <>

            <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white text-center">
               
                <div className="mb-20 max-w-2xl mx-auto relative">
                    <p className="text-sm uppercase tracking-widest text-[#FB5704] mb-3 font-medium">Services We Offer</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#212025] leading-tight mb-6">
                        Our Best Services
                    </h2>

                </div>

           
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 text-center overflow-hidden transition-all duration-500 h-full hover:-translate-y-2">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-[#FB5704]/5 group-hover:to-[#212025]/5 transition-all duration-500"></div>

                        {/* Floating icon with pulse animation on hover */}
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="p-5 rounded-full bg-white shadow-md group-hover:shadow-lg text-[#FB5704] text-5xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                                    <GiChefToque />
                                </div>
                            </div>

                            {/* Text with better typography */}
                            <h3 className="text-2xl font-bold text-[#212025] mb-4 group-hover:text-[#FB5704] transition-colors duration-300 relative inline-block">
                                Best Chef
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FB5704] group-hover:w-full transition-all duration-500"></span>
                            </h3>

                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>



                        </div>

                        {/* Enhanced bottom accent bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FB5704] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Card 2 (same structure as Card 1) */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 text-center overflow-hidden transition-all duration-500 h-full hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-[#FB5704]/5 group-hover:to-[#212025]/5 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="p-5 rounded-full bg-white shadow-md group-hover:shadow-lg text-[#FB5704] text-5xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                                    <MdOutlineLocalDining />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#212025] mb-4 group-hover:text-[#FB5704] transition-colors duration-300 relative inline-block">
                                Quality Food
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FB5704] group-hover:w-full transition-all duration-500"></span>
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>



                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FB5704] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Card 3 (same structure as Card 1) */}
                    <div className="group relative bg-white shadow-lg hover:shadow-2xl rounded-xl p-8 text-center overflow-hidden transition-all duration-500 h-full hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-[#FB5704]/5 group-hover:to-[#212025]/5 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex justify-center mb-6">
                                <div className="p-5 rounded-full bg-white shadow-md group-hover:shadow-lg text-[#FB5704] text-5xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                                    <GiMeal />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#212025] mb-4 group-hover:text-[#FB5704] transition-colors duration-300 relative inline-block">
                                Perfect Cook
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FB5704] group-hover:w-full transition-all duration-500"></span>
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </p>



                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#FB5704] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                </div>
            </section>



         


        </>
    )
}

export default Ourservicessection