import React, { useEffect, useState } from 'react';
import { navmenu } from './NavMenu';
import { Menu, X } from 'lucide-react';
import sitelogo from '../../assets/SiteLogo.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY < 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBgClass = isTop
        ? 'bg-[#f0f9ff]/90 backdrop-blur-md' // Light blue pastel with blur on top
        : 'bg-white shadow-md';               // White with shadow when scrolled down

    const linkClass = isTop
        ? 'text-[#0c4a6e] hover:text-[#2563eb]' // Dark blue text for light bg
        : 'text-[#1e293b] hover:text-[#2563eb]'; // Darker text for white bg

    return (
        <nav className={`${navBgClass} sticky top-0 z-50 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    {/* Logo & Brand */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={sitelogo}
                            alt="Site Logo"
                            className="h-10 w-auto object-contain"
                        />
                        <a
                            href="/"
                            className={`text-2xl font-extrabold tracking-wide select-none ${isTop
                                    ? 'text-[#0c4a6e]'
                                    : 'text-[#1e293b]'
                                }`}
                        >
                            {/* Desktop text */}
                            <span className="hidden md:inline">
                                BLACK <span className="text-pink-600">ALPHA</span> LABS
                            </span>
                            {/* Mobile text */}
                            <span className="md:hidden">BAL</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex space-x-6">
                        {navmenu.map((menu, index) => (
                            <a
                                key={index}
                                href={menu.link}
                                className={`${linkClass} transition duration-300 font-medium`}
                            >
                                {menu.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${linkClass} focus:outline-none`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-gray-200">
                    {navmenu.map((menu, index) => (
                        <a
                            key={index}
                            href={menu.link}
                            className="block text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                        >
                            {menu.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
