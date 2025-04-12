import React from 'react';

const CTASection = () => {
    return (
        <section className="bg-gradient-to-r from-indigo-600 to-blue-700 py-20 text-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <h2 className="text-3xl sm:text-5xl font-extrabold mb-6">
                    Ready to Start Your Project?
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                    Our team is here to help you bring your ideas to life. Let's work together to create something amazing.
                </p>
                <div>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-green-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-600 transition duration-300 transform hover:scale-105"
                    >
                        Get Started Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
