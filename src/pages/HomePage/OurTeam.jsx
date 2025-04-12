import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';
import CEO from '../../assets/CEO.jpg';
import CTO from '../../assets/CTO.jpg';

const teamMembers = [
    {
        name: 'Jehan Weerasuriya',
        role: 'Chief Executive Officer | Lead Fullstack Developer',
        image: CEO,
        socials: {
            linkedin: '',
            facebook: '',
            instagram: '',
            portfolio: '',
        },
    },
    {
        name: 'Anuoa Gamage',
        role: 'Chief Technical Officer',
        image: CTO,
        socials: {
            linkedin: '',
            facebook: '',
            instagram: '',
            portfolio: '',
        },
    },
];

const OurTeam = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Meet Our Team</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-14 max-w-3xl mx-auto">
                    Our talented team is the backbone of everything we build. Passionate, skilled, and always ready for a challenge.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
                        >
                            <div className="flex justify-center mt-16">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-1/2 h-auto object-cover rounded-full border-4 border-gray-300"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-sm text-gray-500 mb-4">{member.role}</p>

                                {/* Social Icons */}
                                <div className="flex justify-center gap-4 text-gray-500">
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-700 transition-colors duration-200"
                                    >
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a
                                        href={member.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition-colors duration-200"
                                    >
                                        <FaFacebookF size={18} />
                                    </a>
                                    <a
                                        href={member.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-pink-600 transition-colors duration-200"
                                    >
                                        <FaInstagram size={18} />
                                    </a>
                                    <a
                                        href={member.socials.portfolio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-green-600 transition-colors duration-200"
                                    >
                                        <FaGlobe size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
