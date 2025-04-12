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
        "link": "https://github.com/jkmysql-easy"
    },
    {
        "title": "login-signup-react NPM Package",
        "description": "A React-based login and signup component with JWT authentication, designed for easy integration into modern web apps.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://github.com/login-signup-react"
    },
    {
        "title": "setup-project-mern-mvc NPM Package",
        "description": "A simple npm package to quickly set up a MERN stack project with an MVC architecture, designed to streamline development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://github.com/setup-project-mern-mvc"
    },
    {
        "title": "mern-mvc-gen NPM Package",
        "description": "A generator to quickly scaffold MERN stack applications with an MVC structure. Perfect for rapid development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://github.com/mern-mvc-gen"
    },
    {
        "title": "JKCSS NPM Package",
        "description": "The first South Asian CSS framework, built to ensure speed, flexibility, and ease of use for modern web development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://github.com/JKCSS-CSS-Framework"
    },
    {
        "title": "ReactJKCSS NPM Package",
        "description": "A React-integrated UI library powered by JKCSS, offering components that are optimized for fast and efficient frontend development.",
        "image": "https://icon.icepanel.io/Technology/svg/NPM.svg",
        "link": "https://github.com/React-JKCSS"
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
        <section className="-mt-4 mb-8">
            {/* Header with Gradient */}
            <header className="h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-5xl font-extrabold mb-4">Our Projects</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Explore a few of the powerful applications we've built for startups, government, and the open-source community.
                </p>
            </header>

            {/* Projects Section */}
            <div className="max-w-7xl mx-auto text-center mt-14">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-32 h-32 object-cover rounded-full border-4 border-gray-100 mx-auto mt-6"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-indigo-600 font-medium hover:underline text-sm"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-14">
                    <a
                        href="#"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-500 text-white text-base sm:text-lg font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
                    >
                        View More Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
