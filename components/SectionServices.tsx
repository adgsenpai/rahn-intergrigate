import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const SectionServices: React.FC = () => {
  return (
    <div id="solutions" className="bg-white py-24">
      
      {/* Problem Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer Onboarding Shouldn't Be This Hard</h2>
                <div className="space-y-4">
                    {[
                        "Manual verification takes hours or days",
                        "Compliance risks with incomplete checks",
                        "Fragmented tools across multiple vendors",
                        "High per-verification costs",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-600">
                            <XCircle className="text-brand-red w-5 h-5 flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-semibold text-brand-red mb-4">The Rahn Advantage</h3>
                <p className="text-gray-600 mb-6">One platform. Every verification. Instant results.</p>
                <div className="space-y-4">
                    {[
                         "Sub-2-second response times",
                         "99.8% uptime SLA",
                         "Instant webhook notifications",
                         "RESTful API & SDKs"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-800 font-medium">
                            <CheckCircle2 className="text-green-600 w-5 h-5 flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Verification Types</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Full Spectrum Identity Assurance
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    A comprehensive suite of checks available via API or Dashboard.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((service, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:shadow-red-900/5 hover:border-red-100 transition-all duration-300 flex flex-col"
                    >
                        <div className={`h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 ${service.color}`}>
                            <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">{service.description}</p>
                        <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-4">
                            <span className="text-sm font-semibold text-brand-red bg-red-50 px-2 py-1 rounded">{service.price}</span>
                            <a href="#" className="text-gray-900 text-sm font-medium hover:text-brand-red hover:underline flex items-center transition-colors">
                                Learn more <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                <button className="text-brand-red font-semibold hover:text-red-800 flex items-center justify-center mx-auto space-x-2">
                    <span>View Full API Documentation</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServices;