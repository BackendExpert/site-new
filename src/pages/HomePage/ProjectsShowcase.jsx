import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "JKCSS - CSS Framework",
        description: "The first South Asian CSS framework, designed for speed, flexibility, and elegance in modern web development. First South Asian CSS Framework",
        image: "https://avatars.githubusercontent.com/u/139304882?s=64&v=4",
        link: "https://github.com/JKCSS-CSS-Framework"
    },
    {
        title: "ReactJKCSS",
        description: "A React-integrated UI library powered by JKCSS, offering easy-to-use components for fast frontend development. First South Asian ReactJS Support CSS Framework",
        image: "https://avatars.githubusercontent.com/u/167443241?s=200&v=4",
        link: "https://github.com/React-JKCSS"
    },
    {
        title: "CoconutDB",
        description: "A NoSQL database solution similar to MongoDB, optimized for educational and lightweight projects. First South Asian NoSQL document oriented database",
        image: "https://avatars.githubusercontent.com/u/189954645?s=64&v=4",
        link: "https://github.com/CoconutDB"
    },
    {
        title: "JKRecipeAPI",
        description: "A powerful RESTful API for accessing and managing Sri Lankan recipes, built with Node.js.",
        image: "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        link: "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
    {
        title: "JKReact Icons",
        description: "A rich set of custom React icons tailored for JKCSS-based apps and modern UIs.",
        image: "https://avatars.githubusercontent.com/u/168010528?s=200&v=4",
        link: "https://github.com/JKReact-Icons"
    },
    {
        title: "Cookfydelight APK",
        description: "An Android recipe app for food lovers in South Asia, built with React Native and JKRecipeAPI.",
        image: "https://avatars.githubusercontent.com/u/196493390?s=200&v=4",
        link: "https://rapidapi.com/jehankandy/api/jkrecipeapi2"
    },
];

const ProjectsShowcase = () => {
    return (
        <section className="bg-gray-100 py-20 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Our Projects</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
                    Explore a few of the powerful applications we've built for startups, government, and the open-source community.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default ProjectsShowcase;
