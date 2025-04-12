import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "SASBOSS - Smart Admin System",
        description: "A complete admin dashboard built with MERN stack, featuring user management, analytics, and role-based access.",
        image: "/projects/sasboss.png", // update with your actual image path
        link: "https://github.com/yourusername/sasboss"
    },
    {
        title: "VidsWe - Video Sharing Platform",
        description: "A YouTube-inspired video sharing platform built for South Asia using React, Node, and MongoDB.",
        image: "/projects/vidswe.png",
        link: "https://github.com/yourusername/vidswe"
    },
    {
        title: "PRC Gov Portal",
        description: "A public service site for a regional council with announcements, events, and live updates, powered by MERN.",
        image: "/projects/prc.png",
        link: "#"
    },
    {
        title: "TravelBuddy App",
        description: "A mobile-first travel guide for tourists in Sri Lanka. Built with React Native, Expo, and REST APIs.",
        image: "/projects/travelbuddy.png",
        link: "#"
    },
    {
        title: "TravelBuddy App",
        description: "A mobile-first travel guide for tourists in Sri Lanka. Built with React Native, Expo, and REST APIs.",
        image: "/projects/travelbuddy.png",
        link: "#"
    },
    {
        title: "TravelBuddy App",
        description: "A mobile-first travel guide for tourists in Sri Lanka. Built with React Native, Expo, and REST APIs.",
        image: "/projects/travelbuddy.png",
        link: "#"
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
                                className="w-full h-52 object-cover rounded-t-2xl"
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
                                    <FaGithub className="mr-2" /> View Project
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
