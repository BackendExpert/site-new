import React, { useState } from 'react';
import { navmenu } from './NavMenu';
import { Menu, X } from 'lucide-react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800 tracking-wide">
                        <a href="/">BLACK <span className="text-blue-600">ALPHA</span> LABS</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex space-x-6">
                        {navmenu.map((menu, index) => (
                            <a
                                key={index}
                                href={menu.link}
                                className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                            >
                                {menu.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-4 pt-2 space-y-2">
                    {navmenu.map((menu, index) => (
                        <a
                            key={index}
                            href={menu.link}
                            className="block text-gray-700 hover:text-blue-600 transition duration-300"
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
