import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the data to an API)
        console.log(formData);
        alert("Message Sent!");
    };

    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                    We’d love to hear from you! Whether you have a question, want to work with us, or just want to say hello, fill out the form below and we’ll get back to you.
                </p>

                <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-4 text-lg rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 border-gray-300 focus:outline-none"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 text-lg rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 border-gray-300 focus:outline-none"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full p-4 text-lg rounded-lg shadow-md focus:ring-2 focus:ring-indigo-600 border-gray-300 focus:outline-none"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
