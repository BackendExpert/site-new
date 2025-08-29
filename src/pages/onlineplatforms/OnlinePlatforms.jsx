import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const OnlinePlatforms = () => {
    const platforms = [
        {
            id: 1,
            name: 'Learning Hub - by BlackAlphaLabs',
            desc: 'This platform helps you quickly access tech information, resources, and guides in one place.',
            link: '/LearningHub',
            available: true,
        },
    ];

    const tools = [
        {
            id: 1,
            name: 'JKCSS Framework',
            desc: 'South Asia’s first CSS framework — minimal, fast, developer-friendly.',
            link: 'https://github.com/JKCSS-CSS-Framework',
            available: true,
        },
        {
            id: 2,
            name: 'Coconut DB',
            desc: 'South Asia’s first NoSQL document-oriented database system.',
            link: 'https://github.com/CoconutDB',
            available: true,
        },
    ];

    const npms = [
        {
            id: 1,
            name: 'Secure-MERN',
            desc: 'A security-focused starter for building robust MERN applications.',
            link: '/secure-mern',
            available: true,
        },

    ];


    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Floating dots */}
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

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Platforms Section */}
                <h2 className="text-5xl font-extrabold leading-tight mb-6
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Explore Our Online Platforms
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-16">
                    Discover online platforms crafted by BlackAlphaLabs to empower developers & businesses across South Asia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                    {platforms.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                                transition-all duration-300 group overflow-hidden"
                        >
                            <h3 className="text-2xl font-bold mb-4
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {item.name}
                            </h3>
                            <p className="text-white/70 mb-6">{item.desc}</p>
                            {item.available && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-cyan-400 font-semibold group hover:underline"
                                >
                                    Visit Platform
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Tools Section */}
                <h2 className="text-5xl font-extrabold leading-tight mb-6
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Explore Our Tools
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-16">
                    Innovative developer tools and frameworks we’re building to power the next generation of apps.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                    {tools.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                                transition-all duration-300 group overflow-hidden"
                        >
                            <h3 className="text-2xl font-bold mb-4
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {item.name}
                            </h3>
                            <p className="text-white/70 mb-6">{item.desc}</p>
                            {item.available && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-cyan-400 font-semibold group hover:underline"
                                >
                                    View Tool
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* NPM Section */}
                <h2 className="text-5xl font-extrabold leading-tight mb-6
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Explore Our NPM Packages
                </h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-16">
                    Install our open-source projects directly from NPM to accelerate your workflow.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {npms.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                                transition-all duration-300 group overflow-hidden"
                        >
                            <h3 className="text-2xl font-bold mb-4
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {item.name}
                            </h3>
                            <p className="text-white/70 mb-6">{item.desc}</p>
                            {item.available && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-cyan-400 font-semibold group hover:underline"
                                >
                                    View Docs
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnlinePlatforms;
