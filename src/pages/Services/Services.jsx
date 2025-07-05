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
        icon: <FaReact size={40} className="text-indigo-400" />,
        title: "React UI/UX Design",
        desc: "Create highly responsive, user-centric interfaces with smooth animations, mobile optimization, and clean layouts. Perfect for modern apps and startups.",
    },
    {
        icon: <FaPhp size={40} className="text-blue-400" />,
        title: "PHP + MySQL Solutions",
        desc: "Develop powerful and efficient server-side logic with MySQL databases, perfect for CMSs, dashboards, and secure enterprise platforms.",
    },
    {
        icon: <FaCogs size={40} className="text-purple-400" />,
        title: "Custom Web Applications",
        desc: "From government systems to educational portals, we build tailored software solutions that solve real-world problems and scale with your needs.",
    },
    {
        icon: <FaDatabase size={40} className="text-teal-400" />,
        title: "API Development",
        desc: "We design secure, scalable, and RESTful APIs with detailed documentation. Ideal for connecting frontend apps, mobile platforms, and third-party integrations.",
    },
    {
        icon: <FaLaptopCode size={40} className="text-emerald-400" />,
        title: "MERN Stack Development",
        desc: "Full-stack development using MongoDB, Express, React, and Node.js. Built for performance, scalability, and modern design standards.",
    },
    {
        icon: <FaBoxOpen size={40} className="text-yellow-400" />,
        title: "NPM Package Development",
        desc: "We build and publish developer tools to NPM. Optimize workflows, automate repetitive tasks, and share reusable logic with the developer community.",
    },
    {
        icon: <FaTools size={40} className="text-red-400" />,
        title: "Tech Consulting",
        desc: "Not sure where to start? We help you choose the right technologies, project architecture, and development strategies to maximize ROI.",
    },
];

const Services = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Floating Dots */}
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
                    Our Services
                </h1>
                <p className="text-lg max-w-3xl text-white/80">
                    Discover how we help businesses grow with modern technologies, tailored strategies, and innovative software solutions.
                </p>
            </header>

            {/* Services Grid */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative bg-[#1f1d3a] rounded-3xl p-8 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                transition-all duration-300 group"
                        >
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3
                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {service.title}
                            </h3>
                            <p className="text-white/70 text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#1f1d3a] py-20 px-6 rounded-3xl max-w-5xl mx-auto mt-20 shadow-[0_0_30px_rgba(236,72,153,0.2)] border border-pink-500/10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold
            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
            bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] mb-6">
                        Why Choose Us?
                    </h2>
                    <p className="text-white/80 text-lg max-w-3xl mx-auto">
                        At our core, we're driven by quality, innovation, and a commitment to building long-term relationships with our clients. Here's why businesses trust us.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left text-white/80">
                    <div>
                        <h4 className="text-xl font-semibold text-indigo-400 mb-2">💡 Expertise Across Stacks</h4>
                        <p>We specialize in MERN, PHP, REST APIs, and React UI design, ensuring seamless integration and powerful performance.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-pink-400 mb-2">🚀 Rapid Delivery</h4>
                        <p>Our agile development approach means faster results without compromising on quality or user experience.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-purple-400 mb-2">🔒 Secure & Scalable</h4>
                        <p>Security and scalability are always built-in. Whether it's a startup MVP or enterprise app, we build it to grow with you.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-teal-400 mb-2">🎯 Tailored Solutions</h4>
                        <p>No one-size-fits-all here. Every product is built based on your goals, users, and long-term growth strategy.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-yellow-400 mb-2">📦 Developer Tools</h4>
                        <p>We don’t just build for clients — we build tools for developers around the world via open-source and NPM packages.</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-red-400 mb-2">📞 Always Connected</h4>
                        <p>Excellent communication, transparency, and support. You're never left in the dark with us.</p>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Services;
