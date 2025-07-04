import React from 'react';
import { Code, Database, MonitorSmartphone, Users } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-12 h-12 text-pink-400" />,
        title: "MERN Stack Development",
        description: "We build scalable, high-performance web apps using MongoDB, Express, React, and Node.js.",
    },
    {
        icon: <Database className="w-12 h-12 text-cyan-400" />,
        title: "PHP + MySQL Solutions",
        description: "Robust backend solutions and custom CMS development using PHP and MySQL.",
    },
    {
        icon: <MonitorSmartphone className="w-12 h-12 text-purple-400" />,
        title: "React UI/UX Design",
        description: "Clean, responsive, and intuitive interfaces built with modern design systems and Tailwind CSS.",
    },
    {
        icon: <Users className="w-12 h-12 text-rose-400" />,
        title: "Custom Software Solutions",
        description: "We tailor software for startups, enterprises, and government institutions with long-term support.",
    },
];

const ServicesOverview = () => {
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
                {/* Title */}
                <h2 className="text-5xl font-extrabold mb-6 leading-tight
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Our Services
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-16">
                    We offer a wide range of modern development services to transform your ideas into powerful, scalable solutions.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#15132c]/80 rounded-3xl p-8 shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] 
                            hover:scale-105 transition duration-300 ease-in-out backdrop-blur"
                        >
                            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-2xl 
                                bg-gradient-to-br from-[#0d0b1f] to-[#1c1a3d] shadow-[0_0_12px_rgba(236,72,153,0.3)]">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-white/70 text-[16px] leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
