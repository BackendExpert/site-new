import React from 'react';
import {
    BookOpen,
    Code,
    Users,
    Lightbulb,
    Rocket,
    Server,
    ArrowRight,
    Globe,
    ShieldCheck,
    Download,
    Smartphone,
    MonitorSmartphone,
} from 'lucide-react';

const LearningHub = () => {
    const features = [
        {
            id: 1,
            title: 'Quick Tech Knowledge',
            desc: 'Instantly access tutorials, coding tips, frameworks, and database guides, all designed to save you time.',
            icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 2,
            title: 'Developer-Friendly Tools',
            desc: 'Curated resources made by developers for developers — no ads, no distractions, just value.',
            icon: <Code className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 3,
            title: 'South Asian Tech Focus',
            desc: 'The only hub dedicated to empowering developers across South Asia with regional tools and insights.',
            icon: <Globe className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 4,
            title: 'Built with Performance',
            desc: 'Optimized for speed, reliability, and scalability — built using modern MERN and MVC architecture.',
            icon: <Server className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 5,
            title: 'Secure & Private',
            desc: 'No data selling or invasive tracking. Learning Hub prioritizes your privacy and security.',
            icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 6,
            title: 'Community Collaboration',
            desc: 'Built with feedback from students, freelancers, and enterprise developers to match real-world needs.',
            icon: <Users className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 7,
            title: 'Continuous Updates',
            desc: 'Constantly evolving with new resources, frameworks, and tools added every month.',
            icon: <Lightbulb className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 8,
            title: 'Built for Speed',
            desc: 'Lightweight, minimal, and modern — get what you need faster without waiting.',
            icon: <Rocket className="w-10 h-10 text-indigo-600" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-8 pt-32">
            {/* Hero */}
            <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-5">
                    Welcome to the Learning Hub
                </h1>
                <p className="text-2xl text-gray-700 font-medium mb-4">by BlackalphaLabs</p>
                <p className="text-gray-500 max-w-3xl mx-auto text-lg">
                    Your centralized, high-performance tech knowledge platform — built for South Asian developers seeking fast, reliable, developer-focused resources.
                </p>
            </div>

            {/* About */}
            <div className="bg-white rounded-3xl p-10 mb-20 border border-gray-100 shadow-xl">
                <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">About This Release</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
                    Learning Hub by <span className="font-semibold text-indigo-600">BlackalphaLabs</span> is a modern, mobile and desktop-friendly web platform designed specifically for developers, students, and tech enthusiasts. This is the <span className="font-semibold">initial release</span> of Learning Hub, focusing entirely on <span className="font-semibold text-indigo-600">web development using the MERN stack</span>.
                </p>

                <h3 className="text-2xl font-bold text-indigo-700 mt-8 mb-4">Current Features</h3>
                <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                    <li>Browse categorized, quick-access tech resources curated by developers.</li>
                    <li>Instantly view guides, frameworks, database references, and deployment tutorials for MERN projects.</li>
                    <li>Responsive, clean and attractive UI optimized for mobile and desktop browsers.</li>
                    <li>Strictly view-only access for public users. Only authorized platform developers can add or manage resources for now.</li>
                </ul>

                <h3 className="text-2xl font-bold text-indigo-700 mt-8 mb-4">Planned Future Updates</h3>
                <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                    <li>Add support for other tech stacks like <span className="font-semibold text-indigo-600">Python, Django, Java, PHP, and Go</span>.</li>
                    <li>Expand categories to cover UI/UX, cloud hosting, DevOps, security, AI, and more.</li>
                    <li>Implement a <span className="font-semibold">user-submitted Q&A section</span>.</li>
                    <li>Introduce public contributor access for verified developers.</li>
                    <li>Continuous monthly resource updates.</li>
                </ul>
            </div>

            {/* Features */}
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-24">
                {features.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 group">
                        <div className="mb-4">{item.icon}</div>
                        <h2 className="text-2xl font-bold text-indigo-700 mb-3">{item.title}</h2>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Download Options */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-indigo-700 mb-6">Get the App</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition duration-300">
                        <Smartphone className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Download Android APK</h3>
                        <a href="#" className="text-indigo-600 font-semibold hover:underline">Get APK</a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition duration-300">
                        <MonitorSmartphone className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Download for Windows</h3>
                        <a href="#" className="text-indigo-600 font-semibold hover:underline">Get EXE</a>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition duration-300">
                        <BookOpen className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Continue on Web</h3>
                        <a href="#" className="text-indigo-600 font-semibold hover:underline">Open Learning Hub</a>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
                <a href="#" className="inline-flex items-center gap-2 px-10 py-5 text-xl font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg hover:scale-105">
                    Start Exploring
                    <ArrowRight className="w-6 h-6" />
                </a>
                <p className="mt-3 text-sm text-gray-500">No signup required. Free and open 24/7.</p>
            </div>
        </div>
    );
};

export default LearningHub;
