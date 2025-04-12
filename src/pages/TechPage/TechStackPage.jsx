import React from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import { FaDev, FaReact } from 'react-icons/fa';

const techStack = [
    {
        name: "React",
        description: "A JavaScript library for building user interfaces. React allows developers to build single-page applications with a component-based architecture.",
        icon: <SiReact size={50} />
    },
    {
        name: "Node.js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.",
        icon: <SiNodedotjs size={50} />
    },
    {
        name: "MongoDB",
        description: "A NoSQL database program, designed for scalability and flexibility. It stores data in JSON-like format, which is ideal for modern applications.",
        icon: <SiMongodb size={50} />
    },
    {
        name: "Express.js",
        description: "A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.",
        icon: <SiExpress size={50} />
    },
    {
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for creating custom designs without having to leave your HTML. It allows developers to design directly in the markup.",
        icon: <SiTailwindcss size={50} />
    },
    {
        name: "MySQL",
        description: "An open-source relational database management system that uses SQL (Structured Query Language) for managing and storing data.",
        icon: <SiMysql size={50} />
    },
    {
        name: "React Native",
        description: "A framework for building native apps using React. It allows developers to write mobile applications for iOS and Android using JavaScript and React.",
        icon: <FaReact size={50} />
    },
    {
        name: "VS Code",
        description: "A free and powerful code editor that supports numerous programming languages and tools, making it an excellent choice for developers.",
        icon: <FaDev size={50} />
    },
    {
        name: "Git",
        description: "A distributed version control system that helps developers manage and track changes in code during software development.",
        icon: <SiGit size={50} />
    }
];

const TechStackPage = () => {
    return (
        <div className="bg-white text-gray-800 -mt-4">
            <header className="w-full h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Tech Stack</h1>
                <p className="text-lg sm:text-xl">Technologies we use to build scalable and modern applications.</p>
            </header>

            <section className="py-16 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {techStack.map((tech, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300">
                            <div className="flex justify-center mb-4">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.name}</h3>
                            <p className="text-sm text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-6">About Us</h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-6">
                        We are a team of passionate developers, striving to deliver the best solutions for businesses and individuals.
                        Our mission is to leverage modern technologies to build scalable, secure, and high-performance applications that
                        solve real-world problems. With a focus on quality and efficiency, we are committed to providing outstanding
                        services to our clients.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700">
                        Whether it's developing a new product from scratch or improving existing systems, we are dedicated to helping
                        our clients achieve their goals with the latest tools and technologies.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default TechStackPage;
