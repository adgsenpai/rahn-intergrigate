import React from 'react';
import { Shield, Linkedin, Twitter, Github, Youtube } from 'lucide-react';
import { FAQS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-slate text-gray-400 border-t border-gray-800">
        
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-800">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-900/30 transition-colors">
                        <h4 className="text-lg font-semibold text-white mb-2">{faq.q}</h4>
                        <p className="text-gray-400">{faq.a}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <a href="#" className="text-brand-red font-medium hover:underline">View All FAQs →</a>
            </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-red to-red-900 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Onboarding?</h2>
                <p className="text-red-100 text-lg mb-8">Get started with 100 free verification credits. No credit card required.</p>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white text-brand-red font-bold py-3 px-8 rounded-lg shadow hover:bg-gray-100 transition">
                        Create Free Account
                    </button>
                    <button className="border border-white/30 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition">
                        Schedule Demo
                    </button>
                </div>
            </div>
        </div>

        {/* Main Footer Links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
                <div className="flex items-center text-white font-bold text-xl mb-4">
                    <Shield className="w-6 h-6 mr-2 text-brand-red" />
                    Rahn IntergriGate
                </div>
                <p className="text-sm text-gray-500 mb-6 max-w-xs">
                    Seamless Verification. Uncompromising Integrity. Your gateway to compliant customer onboarding in South Africa.
                </p>
                <div className="flex space-x-4">
                    <Linkedin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                </div>
            </div>
            
            <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-red transition-colors">Verifications</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">API Docs</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Status</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Case Studies</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Compliance Guides</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Support</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">POPIA Notice</a></li>
                    <li><a href="#" className="hover:text-brand-red transition-colors">Security</a></li>
                </ul>
            </div>
        </div>
        
        <div className="bg-black py-6 text-center text-xs text-gray-600">
            &copy; 2026 Rahn IntergriGate. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;