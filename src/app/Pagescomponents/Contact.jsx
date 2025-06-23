'use client';
import React from 'react';
import Banner from '../ShareComponents/Banner';
import AboutImg from "../../../public/hero2.png";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="overflow-hidden">
    
      <Banner  imageSrc={AboutImg}  title="Get In Touch"  />
      
   
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#212025] mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you have questions about our menu, want to book an event, or just want to say hello, we're here for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#F8F8F8] p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#FB5704] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Location</h3>
              <p className="text-gray-600">123 Gourmet Street<br />Foodville, FC 12345</p>
            </motion.div>

            {/* Contact Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#F8F8F8] p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#FB5704] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone & Email</h3>
              <p className="text-gray-600">
                <a href="tel:+1234567890" className="hover:text-[#FB5704] transition">(123) 456-7890</a><br />
                <a href="mailto:info@restaurant.com" className="hover:text-[#FB5704] transition">info@restaurant.com</a>
              </p>
            </motion.div>

            {/* Contact Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#F8F8F8] p-8 rounded-lg shadow-md text-center"
            >
              <div className="bg-[#FB5704] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 11AM - 10PM<br />
                Saturday - Sunday: 10AM - 11PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}


      


     <section className="py-24 px-6 md:px-20 bg-[#F8F8F8]">
  <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
    {/* Left Panel */}
    <div className="md:w-1/2 bg-[#FB5704] text-white p-10 flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-4">Send Us a Message</h3>
      <p className="text-white/90 mb-8">
        Have questions about our menu or want to make a special reservation?
        Fill out the form and we'll get back to you as soon as possible.
      </p>
      <div className="space-y-4 text-sm">
        <div className="flex items-center">
          <FaEnvelope className="mr-3 text-lg" />
          <span>contact@restaurant.com</span>
        </div>
        <div className="flex items-center">
          <FaPhone className="mr-3 text-lg" />
          <span>(123) 456-7890</span>
        </div>
      </div>
    </div>

    {/* Right Panel - Form */}
    <div className="md:w-1/2 p-10">
      <form className="space-y-6">
        <div className="relative">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB5704] focus:border-transparent transition-shadow"
            placeholder="John Doe"
          />
        </div>
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB5704] focus:border-transparent transition-shadow"
            placeholder="your@email.com"
          />
        </div>
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB5704] focus:border-transparent transition-shadow"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="relative">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FB5704] focus:border-transparent transition-shadow"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#FB5704] text-white py-3 px-6 rounded-lg hover:bg-[#e24d00] transition-all font-semibold shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


  
      {/* Map Section */}
      <section className="h-122 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132773!2d-73.98811768459382!3d40.74844097932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Restaurant Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;