import React from 'react';
import { FaPenNib, FaCode } from 'react-icons/fa';
import aboutus from '../../assets/AboutUs.png';

const AboutUs = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Websites that tell your brand's story
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption.
                    </p>
                </div>

                {/* Content Row */}
                <div className="grid md:grid-cols-2 gap-14 items-center">
                    {/* Image Section */}
                    <div className="relative rounded-3xl overflow-hidden">
                        <img
                            src={aboutus}
                            alt="About Us"
                            className="w-full h-auto "
                            loading="lazy"
                        />
                        {/* Badge */}
                        <div className="absolute bottom-6 left-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-7 py-3 rounded-2xl shadow-lg text-[22px] font-bold">
                            24+ <span className="text-base font-medium ml-1">Startups created</span>
                        </div>
                    </div>

                    {/* Text & Features */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                            We’re design-focused across every touchpoint or interaction
                        </h3>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.
                        </p>

                        {/* Features List */}
                        <div className="space-y-10">
                            <div className="flex items-start space-x-5">
                                <div className="bg-purple-100 text-purple-600 p-4 rounded-xl text-2xl">
                                    <FaPenNib />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">UI/UX Design</h4>
                                    <p className="text-gray-600 text-[17px]">
                                        We design digital products used by millions of people.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="bg-indigo-100 text-indigo-600 p-4 rounded-xl text-2xl">
                                    <FaCode />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Development</h4>
                                    <p className="text-gray-600 text-[17px]">
                                        We develop digital products used by millions of people.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
