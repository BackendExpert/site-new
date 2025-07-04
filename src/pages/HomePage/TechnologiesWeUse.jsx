import React from 'react';
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPhp, SiMysql,
    SiTailwindcss, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';

const techStack = [
    { name: 'React.js', icon: <SiReact className="text-cyan-400 w-10 h-10" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 w-10 h-10" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-200 w-10 h-10" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-400 w-10 h-10" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-400 w-10 h-10" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 w-10 h-10" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-400 w-10 h-10" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-300 w-10 h-10" /> },
];

const TechnologiesWeUse = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">
            {[...Array(30)].map((_, i) => (
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
            <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
                <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Technologies We Use
                </h2>
                <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
                    We leverage the latest and most powerful technologies to deliver high-quality, scalable solutions tailored to your business.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-[#15132c]/70 backdrop-blur rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transform hover:scale-105 transition-all duration-300"
                        >
                            {tech.icon}
                            <p className="mt-3 font-medium text-white/80">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesWeUse;
