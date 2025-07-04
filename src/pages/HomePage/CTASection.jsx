import React from 'react';

const CTASection = () => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden text-center">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[2px] rounded-full bg-white/10 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Ready to Start Your Project?
                </h2>
                <p className="text-lg sm:text-xl text-white/80 mb-8">
                    Our team is here to help you bring your ideas to life. Let's create something amazing.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition duration-300"
                >
                    Get Started Now
                </a>
            </div>
        </section>
    );
};

export default CTASection;
