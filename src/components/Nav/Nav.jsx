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
        ? 'bg-gradient-to-r from-[#0d0b1f]/80 via-[#15132c]/80 to-[#1c1a3d]/80 backdrop-blur-lg'
        : 'bg-[#0d0b1f]/95 backdrop-blur-md shadow-lg';

    return (
        <nav className={`${navBgClass} fixed top-0 w-full z-50 transition-all duration-500`}>
            {/* small scattered dots behind nav */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-[2px] h-[2px] rounded-full bg-white/20 animate-pulse`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="flex justify-between items-center py-4">
                    {/* Logo & Brand */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={sitelogo}
                            alt="Site Logo"
                            className="h-10 w-auto object-contain animate-[float_4s_ease-in-out_infinite] drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]"
                        />
                        <a
                            href="/"
                            className="text-2xl font-extrabold tracking-wide select-none 
                            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                            bg-clip-text text-transparent"
                        >
                            <span className="hidden md:inline">
                                BLACK <span className="text-pink-400">ALPHA</span> LABS
                            </span>
                            <span className="md:hidden">BAL</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex space-x-8 animate-[fadeDown_1s_ease-out]">
                        {navmenu.map((menu, index) => (
                            <a
                                key={index}
                                href={menu.link}
                                className="text-white/80 hover:text-pink-400 font-medium transition duration-300 relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {menu.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`xl:hidden overflow-hidden transition-all duration-700 ease-in-out 
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-4 pb-6 pt-4 space-y-3 bg-[#0d0b1f]/95 backdrop-blur-md border-t border-white/10">
                    {navmenu.map((menu, index) => (
                        <a
                            key={index}
                            href={menu.link}
                            className="block text-white/80 hover:text-pink-400 font-medium transition duration-300"
                        >
                            {menu.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes fadeDown {
                    0% { opacity: 0; transform: translateY(-15px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </nav>
    );
};

export default Nav;
