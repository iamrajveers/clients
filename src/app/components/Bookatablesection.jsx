"use client";
import React, { useState } from "react";
import Image from "next/image";
import AboutImg from "../../../public/section_bg04.png";

const Bookatablesection = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${formatDate(formData.date)} at ${formatTime(formData.time)} for ${formData.people}`);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes} ${period}`;
  };

  return (
    <section className="relative py-20 px-6 md:px-20 min-h-[600px] flex items-center">
    
      <div className="absolute inset-0">
        <Image
          src={AboutImg}
          alt="Restaurant background"
          fill
          className="object-cover"
          quality={100}
          priority
        />

      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">

          <p className="text-[14px] uppercase tracking-widest text-[#FB5704] mb-2">
            About Our Restaurant
          </p>

          <h1 className="text-4xl md:text-5xl font-heading text-[#212025] font-bold mb-4 leading-tight tracking-wide">
            Book A Table
          </h1>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Date Picker */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">

                </div>
              </div>
            </div>

            {/* Time Picker */}

            <div className="space-y-2">
              <label htmlFor="time" className="block text-gray-700 font-medium">Time</label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  required
                  min="11:00"
                  max="22:00"
                  step="1800" // 30 minute intervals
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">

                </div>
              </div>
            </div>



            {/* Number of People */}
            <div className="space-y-2">
              <label htmlFor="people" className="block text-gray-700 font-medium">Persons</label>
              <select
                id="people"
                name="people"
                value={formData.people}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                required
              >
                <option value="">How many?</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="6+">More than 6</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Bookatablesection;