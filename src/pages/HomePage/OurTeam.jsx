import React from 'react';
import { FaLinkedin, FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';
import CEO from '../../assets/CEO.jpg';
import CTO from '../../assets/CTO.jpg';

const teamMembers = [
    {
        name: 'Jehan Weerasuriya',
        role: 'Chief Executive Officer | Lead FullStack Cross-Platform Developer ',
        image: CEO,
        socials: { linkedin: '', facebook: '', instagram: '', portfolio: '' },
    },
    {
        name: 'Anupa Gamage',
        role: 'Chief Technical Officer',
        image: CTO,
        socials: { linkedin: '', facebook: '', instagram: '', portfolio: '' },
    },
];

const OurTeam = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[2px] rounded-full bg-white/10 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
            <div className="max-w-7xl mx-auto text-center px-6 relative z-10">
                <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Meet Our Team
                </h2>
                <p className="text-lg text-white/80 mb-14 max-w-3xl mx-auto">
                    Our talented team is the backbone of everything we build. Passionate, skilled, and always ready for a challenge.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#15132c]/70 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transform hover:scale-105 transition duration-300 backdrop-blur"
                        >
                            <div className="flex justify-center mt-12">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 object-cover rounded-full border-4 border-[#1c1a3d]"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-sm text-white/70 mb-4">{member.role}</p>
                                <div className="flex justify-center gap-4 text-white/60">
                                    <a href={member.socials.linkedin}><FaLinkedin className="hover:text-blue-500 transition" /></a>
                                    <a href={member.socials.facebook}><FaFacebookF className="hover:text-blue-400 transition" /></a>
                                    <a href={member.socials.instagram}><FaInstagram className="hover:text-pink-400 transition" /></a>
                                    <a href={member.socials.portfolio}><FaGlobe className="hover:text-green-400 transition" /></a>
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
