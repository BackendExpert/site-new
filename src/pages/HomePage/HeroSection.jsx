import React from 'react';
import { ArrowRight } from 'lucide-react';
import sitelogo from '../../assets/SiteLogo.png';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden 
      bg-gradient-to-br from-[#0a0f24] to-[#020916] text-white">

            {/* Animated floating shapes */}
            <div className="absolute top-20 left-20 w-6 h-6 bg-[#00fff7] rounded-full animate-bounce-slow shadow-[0_0_10px_#00fff7]"></div>
            <div className="absolute top-40 right-24 w-8 h-8 bg-[#00ff94] rounded-full animate-bounce-delay shadow-[0_0_15px_#00ff94]"></div>
            <div className="absolute bottom-32 left-[45%] w-10 h-10 bg-[#00bfff] rounded-full animate-bounce-slow shadow-[0_0_20px_#00bfff]"></div>
            <div className="absolute bottom-20 right-[15%] w-5 h-5 bg-[#08ffc8] rounded-full animate-bounce-delay shadow-[0_0_8px_#08ffc8]"></div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 items-center gap-12">

                {/* Text */}
                <div className="space-y-8 text-center md:text-left mx-auto">
                    <h1
                        className="text-4xl md:text-6xl font-extrabold leading-snug tracking-tight
            bg-gradient-to-r from-[#00fff7] via-[#00bfff] to-[#00ff94]
            bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,255,247,0.7)]"
                    >
                        Powering Tomorrow with <br /> BLACK ALPHA LABS
                    </h1>
                    <p className="text-lg md:text-xl max-w-xl text-white/90 mx-auto md:mx-0 drop-shadow-[0_0_4px_rgba(0,255,247,0.5)]">
                        We craft scalable digital products with precision and passion — delivering unmatched software for startups, enterprises, and everything in between.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
                        <a
                            href="#get-started"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#001f3f] bg-[#00fff7] shadow-[0_0_12px_#00fff7] hover:scale-105 hover:bg-[#00ccbd] transition duration-300"
                        >
                            Get Started <ArrowRight size={18} />
                        </a>
                        <a
                            href="#learn-more"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-[#00fff7] shadow-[0_0_10px_#00fff7] hover:bg-[#00fff7] hover:text-[#001f3f] transition duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

            </div>

            {/* Clean single bottom curve */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#ffffff"
                    fillOpacity="1"
                    d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </section>
    );
};

export default HeroSection;
