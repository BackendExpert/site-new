import React from 'react';

const ContactUs = () => {
    return (
        <section className="-mt-4 mb-16">
            {/* Header with Gradient */}
            <header className="h-[70vh] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    We’d love to hear from you! Whether you have a question about services, pricing, careers, or anything else, our team is ready to answer all your questions.
                </p>
            </header>

            {/* Contact Section */}
            <div className="max-w-4xl mx-auto mt-16 px-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Subject"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-xl px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <div className="col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white font-medium px-8 py-3 rounded-xl hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-16 text-gray-700 space-y-4">
                    <p>
                        📞 <strong>Phone:</strong> +94 711758851
                    </p>
                    <p>
                        ✉️ <strong>Email:</strong> jehankandy@gmail.com
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
