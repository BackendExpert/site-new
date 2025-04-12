import React from 'react';
import teamImg from '../../assets/teamwork.png';
import codeImg from '../../assets/development.png';
import designImg from '../../assets/uiux.png';

const AboutUsPage = () => {
    return (
        <div className="bg-white text-gray-800 -mt-4">
            {/* Gradient Header */}
            <div className="w-full h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About BlackAlphaLabs</h1>
                <p className="text-lg sm:text-xl max-w-3xl">
                    Empowering businesses with custom software, scalable systems, and stunning user experiences.
                </p>
            </div>

            {/* Main Content */}
            <section className="py-16 px-6 md:px-20">
                {/* Section 1: Who We Are */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We’re a passionate team of developers, designers, and visionaries delivering powerful web and mobile apps.
                        From scalable backend systems to stunning frontend experiences, we craft digital solutions that make a difference.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Driven by Passion, Backed by Expertise</h3>
                        <p className="text-gray-600 text-lg mb-4">
                            We specialize in MERN stack, PHP + MySQL, React UI/UX design, and DevOps solutions tailored to your business goals.
                            Whether you're a startup or enterprise, we build with performance, scalability, and creativity in mind.
                        </p>
                    </div>
                    <img src={teamImg} alt="Our Team" className="w-full md:w-1/2 rounded-xl shadow-lg" />
                </div>

                {/* Section 2: What We Do */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                        <ul className="text-gray-700 text-lg space-y-3 list-disc pl-4">
                            <li><strong>MERN Stack Development:</strong> Powerful APIs and sleek UIs using MongoDB, Express, React, and Node.js.</li>
                            <li><strong>PHP + MySQL:</strong> Reliable, flexible backend systems with traditional web technologies.</li>
                            <li><strong>React UI/UX:</strong> Creative, intuitive, and responsive interfaces built with love.</li>
                            <li><strong>DevOps + Cloud:</strong> Seamless CI/CD, secure deployment, and scalable infrastructure.</li>
                        </ul>
                    </div>
                    <img src={codeImg} alt="What We Do" className="w-full md:w-1/2 rounded-xl shadow-lg" />
                </div>

                {/* Section 3: Our Design Philosophy */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <img src={designImg} alt="Design Philosophy" className="w-full md:w-1/2 rounded-xl shadow-lg" />
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Our Design Philosophy</h3>
                        <p className="text-gray-600 text-lg mb-4">
                            We believe in functional beauty. From Figma to production, we ensure that every interaction is smooth, every layout responsive, and every detail polished. Design is more than looks — it's experience.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <a
                        href="#services"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition duration-300"
                    >
                        Discover Our Services
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
