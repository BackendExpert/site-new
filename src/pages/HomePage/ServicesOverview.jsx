import React from 'react';
import { Code, Database, MonitorSmartphone, Users } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-10 h-10 text-indigo-600" />,
        title: "MERN Stack Development",
        description: "We build scalable, high-performance web apps using MongoDB, Express, React, and Node.js.",
    },
    {
        icon: <Database className="w-10 h-10 text-green-600" />,
        title: "PHP + MySQL Solutions",
        description: "Robust backend solutions and custom CMS development using PHP and MySQL.",
    },
    {
        icon: <MonitorSmartphone className="w-10 h-10 text-blue-600" />,
        title: "React UI/UX Design",
        description: "Clean, responsive, and intuitive interfaces built with modern design systems and TailwindCSS.",
    },
    {
        icon: <Users className="w-10 h-10 text-pink-600" />,
        title: "Custom Software Solutions",
        description: "We tailor software for startups, enterprises, and government institutions with long-term support.",
    },
];

const ServicesOverview = () => {
    return (
        <section className="bg-white py-20 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Our Services</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
                    We offer a wide range of cutting-edge development services to bring your ideas to life.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
                        >
                            <div className="mb-5">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
