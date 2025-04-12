import React, { useState, useEffect } from "react";
import logo from '../../assets/blalogo2.PNG';
import img1 from '../../assets/sdimg.png';
import img2 from '../../assets/sdimg2.png';

const dummyImages = [
    {
        title: "Innovate with Confidence",
        imgdesc: "We craft scalable and modern software solutions to drive your business forward.",
        link: "#services",
        image: logo
    },
    {
        title: "Empowering Startups",
        imgdesc: "From idea to launch, we help your startup shine with tailored tech stacks.",
        link: "#about",
        image: img1
    },
    {
        title: "Cloud Ready Solutions",
        imgdesc: "Automated, secure, and future-proof cloud deployments for every team.",
        link: "#contact",
        image: img2
    },
    {
        title: "AI-Driven Growth",
        imgdesc: "Harnessing artificial intelligence to push the boundaries of innovation.",
        link: "#ai",
        image: img1
    },
    {
        title: "Blockchain Revolution",
        imgdesc: "Transforming businesses with decentralized solutions and blockchain technology.",
        link: "#blockchain",
        image: img2
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? dummyImages.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyImages.length);
    };

    return (
        <div className="relative w-full h-[80vh] bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 overflow-hidden flex items-center justify-center">
            <div className="xl:mx-16 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between w-full">
                {/* Text and Button Section */}
                <div className="text-center md:text-left md:w-1/2 text-white">
                    <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
                        {dummyImages[currentIndex]?.title}
                    </h1>
                    <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto md:mx-0">
                        {dummyImages[currentIndex]?.imgdesc}
                    </p>
                    {dummyImages[currentIndex]?.link && (
                        <a
                            href={dummyImages[currentIndex].link}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base font-medium rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Learn More
                        </a>
                    )}
                </div>

                {/* Image Section */}
                <div className="mt-8 md:mt-0 xl:block hidden md:w-1/3"> {/* Reduced width here */}
                    <img
                        src={dummyImages[currentIndex]?.image}
                        alt={dummyImages[currentIndex]?.title}
                        className="w-full h-auto object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110"
                    />
                </div>
            </div>

            {/* Left Arrow */}
            <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 shadow-md p-4 rounded-full transition-all z-30"
                onClick={prevSlide}
                aria-label="Previous"
            >
                &#10094;
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 shadow-md p-4 rounded-full transition-all z-30"
                onClick={nextSlide}
                aria-label="Next"
            >
                &#10095;
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {dummyImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full transition-all ${
                            currentIndex === index
                                ? "bg-purple-500 scale-125"
                                : "bg-gray-300"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
