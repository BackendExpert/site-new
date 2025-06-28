import React from 'react';
import { Code, Database, MonitorSmartphone, Users } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-12 h-12 text-indigo-600" />,
        title: "MERN Stack Development",
        description: "We build scalable, high-performance web apps using MongoDB, Express, React, and Node.js.",
    },
    {
        icon: <Database className="w-12 h-12 text-green-600" />,
        title: "PHP + MySQL Solutions",
        description: "Robust backend solutions and custom CMS development using PHP and MySQL.",
    },
    {
        icon: <MonitorSmartphone className="w-12 h-12 text-blue-600" />,
        title: "React UI/UX Design",
        description: "Clean, responsive, and intuitive interfaces built with modern design systems and Tailwind CSS.",
    },
    {
        icon: <Users className="w-12 h-12 text-pink-600" />,
        title: "Custom Software Solutions",
        description: "We tailor software for startups, enterprises, and government institutions with long-term support.",
    },
];

const ServicesOverview = () => {
    return (
        <section className="bg-gradient-to-br from-white via-purple-50 to-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                    We offer a wide range of modern development services to transform your ideas into powerful, scalable solutions.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-indigo-50 mb-6 mx-auto group-hover:scale-110 transition">
                                {service.icon}
                            </div>
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            {/* Description */}
                            <p className="text-gray-500 text-[16px] leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
