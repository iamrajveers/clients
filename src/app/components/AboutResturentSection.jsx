import React from 'react';
import Image from "next/image";
import ResturentImg from "../../../public/section_bg03.png";

const AboutResturentSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 min-h-[500px]">
      {/* Background Image - Properly implemented */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={ResturentImg}
          alt="Restaurant background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
    
      </div>

      <div className="max-w-7xl mx-auto relative z-10 h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Empty space on left - for background to show through */}
          <div className="hidden lg:block lg:w-1/2"></div>




          {/* Content Side - Right aligned */}
          <div className="lg:w-1/2  p-8 md:p-10 rounded-xl ">
            <p className="text-sm uppercase tracking-widest text-[#FB5704] mb-3 font-medium">
              About Our Restaurant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212025] leading-tight mb-6">
              We Provide Good Food For Your Family!
            </h2>
            <p className="text-gray-700 mb-8">
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#212025] mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-5">
                Subscribe to our newsletter for updates and special offers
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FB5704] focus:border-transparent"
                  required
                />
                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-gradient-to-r from-[#FB5704] to-[#FF8C42] text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutResturentSection;