import React from "react";
import {
    FaReact,
    FaPhp,
    FaCogs,
    FaDatabase,
    FaLaptopCode,
    FaTools,
    FaBoxOpen,
} from "react-icons/fa";

const services = [
    {
        icon: <FaReact size={40} className="text-indigo-600" />,
        title: "React UI/UX Design",
        desc: "Create highly responsive, user-centric interfaces with smooth animations, mobile optimization, and clean layouts. Perfect for modern apps and startups."
    },
    {
        icon: <FaPhp size={40} className="text-blue-600" />,
        title: "PHP + MySQL Solutions",
        desc: "Develop powerful and efficient server-side logic with MySQL databases, perfect for CMSs, dashboards, and secure enterprise platforms."
    },
    {
        icon: <FaCogs size={40} className="text-purple-600" />,
        title: "Custom Web Applications",
        desc: "From government systems to educational portals, we build tailored software solutions that solve real-world problems and scale with your needs."
    },
    {
        icon: <FaDatabase size={40} className="text-teal-600" />,
        title: "API Development",
        desc: "We design secure, scalable, and RESTful APIs with detailed documentation. Ideal for connecting frontend apps, mobile platforms, and third-party integrations."
    },
    {
        icon: <FaLaptopCode size={40} className="text-emerald-600" />,
        title: "MERN Stack Development",
        desc: "Full-stack development using MongoDB, Express, React, and Node.js. Built for performance, scalability, and modern design standards."
    },
    {
        icon: <FaBoxOpen size={40} className="text-yellow-500" />,
        title: "NPM Package Development",
        desc: "We build and publish developer tools to NPM. Optimize workflows, automate repetitive tasks, and share reusable logic with the developer community."
    },
    {
        icon: <FaTools size={40} className="text-red-500" />,
        title: "Tech Consulting",
        desc: "Not sure where to start? We help you choose the right technologies, project architecture, and development strategies to maximize ROI."
    },
];

const Services = () => {
    return (
        <div className="-mt-4">
            {/* Gradient Header */}
            <header className="w-full h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Discover how we help businesses grow with modern technologies, tailored strategies, and innovative software solutions.
                </p>
            </header>

            {/* Services Grid */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        At our core, we're driven by quality, innovation, and a commitment to building long-term relationships with our clients. Here's why businesses trust us.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                        <div>
                            <h4 className="text-xl font-semibold text-indigo-600 mb-2">💡 Expertise Across Stacks</h4>
                            <p className="text-gray-600">We specialize in MERN, PHP, REST APIs, and React UI design, ensuring seamless integration and powerful performance.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-pink-500 mb-2">🚀 Rapid Delivery</h4>
                            <p className="text-gray-600">Our agile development approach means faster results without compromising on quality or user experience.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-purple-600 mb-2">🔒 Secure & Scalable</h4>
                            <p className="text-gray-600">Security and scalability are always built-in. Whether it's a startup MVP or enterprise app, we build it to grow with you.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-teal-600 mb-2">🎯 Tailored Solutions</h4>
                            <p className="text-gray-600">No one-size-fits-all here. Every product is built based on your goals, users, and long-term growth strategy.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-yellow-500 mb-2">📦 Developer Tools</h4>
                            <p className="text-gray-600">We don’t just build for clients — we build tools for developers around the world via open-source and NPM packages.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-red-500 mb-2">📞 Always Connected</h4>
                            <p className="text-gray-600">Excellent communication, transparency, and support. You're never left in the dark with us.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
