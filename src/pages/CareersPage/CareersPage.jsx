import React from 'react';

const jobListings = [
    {
        title: "Full-Stack Developer",
        description: "We are looking for a talented Full-Stack Developer to join our growing team. Experience with React, Node.js, MongoDB, and Express is a must.",
        location: "Remote",
        requirements: [
            "3+ years of experience in full-stack development",
            "Proficient in JavaScript, React, Node.js",
            "Familiar with MongoDB and Express.js",
            "Experience with REST APIs and Git",
            "Strong problem-solving and debugging skills"
        ],
        applyLink: "/"
    },
    {
        title: "UI/UX Designer",
        description: "Seeking a creative UI/UX Designer who can design user-friendly, visually appealing web applications.",
        location: "On-site (Colombo, Sri Lanka)",
        requirements: [
            "2+ years of experience in UI/UX design",
            "Proficient in Figma, Sketch, or Adobe XD",
            "Strong portfolio showcasing past work",
            "Knowledge of responsive and accessible design",
            "Excellent communication and collaboration skills"
        ],
        applyLink: "/"
    },
    {
        title: "Backend Developer",
        description: "Looking for a Backend Developer with expertise in server-side logic, API design, and database management.",
        location: "Remote",
        requirements: [
            "Strong knowledge of Node.js and Express.js",
            "Experience with MongoDB or MySQL",
            "Understanding of API development and security",
            "Familiarity with version control (Git)",
            "Problem-solving mindset"
        ],
        applyLink: "/"
    },
    {
        title: "Marketing Manager",
        description: "We need a driven Marketing Manager to help grow our brand. Experience in digital marketing, SEO, and content strategy is essential.",
        location: "On-site (Colombo, Sri Lanka)",
        requirements: [
            "3+ years of marketing experience",
            "Expertise in digital marketing strategies",
            "Knowledge of SEO, Google Ads, and analytics tools",
            "Experience managing social media and content teams",
            "Strong analytical and leadership skills"
        ],
        applyLink: "/"
    },
];

const CareersPage = () => {
    return (
        <section className="-mt-4 mb-8">
            {/* Header with Gradient */}
            <header className="h-[70vh] bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 flex flex-col justify-center items-center text-white px-4 text-center">
                <h1 className="text-5xl font-extrabold mb-4">Careers</h1>
                <p className="text-xl max-w-3xl mx-auto">
                    Join our team and help us create groundbreaking solutions for our clients and the community.
                </p>
            </header>

            {/* Job Listings Section */}
            <div className="max-w-7xl mx-auto text-center mt-14">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Open Positions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {jobListings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 text-left"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                                <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                                <p className="text-sm text-gray-500 mb-4">Location: {job.location}</p>

                                <h4 className="text-sm font-medium text-gray-700 mb-1">Requirements:</h4>
                                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                                    {job.requirements.map((req, i) => (
                                        <li key={i}>{req}</li>
                                    ))}
                                </ul>

                                <a
                                    href={job.applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-teal-600 font-medium hover:underline text-sm"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Extra Content Below Jobs */}
            <div className="max-w-5xl mx-auto mt-20 px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Join Us?</h2>
                <p className="text-lg text-gray-600 mb-10">
                    At BlackAlphaLabs, we believe in innovation, collaboration, and creating a culture where everyone thrives.
                    Be a part of a fast-growing tech company that's transforming industries across the region.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h3 className="text-xl font-semibold text-teal-600 mb-2">Perks & Benefits</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Flexible working hours & remote options</li>
                            <li>Performance bonuses & profit sharing</li>
                            <li>Continuous learning & training opportunities</li>
                            <li>Modern tools and collaborative workflows</li>
                            <li>Friendly and supportive team culture</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-teal-600 mb-2">What We Look For</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Passion for technology and growth</li>
                            <li>Strong communication and teamwork skills</li>
                            <li>Ability to solve real-world problems</li>
                            <li>Curiosity and a desire to innovate</li>
                            <li>Respect for deadlines and accountability</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Don't See a Role That Fits?</h3>
                    <p className="text-gray-600 mb-6">
                        We're always looking for passionate individuals to join our team. If you think you’d be a great fit,
                        send us your CV and let’s talk!
                    </p>
                    <a
                        href="mailto:jehanweerasuriya@gmail.com"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full transition duration-300"
                    >
                        Submit Your CV
                    </a>
                </div>
            </div>

        </section>
    );
};

export default CareersPage;
