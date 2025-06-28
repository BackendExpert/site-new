import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const OnlinePlatforms = () => {
    const data = [
        {
            id: 1,
            name: 'Learning Hub - by Blackalphalabs',
            desc: 'This platform is made to help you quickly access tech information, resources, and guides in one place.',
            link: '/LearningHub',
            available: true,
        },
        {
            id: 2,
            name: 'JKCSS Framework',
            desc: 'South Asia’s first CSS framework — minimal, fast, and developer-friendly.',
            link: '#',
            available: false,
        },
        {
            id: 3,
            name: 'Coconut DB',
            desc: 'Sri Lanka’s first NoSQL document-oriented database system.',
            link: '#',
            available: false,
        },
    ];

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-white p-6 mt-20">
            {/* Hero Section */}
            <div className="text-center mb-12 pt-24">
                <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-700 mb-4 animate-fade-in">
                    Explore Our Online Platforms
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                    Discover modern tools and resources crafted by Blackalpha Labs to empower developers across South Asia.
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-24">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`relative bg-white rounded-2xl p-6 shadow-lg transition duration-300 border border-gray-100 
                        ${item.available ? 'hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1' : 'overflow-hidden'}
                        `}
                    >
                        {/* Overlay for Coming Soon */}
                        {!item.available && (
                            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
                                <span className="text-indigo-700 font-extrabold text-xl">Coming Soon</span>
                            </div>
                        )}

                        <div className={`${!item.available ? 'opacity-70 blur-sm select-none pointer-events-none' : ''}`}>
                            <h2 className="text-2xl font-bold text-indigo-700 mb-3">{item.name}</h2>
                            <p className="text-gray-600 mb-4">{item.desc}</p>

                            {item.available && (
                                <a
                                    href={item.link}
                                    className="inline-flex items-center text-indigo-600 font-semibold group"
                                >
                                    Visit Platform
                                    <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition duration-300" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlinePlatforms;
