import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Book, FileText, Globe, Mail, MapPin, Phone } from 'lucide-react';

// --- Reusable Page Layout ---
const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-brand-slate py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
                {title}
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
        </div>
    </div>
);

export const DocsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader title="API Documentation" subtitle="Integrate Rahn IntergriGate into your application in minutes." />
            <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Sidebar */}
                <div className="hidden lg:block space-y-2 border-r border-gray-200 pr-8">
                    <div className="font-bold text-gray-900 mb-2">Getting Started</div>
                    <div className="text-brand-red font-medium pl-3 border-l-2 border-brand-red cursor-pointer">Introduction</div>
                    <div className="text-gray-600 pl-3 hover:text-gray-900 cursor-pointer">Authentication</div>
                    <div className="text-gray-600 pl-3 hover:text-gray-900 cursor-pointer">Rate Limits</div>
                    <div className="font-bold text-gray-900 mt-6 mb-2">Resources</div>
                    <div className="text-gray-600 pl-3 hover:text-gray-900 cursor-pointer">Verifications</div>
                    <div className="text-gray-600 pl-3 hover:text-gray-900 cursor-pointer">Webhooks</div>
                    <div className="text-gray-600 pl-3 hover:text-gray-900 cursor-pointer">Reports</div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The Rahn IntergriGate API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                        </p>
                        <div className="bg-gray-900 rounded-lg p-6 text-sm font-mono text-gray-300">
                            <div className="flex items-center space-x-2 text-gray-500 mb-2 border-b border-gray-800 pb-2">
                                <Terminal className="w-4 h-4" />
                                <span>Base URL</span>
                            </div>
                            <span className="text-green-400">https://api.rahnintergrigate.co.za/v1</span>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
                        <p className="text-gray-600 mb-4">
                            Authenticate your API requests by including your secret API key in the <code>Authorization</code> header of every request.
                        </p>
                        <div className="bg-gray-100 p-4 border-l-4 border-brand-red">
                            <p className="text-sm text-gray-700"><strong>Note:</strong> Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, etc.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader title="About Us" subtitle="Building the trust layer for the African digital economy." />
            <div className="max-w-4xl mx-auto px-4 py-20 space-y-12 text-lg text-gray-600 leading-relaxed">
                <p>
                    Founded in 2024, Rahn IntergriGate was born from a simple observation: Trust is the currency of the internet, but verifying identity in Africa is broken. Legacy systems, paper trails, and fragmented databases make it impossible for businesses to scale quickly while remaining compliant.
                </p>
                <p>
                    We built the infrastructure to solve this. By aggregating data from CIPC, Department of Home Affairs, credit bureaus, and global sanctions lists into a single, high-speed API, we empower companies to onboard customers in seconds, not days.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 py-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8 text-brand-red" />
                        </div>
                        <h3 className="font-bold text-gray-900">Pan-African Vision</h3>
                        <p className="text-sm mt-2">Starting in South Africa, expanding across the continent.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8 text-brand-red" />
                        </div>
                        <h3 className="font-bold text-gray-900">Compliance First</h3>
                        <p className="text-sm mt-2">POPIA, GDPR, and FICA compliant by design.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Terminal className="w-8 h-8 text-brand-red" />
                        </div>
                        <h3 className="font-bold text-gray-900">Developer Centric</h3>
                        <p className="text-sm mt-2">Built by engineers, for engineers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <PageHeader title="Contact Sales" subtitle="Get in touch with our team to discuss your enterprise needs." />
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-900">Get in touch</h3>
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-brand-red mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Headquarters</p>
                                <p className="text-gray-600">1 Sandton Drive, Sandton<br/>Johannesburg, 2196<br/>South Africa</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Mail className="w-6 h-6 text-brand-red mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Email</p>
                                <p className="text-gray-600">sales@rahnintergrigate.co.za</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <Phone className="w-6 h-6 text-brand-red mt-1" />
                            <div>
                                <p className="font-semibold text-gray-900">Phone</p>
                                <p className="text-gray-600">+27 10 555 0123</p>
                            </div>
                        </div>
                    </div>

                    <form className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                            <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"></textarea>
                        </div>
                        <button className="w-full bg-brand-red text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export const PlaceholderPage: React.FC<{name: string}> = ({name}) => (
    <div className="min-h-screen bg-white">
        <PageHeader title={name} subtitle="Coming Soon" />
        <div className="py-24 text-center">
            <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">This page is under construction.</p>
            <div className="mt-8">
                <a href="/" className="text-brand-red font-semibold hover:underline">Return Home</a>
            </div>
        </div>
    </div>
);