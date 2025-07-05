import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        "title": "JKCSS - CSS Framework",
        "description": "The first South Asian CSS framework, designed for speed, flexibility, and elegance in modern web development. First South Asian CSS Framework.",
        "image": "https://avatars.githubusercontent.com/u/139304882?s=64&v=4",
        "link": "https://github.com/JKCSS-CSS-Framework"
    },
    {
        "title": "ReactJKCSS",
        "description": "A React-integrated UI library powered by JKCSS, offering easy-to-use components for fast frontend development. First South Asian ReactJS Support CSS Framework.",
        "image": "https://avatars.githubusercontent.com/u/167443241?s=200&v=4",
        "link": "https://github.com/React-JKCSS"
    },
    {
        "title": "CoconutDB",
        "description": "A NoSQL database solution similar to MongoDB, optimized for educational and lightweight projects. First South Asian NoSQL document-oriented database.",
        "image": "https://avatars.githubusercontent.com/u/189954645?s=64&v=4",
        "link": "https://github.com/CoconutDB"
    },
    {
        "title": "JKRecipeAPI",
        "description": "A powerful RESTful API for accessing and managing Sri Lankan recipes, built with Node.js.",
        "image": "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        "link": "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
    {
        "title": "JKReact Icons",
        "description": "A rich set of custom React icons tailored for JKCSS-based apps and modern UIs.",
        "image": "https://avatars.githubusercontent.com/u/168010528?s=200&v=4",
        "link": "https://github.com/JKReact-Icons"
    },
    {
        "title": "Cookfydelight APK",
        "description": "An Android recipe app for food lovers in South Asia, built with React Native and JKRecipeAPI.",
        "image": "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        "link": "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
    {
        "title": "jkmysql-easy NPM Package",
        "description": "A simple MySQL wrapper for easy integration with Node.js applications. Simplifies database connections and query executions.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/jkmysql-easy"
    },
    {
        "title": "login-signup-react NPM Package",
        "description": "A React-based login and signup component with JWT authentication, designed for easy integration into modern web apps.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/login-signup-react"
    },
    {
        "title": "setup-project-mern-mvc NPM Package",
        "description": "A simple npm package to quickly set up a MERN stack project with an MVC architecture, designed to streamline development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/setup-project-mern-mvc"
    },
    {
        "title": "mern-mvc-gen NPM Package",
        "description": "A generator to quickly scaffold MERN stack applications with an MVC structure. Perfect for rapid development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/mern-mvc-gen"
    },
    {
        "title": "JKCSS NPM Package",
        "description": "The first South Asian CSS framework, built to ensure speed, flexibility, and ease of use for modern web development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/@jehankandy/jkcss"
    },
    {
        "title": "ReactJKCSS NPM Package",
        "description": "A React-integrated UI library powered by JKCSS, offering components that are optimized for fast and efficient frontend development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://www.npmjs.com/package/@jehankandy/react-jkcss"
    },
    {
        "title": "MERN Development VScode extension",
        "description": "A comprehensive VS Code extension for efficient MERN stack development with easy-to-use tools and features for MongoDB, Express, React, and Node.js.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png",
        "link": "https://marketplace.visualstudio.com/items?itemName=JehanKandy.mern-development"
    }
];

const Projects = () => {
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

            {/* Header */}
            <header className="text-center mb-20 min-h-[50vh] flex flex-col justify-center items-center px-6">
                <h1 className="text-5xl font-extrabold mb-6
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Our Projects
                </h1>
                <p className="text-lg max-w-3xl text-white/80">
                    Explore a few of the powerful applications we've built for startups, government, and the open-source community.
                </p>
            </header>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-[#1f1d3a] rounded-3xl p-6 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                                transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-24 h-24 object-cover rounded-full border-4 border-gray-800 mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-2
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {project.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-6">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-cyan-400 font-semibold hover:underline text-sm"
                            >
                                View Project
                                <FaGithub className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
