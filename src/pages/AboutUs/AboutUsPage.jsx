import React from 'react';
import teamImg from '../../assets/teamwork.png';
import codeImg from '../../assets/development.png';
import designImg from '../../assets/uiux.png';

const AboutUsPage = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Floating Dots */}
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

            <div className="max-w-7xl mx-auto px-6 relative z-10 ">
                {/* Hero Section */}
                <div className="text-center mb-24 min-h-[50vh] flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-extrabold leading-tight mb-6
                        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                        bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                        About BlackAlphaLabs
                    </h1>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto">
                        Empowering businesses with custom software, scalable systems, and stunning user experiences.
                    </p>
                </div>


                {/* Section: Who We Are */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                        border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                        transition-all duration-300 group w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4
                            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                            bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                            Who We Are
                        </h2>
                        <p className="text-white/70 mb-4">
                            We’re a passionate team of developers, designers, and visionaries delivering powerful web and mobile apps.
                        </p>
                        <p className="text-white/70">
                            From scalable backend systems to stunning frontend experiences, we craft digital solutions that make a difference.
                        </p>
                    </div>
                    <img
                        src={teamImg}
                        alt="Our Team"
                        className="w-full md:w-1/2 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Section: What We Do */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24">
                    <img
                        src={codeImg}
                        alt="What We Do"
                        className="w-full md:w-1/2 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                    <div className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                        border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                        transition-all duration-300 group w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4
                            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                            bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                            What We Do
                        </h2>
                        <ul className="text-white/70 text-lg space-y-3 list-disc pl-5">
                            <li><strong className="text-white">MERN Stack Development:</strong> Powerful APIs & sleek UIs.</li>
                            <li><strong className="text-white">PHP + MySQL:</strong> Reliable, flexible backend systems.</li>
                            <li><strong className="text-white">React UI/UX:</strong> Creative, intuitive, responsive interfaces.</li>
                            <li><strong className="text-white">DevOps + Cloud:</strong> Seamless CI/CD, secure scalable deployment.</li>
                        </ul>
                    </div>
                </div>

                {/* Section: Design Philosophy */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                        border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                        transition-all duration-300 group w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4
                            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                            bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                            Our Design Philosophy
                        </h2>
                        <p className="text-white/70">
                            We believe in functional beauty. From Figma to production, we ensure every interaction is smooth,
                            every layout responsive, and every detail polished. Design is more than looks — it's experience.
                        </p>
                    </div>
                    <img
                        src={designImg}
                        alt="Design Philosophy"
                        className="w-full md:w-1/2 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <a
                        href="#services"
                        className="inline-block px-10 py-5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                            text-white text-lg font-semibold rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
                    >
                        Discover Our Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;
