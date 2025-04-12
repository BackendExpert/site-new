import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <section className="-mt-4 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 text-center">
            <h1 className="text-[10rem] font-extrabold drop-shadow-xl">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg md:text-xl max-w-xl mb-8 opacity-90">
                Oops! The page you're looking for doesn’t exist or has been moved.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg"
            >
                Go Home
            </button>
        </section>
    );
};

export default ErrorPage;
