import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentyear = new Date().getFullYear()
    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-indigo-900 text-white py-16 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* About Us */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm leading-relaxed">
                            We specialize in MERN stack apps, PHP + MySQL solutions, and beautiful React UI/UX design. Our
                            goal is to deliver scalable, high-performance web applications that help businesses thrive in
                            the digital world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="/Services" className="hover:underline transition duration-300 ease-in-out">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="hover:underline transition duration-300 ease-in-out">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:underline transition duration-300 ease-in-out">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/Aboutus" className="hover:underline transition duration-300 ease-in-out">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-sm leading-relaxed">Email: jehankandy@gmail.com</p>
                        <p className="text-sm leading-relaxed">Phone: +94 711758851</p>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook className="w-6 h-6 text-white hover:text-indigo-400 transition duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="w-6 h-6 text-white hover:text-indigo-400 transition duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-6 h-6 text-white hover:text-indigo-400 transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-indigo-400 pt-6 mt-10 text-center text-sm">
                    <p>© {currentyear} BlackAlphaLabs. All Rights Reserved.</p>
                    <p className="text-gray-400">
                        Built with ❤️ by BlackAlphaLabs. <span className="hidden sm:inline">Designed to empower your digital presence.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
