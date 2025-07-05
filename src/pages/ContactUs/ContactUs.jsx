import React from 'react';

const ContactUs = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Floating dots */}
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[2px] rounded-full bg-white/20 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}

            {/* Header */}
            <header className="h-[50vh] flex flex-col justify-center items-center px-6 text-center">
                <h1
                    className="text-5xl font-extrabold mb-4
            bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
            bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                >
                    Contact Us
                </h1>
                <p className="text-xl max-w-2xl text-white/80 mx-auto">
                    We’d love to hear from you! Whether you have a question about services, pricing, careers, or anything else, our team is ready to answer all your questions.
                </p>
            </header>

            {/* Contact Form */}
            <div className="max-w-4xl mx-auto mt-16 px-6">
                <div
                    className="bg-[#1f1d3a] rounded-3xl p-10 shadow-[0_0_30px_rgba(236,72,153,0.2)]
          border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
          transition-all duration-300"
                >
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full bg-[#2a2742] border border-pink-600 rounded-xl px-4 py-3 text-white
                  placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                            <input
                                type="email"
                                className="w-full bg-[#2a2742] border border-pink-600 rounded-xl px-4 py-3 text-white
                  placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-[#2a2742] border border-pink-600 rounded-xl px-4 py-3 text-white
                  placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                            <textarea
                                className="w-full bg-[#2a2742] border border-pink-600 rounded-xl px-4 py-3 h-32 resize-none text-white
                  placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                  text-white font-semibold px-10 py-3 rounded-full shadow-lg
                  hover:scale-105 transform transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Contact Info */}
                <div className="text-center mt-16 text-white/70 space-y-4">
                    <p>
                        📞 <strong>Phone:</strong> +94 711758851
                    </p>
                    <p>
                        ✉️ <strong>Email:</strong> jehankandy@gmail.com
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
