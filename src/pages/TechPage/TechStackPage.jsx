import React from 'react';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import { FaDev, FaReact } from 'react-icons/fa';

const techStack = [
    {
        name: "React",
        description:
            "A JavaScript library for building user interfaces. React allows developers to build single-page applications with a component-based architecture.",
        icon: <SiReact size={50} className="text-indigo-400" />,
    },
    {
        name: "Node.js",
        description:
            "A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building scalable network applications.",
        icon: <SiNodedotjs size={50} className="text-green-500" />,
    },
    {
        name: "MongoDB",
        description:
            "A NoSQL database program, designed for scalability and flexibility. It stores data in JSON-like format, which is ideal for modern applications.",
        icon: <SiMongodb size={50} className="text-teal-400" />,
    },
    {
        name: "Express.js",
        description:
            "A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.",
        icon: <SiExpress size={50} className="text-gray-400" />,
    },
    {
        name: "Tailwind CSS",
        description:
            "A utility-first CSS framework for creating custom designs without having to leave your HTML. It allows developers to design directly in the markup.",
        icon: <SiTailwindcss size={50} className="text-cyan-400" />,
    },
    {
        name: "MySQL",
        description:
            "An open-source relational database management system that uses SQL (Structured Query Language) for managing and storing data.",
        icon: <SiMysql size={50} className="text-blue-600" />,
    },
    {
        name: "React Native",
        description:
            "A framework for building native apps using React. It allows developers to write mobile applications for iOS and Android using JavaScript and React.",
        icon: <FaReact size={50} className="text-indigo-400" />,
    },
    {
        name: "VS Code",
        description:
            "A free and powerful code editor that supports numerous programming languages and tools, making it an excellent choice for developers.",
        icon: <FaDev size={50} className="text-purple-500" />,
    },
    {
        name: "Git",
        description:
            "A distributed version control system that helps developers manage and track changes in code during software development.",
        icon: <SiGit size={50} className="text-red-500" />,
    },
];

const TechStackPage = () => {
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
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Header */}
            <header className="text-center mb-24 min-h-[50vh] flex flex-col justify-center items-center px-6">
                <h1 className="text-5xl font-extrabold mb-6
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Our Tech Stack
                </h1>
                <p className="text-lg max-w-3xl text-white/80">
                    Technologies we use to build scalable and modern applications.
                </p>
            </header>

            {/* Tech Stack Grid */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                transition-all duration-300 group text-center"
                        >
                            <div className="flex justify-center mb-6">{tech.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3
                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {tech.name}
                            </h3>
                            <p className="text-white/70 text-sm">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6
          bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
          bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    About Us
                </h2>
                <p className="text-white/80 text-lg mb-6">
                    We are a team of passionate developers, striving to deliver the best solutions for businesses and individuals.
                    Our mission is to leverage modern technologies to build scalable, secure, and high-performance applications that
                    solve real-world problems. With a focus on quality and efficiency, we are committed to providing outstanding
                    services to our clients.
                </p>
                <p className="text-white/80 text-lg">
                    Whether it's developing a new product from scratch or improving existing systems, we are dedicated to helping
                    our clients achieve their goals with the latest tools and technologies.
                </p>
            </section>
        </section>
    );
};

export default TechStackPage;
