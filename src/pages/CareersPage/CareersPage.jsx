import React from 'react';

const jobListings = [
    {
        title: "Non-Paid Internship - MERN Stack Developer",
        description:
            "Join us for an exciting internship opportunity to learn and work on real-world MERN stack projects. Gain hands-on experience with MongoDB, Express, React, and Node.js while collaborating with our expert team.",
        location: "Remote / Flexible",
        requirements: [
            "Basic understanding of JavaScript and React",
            "Willingness to learn backend technologies like Node.js and Express",
            "Familiarity with MongoDB or willingness to learn NoSQL databases",
            "Good communication skills and eagerness to grow",
            "Ability to commit at least 10-15 hours per week"
        ],
        applyLink: "mailto:jehanweerasuriya@gmail.com"
    }
];

const CareersPage = () => {
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
                <h1 className="text-5xl font-extrabold mb-4
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Careers
                </h1>
                <p className="text-xl max-w-3xl text-white/80">
                    Join our team and help us create groundbreaking solutions for our clients and the community.
                </p>
            </header>

            {/* Job Listings Section */}
            <div className="max-w-7xl mx-auto mt-14 px-6">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Open Positions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {jobListings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#1f1d3a] rounded-3xl p-6 shadow-[0_0_30px_rgba(236,72,153,0.2)]
                                border border-pink-500/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
                                transition-all duration-300 text-left"
                        >
                            <h3 className="text-xl font-semibold mb-2
                                bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                                bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                                {job.title}
                            </h3>
                            <p className="text-white/70 mb-3 text-sm">{job.description}</p>
                            <p className="text-white/50 mb-4 text-sm">Location: {job.location}</p>

                            <h4 className="text-sm font-medium text-white/80 mb-1">Requirements:</h4>
                            <ul className="list-disc list-inside text-white/70 mb-4 space-y-1 text-sm">
                                {job.requirements.map((req, i) => (
                                    <li key={i}>{req}</li>
                                ))}
                            </ul>

                            <a
                                href={job.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-cyan-400 font-semibold hover:underline text-sm"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Extra Content Below Jobs */}
            <div className="max-w-5xl mx-auto mt-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6
                    bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                    Why Join Us?
                </h2>
                <p className="text-white/80 text-lg mb-10">
                    At BlackAlphaLabs, we believe in innovation, collaboration, and creating a culture where everyone thrives.
                    Be a part of a fast-growing tech company that's transforming industries across the region.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">Perks & Benefits</h3>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
                            <li>Flexible working hours & remote options</li>
                            <li>Performance bonuses & profit sharing</li>
                            <li>Continuous learning & training opportunities</li>
                            <li>Modern tools and collaborative workflows</li>
                            <li>Friendly and supportive team culture</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-2">What We Look For</h3>
                        <ul className="list-disc list-inside text-white/70 space-y-2">
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
                    <h3 className="text-2xl font-bold mb-4
                        bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400
                        bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
                        Don't See a Role That Fits?
                    </h3>
                    <p className="text-white/70 mb-6">
                        We're always looking for passionate individuals to join our team. If you think you’d be a great fit,
                        send us your CV and let’s talk!
                    </p>
                    <a
                        href="mailto:jehanweerasuriya@gmail.com"
                        className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 
                            text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
                    >
                        Submit Your CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CareersPage;
