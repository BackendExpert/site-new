import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "JKCSS - CSS Framework",
        description: "The first South Asian CSS framework, designed for speed, flexibility, and elegance.",
        image: "https://avatars.githubusercontent.com/u/139304882?s=64&v=4",
        link: "https://github.com/JKCSS-CSS-Framework"
    },
    {
        title: "ReactJKCSS",
        description: "React-integrated UI library powered by JKCSS for rapid frontend dev.",
        image: "https://avatars.githubusercontent.com/u/167443241?s=200&v=4",
        link: "https://github.com/React-JKCSS"
    },
    {
        title: "CoconutDB",
        description: "NoSQL database solution similar to MongoDB, for educational/lightweight projects.",
        image: "https://avatars.githubusercontent.com/u/189954645?s=64&v=4",
        link: "https://github.com/CoconutDB"
    },
    {
        title: "JKRecipeAPI",
        description: "Powerful RESTful API for Sri Lankan recipes, built with Node.js.",
        image: "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        link: "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
    {
        title: "JKReact Icons",
        description: "Custom React icons tailored for JKCSS-based apps.",
        image: "https://avatars.githubusercontent.com/u/168010528?s=200&v=4",
        link: "https://github.com/JKReact-Icons"
    },
    {
        title: "Cookfydelight APK",
        description: "Android recipe app built with React Native & JKRecipeAPI.",
        image: "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        link: "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
];

const ProjectsShowcase = () => {
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
                    Our Projects
                </h2>
                <p className="text-lg text-white/80 mb-14 max-w-3xl mx-auto">
                    Explore a few of the powerful applications we've built for startups, government, and the open-source community.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-[#15132c]/70 rounded-2xl p-6 shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300 backdrop-blur"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-24 h-24 object-cover rounded-full border-4 border-[#1c1a3d] mx-auto mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-sm text-white/70 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-pink-400 font-medium hover:underline text-sm"
                            >
                                <FaGithub className="mr-2" /> View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;
