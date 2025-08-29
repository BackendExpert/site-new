import React from 'react';
import {
    ShieldCheck,
    Lock,
    Code,
    Server,
    Users,
    Lightbulb,
    Rocket,
    Smartphone,
    BookOpen,
    History,
    Upload,
    FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

const SMPage = () => {
    const features = [
        {
            id: 1,
            title: 'Authentication & Authorization',
            desc: 'Pre-configured JWT authentication, role-based access, and secure user management.',
            icon: <Lock className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 2,
            title: 'Security Middleware',
            desc: 'Helmet, CSRF (optional), rate limiting, sanitization, validation, and centralized middleware setup.',
            icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 3,
            title: 'Optimized Codebase',
            desc: 'Modern MERN + MVC architecture with clean, scalable patterns.',
            icon: <Code className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 4,
            title: 'Production Ready',
            desc: 'PM2 + Nginx configs, Docker/K8s ready, and scalable enterprise setup.',
            icon: <Server className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 5,
            title: 'Built-in Upload Middleware',
            desc: 'Profile image upload ready out-of-the-box with Multer integration.',
            icon: <Upload className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 6,
            title: 'Userlogs & Activity Tracking',
            desc: 'Built-in model + util to monitor user actions automatically.',
            icon: <FileText className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 7,
            title: 'Community Driven',
            desc: 'Built with feedback from MERN devs, solving real-world security issues.',
            icon: <Users className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 8,
            title: 'Continuous Improvements',
            desc: 'Frequent updates with patches, optimizations, and new features.',
            icon: <Lightbulb className="w-10 h-10 text-indigo-600" />,
        },
        {
            id: 9,
            title: 'Fast & Reliable',
            desc: 'Kickstart projects with a lightweight yet secure boilerplate in minutes.',
            icon: <Rocket className="w-10 h-10 text-indigo-600" />,
        },
    ];

    const releases = [
        { version: 'v1.0.0', notes: 'Initial release with authentication & RBAC.' },
        { version: 'v2.0.0', notes: 'Added email verification & password reset.' },
        { version: 'v3.0.0', notes: 'Bug fixes + no rate limits for Admin roles.' },
        { version: 'v4.0.0-beta1', notes: 'Beta release with bugs.' },
        { version: 'v4.0.0', notes: 'Stable release: Upload middleware, Userlogs model/util, bug fixes, default role=member.' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 px-6 pt-32">
            {/* Hero */}
            <motion.div 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-5">
                    🔐 Secure-MERN v4.0.0
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    A lightweight yet powerful npm package to supercharge security in MERN stack applications.
                    Secure-MERN integrates essential features with enterprise-grade best practices and minimal setup.
                </p>
            </motion.div>

            {/* Important Notice */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 mb-20 border border-gray-100 shadow-xl"
            >
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">⚠️ Important Notice</h2>
                <p className="text-lg text-gray-600 mb-4 text-center">
                    <strong>Latest Version:</strong> v4.0.0 (stable & production-ready) <br />
                    <strong>Previous Stable:</strong> v3.0.0 (still supported)
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded-xl text-center overflow-x-auto">
                    npm i secure-mern@latest
                </pre>
                <p className="text-center mt-4">
                    🔗 <a href="https://github.com/BlackAlphaLabs/Secure-MERN" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">GitHub Repository</a>
                </p>
            </motion.div>

            {/* Features */}
            <h2 className="text-4xl font-bold text-indigo-700 mb-12 text-center">✅ Features</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24">
                {features.map((item) => (
                    <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: item.id * 0.1 }}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1"
                    >
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-bold text-indigo-700 mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Releases */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 mb-20 border border-gray-100 shadow-xl"
            >
                <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center flex justify-center items-center gap-2">
                    <History className="w-8 h-8 text-indigo-600" /> Releases & Versioning
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-indigo-50">
                                <th className="p-3 text-indigo-700 font-semibold">Version</th>
                                <th className="p-3 text-indigo-700 font-semibold">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {releases.map((r, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50 transition">
                                    <td className="p-3 font-bold text-gray-700">{r.version}</td>
                                    <td className="p-3 text-gray-600">{r.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Download Options */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold text-indigo-700 mb-10">📦 Get Secure-MERN</h2>
                <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
                    <motion.div 
                        whileHover={{ scale: 1.03 }} 
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg"
                    >
                        <BookOpen className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">View on NPM</h3>
                        <a
                            href="https://www.npmjs.com/package/secure-mern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            npm install secure-mern
                        </a>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.03 }} 
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg"
                    >
                        <Smartphone className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-indigo-700 mb-2">Docs & Guides</h3>
                        <a
                            href="https://github.com/BackendExpert/secure-mern"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            View on GitHub
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="text-center pb-10">
                <p className="mt-3 text-sm text-gray-500">Free and open-source. Built with ❤️ by BlackAlphaLabs.</p>
            </div>
        </div>
    );
};

export default SMPage;
