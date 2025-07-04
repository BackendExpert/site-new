import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentyear = new Date().getFullYear();
    return (
        <footer className="relative bg-gradient-to-r from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white py-16 overflow-hidden">
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
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-white/80">
                            We specialize in MERN stack apps, PHP + MySQL solutions, and beautiful React UI/UX design to power your digital growth.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/Services" className="hover:text-pink-400 transition">Services</a></li>
                            <li><a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a></li>
                            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
                            <li><a href="/Aboutus" className="hover:text-green-400 transition">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
                        <p className="text-sm text-white/80">Email: jehankandy@gmail.com</p>
                        <p className="text-sm text-white/80">Phone: +94 711758851</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="https://facebook.com"><Facebook className="w-6 h-6 hover:text-blue-400 transition" /></a>
                            <a href="https://instagram.com"><Instagram className="w-6 h-6 hover:text-pink-400 transition" /></a>
                            <a href="https://twitter.com"><Twitter className="w-6 h-6 hover:text-cyan-400 transition" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-6 text-center text-sm text-white/70">
                    <p>© {currentyear} BlackAlphaLabs. All Rights Reserved.</p>
                    <p className="mt-1">Built with ❤️ by BlackAlphaLabs. Designed to empower your digital presence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
