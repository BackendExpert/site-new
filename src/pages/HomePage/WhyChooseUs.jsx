import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Award } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-pink-400" />,
        title: "Reliable & Secure",
        description: "We prioritize data security, code reliability, and long-term stability in all our products.",
    },
    {
        icon: <Zap className="w-10 h-10 text-cyan-400" />,
        title: "Fast Delivery",
        description: "Our agile process ensures faster time-to-market without compromising quality.",
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-purple-400" />,
        title: "Client-Centric",
        description: "We build strong partnerships by understanding your vision and aligning tech accordingly.",
    },
    {
        icon: <Award className="w-10 h-10 text-rose-400" />,
        title: "Expert Team",
        description: "Skilled engineers, designers, and project managers deliver polished, professional results.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Tiny scattered dots */}
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

            <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
                <h2 className="text-5xl font-extrabold mb-6 leading-tight
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Why Choose Us
                </h2>
                <p className="text-lg text-white/80 mb-14 max-w-3xl mx-auto">
                    We’re not just developers — we’re your digital growth partners. Here's what sets us apart.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-[#15132c]/80 rounded-3xl p-8 shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] 
                            hover:scale-105 transition duration-300 ease-in-out backdrop-blur"
                        >
                            <div className="mb-5">{reason.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
