import React from 'react';
import {
    SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPhp, SiMysql,
    SiTailwindcss, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';

const techStack = [
    { name: 'React.js', icon: <SiReact className="text-cyan-400 w-10 h-10" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 w-10 h-10" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 w-10 h-10" /> },
    { name: 'PHP', icon: <SiPhp className="text-indigo-600 w-10 h-10" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-10 h-10" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 w-10 h-10" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 w-10 h-10" /> },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 w-10 h-10" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500 w-10 h-10" /> },
];

const TechnologiesWeUse = () => {
    return (
        <section className="py-20 px-6 sm:px-12 bg-white text-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
                    Technologies We Use
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    We leverage the latest and most powerful technologies to deliver high-quality, scalable solutions tailored to your business.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            {tech.icon}
                            <p className="mt-3 font-medium text-gray-700">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesWeUse;
