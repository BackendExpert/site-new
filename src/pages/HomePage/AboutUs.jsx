import React from 'react';
import { FaPenNib, FaCode } from 'react-icons/fa';
import aboutus from '../../assets/AboutUs.png';

const AboutUs = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Small scattered dots */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[2px] rounded-full bg-white/20 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold leading-tight mb-4
                        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                        Websites that tell your brand's story
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        We fuel the growth of purpose-driven brands through strategy activation,
                        design empowerment, and market adoption.
                    </p>
                </div>

                {/* Content Row */}
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* Image */}
                    <div className="relative rounded-3xl overflow-hidden animate-[float_6s_ease-in-out_infinite]">
                        <img
                            src={aboutus}
                            alt="About Us"
                            className="w-full h-auto rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                            loading="lazy"
                        />
                        {/* Badge */}
                        <div className="absolute bottom-6 left-6 bg-gradient-to-br from-pink-500 to-purple-600 
                            text-white px-7 py-3 rounded-2xl shadow-lg text-[22px] font-bold">
                            24+ <span className="text-base font-medium ml-1">Startups created</span>
                        </div>
                    </div>

                    {/* Text & Features */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6 leading-snug 
                            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                            bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                            We’re design-focused across every touchpoint or interaction
                        </h3>
                        <p className="text-lg text-white/80 mb-12 leading-relaxed">
                            Everything we do and dream up has a solid design impact. We create human-centered
                            enterprise software that has the polished, snappy feel of the best consumer apps.
                        </p>

                        {/* Features */}
                        <div className="space-y-10">
                            <div className="flex items-start space-x-5">
                                <div className="bg-pink-500/20 text-pink-400 p-4 rounded-xl text-2xl shadow-[0_0_12px_rgba(236,72,153,0.4)]">
                                    <FaPenNib />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1 text-white">UI/UX Design</h4>
                                    <p className="text-white/70 text-[17px]">
                                        We design digital products used by millions of people.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="bg-cyan-500/20 text-cyan-400 p-4 rounded-xl text-2xl shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                                    <FaCode />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-1 text-white">Development</h4>
                                    <p className="text-white/70 text-[17px]">
                                        We develop digital products used by millions of people.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </section>
    );
};

export default AboutUs;
