import React from 'react';
import { ShieldCheck, Zap, HeartHandshake, Award } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
        title: "Reliable & Secure",
        description: "We prioritize data security, code reliability, and long-term stability in all our products.",
    },
    {
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        title: "Fast Delivery",
        description: "Our agile process ensures faster time-to-market without compromising quality.",
    },
    {
        icon: <HeartHandshake className="w-10 h-10 text-rose-500" />,
        title: "Client-Centric",
        description: "We build strong partnerships by understanding your vision and aligning tech accordingly.",
    },
    {
        icon: <Award className="w-10 h-10 text-green-600" />,
        title: "Expert Team",
        description: "Skilled engineers, designers, and project managers deliver polished, professional results.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Why Choose Us</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
                    We’re not just developers — we’re your digital growth partners. Here's what sets us apart.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
                        >
                            <div className="mb-5">{reason.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
