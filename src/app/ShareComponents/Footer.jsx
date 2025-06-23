import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import logo from "../../../public/logo.png"
import Footerbg from '../../../public/section_bg02.png';
import instagram1 from '../../../public/instagram1.png';
import instagram2 from '../../../public/instagram2.png';
import instagram3 from '../../../public/instagram3.png';
import instagram4 from '../../../public/instagram4.png';
import instagram5 from '../../../public/instagram5.png';
import instagram6 from '../../../public/instagram6.png';

const Footer = () => {
    return (
        <footer className="relative bg-[#212025] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20">

            {/* Background Image */}
        
            <div className="opacity-0.4">

                <Image
                    src={Footerbg}
                    alt="Restaurant background"
                    fill
                    className="object-cover"
                />

            </div>

            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* About Section with Logo */}
                    <div>
                        <div className="flex items-center mb-6">
                            <Image
                                src={logo}
                                alt="Restaurant Logo"
                                width={60}
                                height={60}
                                className="mr-2"
                            />
                            <h3 className="text-2xl font-bold text-[#FB5704]">Our Restaurant</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                            We are passionate about bringing you the finest culinary experiences with fresh,
                            locally-sourced
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-[#FB5704] transition-colors"><FaFacebook className="text-2xl" /></a>
                            <a href="#" className="text-gray-300 hover:text-[#FB5704] transition-colors"><FaInstagram className="text-2xl" /></a>
                            <a href="#" className="text-gray-300 hover:text-[#FB5704] transition-colors"><FaTwitter className="text-2xl" /></a>
                            <a href="#" className="text-gray-300 hover:text-[#FB5704] transition-colors"><FaWhatsapp className="text-2xl" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#FB5704]">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About Us', 'Blog', 'Gallery', 'Contact'].map((item, i) => (
                                <li key={i}>
                                    <a href="#" className="text-gray-300 hover:text-[#FB5704] transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#FB5704]">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-[#FB5704] mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-300">123 Gourmet Street, Foodville, FC 12345</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-[#FB5704] mr-3" />
                                <span className="text-gray-300">(123) 456-7890</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-[#FB5704] mr-3" />
                                <span className="text-gray-300">info@restaurant.com</span>
                            </li>
                            <li className="flex items-center">
                                <FaClock className="text-[#FB5704] mr-3" />
                                <span className="text-gray-300">Open Daily: 11AM - 10PM</span>
                            </li>
                        </ul>

                    </div>

                    {/* Instagram Feed  */}

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-[#FB5704]">Instagram Feed</h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {[instagram1, instagram2, instagram3, instagram4, instagram5, instagram6].map((img, i) => (
                                <div key={i} className="overflow-hidden rounded-md">
                                    <Image
                                        src={img}
                                        alt={`Instagram ${i + 1}`}
                                        className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>


                    {/* Newsletter */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 text-[#FB5704]">Newsletter</h3>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for exclusive offers, events, and culinary tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-grow px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB5704]"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-[#FB5704] to-[#FF8C42] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"> </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} All Food. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#FB5704] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#FB5704] transition-colors">Terms of Service</a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;