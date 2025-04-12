import React from 'react';
import aboutus from '../../assets/AboutUs.png'

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
            About Us
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <p className="text-lg sm:text-xl text-gray-700">
                We specialize in building modern, scalable, and high-performance web applications using the MERN stack. With a focus on delivering clean and user-centric React UI/UX designs, we bring your business to life in the digital world.
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                From dynamic web applications built on PHP + MySQL to sophisticated MERN stack solutions, we cater to businesses of all sizes. Whether you're launching your startup or enhancing an existing project, we offer the right technology stack for your needs.
              </p>
              <p className="text-lg sm:text-xl text-gray-700">
                We don’t just build applications; we build partnerships. Our commitment to your vision means we’re here for the long haul, supporting your growth and delivering tailored solutions that help you stay ahead of the competition.
              </p>
              <div className="mt-8">
                <a
                  href="#services"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-teal-600"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Right Section (Image or visual content) */}
            <div className="flex justify-center items-center">
              <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transform transition-all duration-300">
                <img
                  src={aboutus}  // Replace with your image
                  alt="About Us"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
