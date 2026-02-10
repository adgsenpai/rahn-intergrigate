import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES_DEEP_DIVE, USE_CASES } from '../constants';
import { ArrowRight, Check, MessageSquare, Mail, Bell, User, FileText, CheckCircle2, AlertTriangle, Smartphone, Shield, MousePointer2, Loader2, FileCheck } from 'lucide-react';

// --- Feature 1: Automation Widget ---
const AutomationWidget = () => {
  return (
    <div className="relative w-full h-[350px] bg-gray-900 rounded-xl border border-gray-800 overflow-hidden p-6 flex items-center justify-center">
        {/* Abstract Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
            <path d="M50,175 L350,175" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M200,175 L200,280 L350,280" stroke="#DC2626" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        <div className="relative z-10 w-full max-w-sm space-y-6">
            {/* Trigger Event */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 p-4 rounded-lg border-l-4 border-brand-red shadow-lg flex items-center justify-between"
            >
                <div>
                    <div className="text-xs text-gray-400 mb-1">Trigger: Document Uploaded</div>
                    <div className="text-sm font-semibold text-white">KYC Status: Pending</div>
                </div>
                <FileText className="text-gray-500 w-5 h-5" />
            </motion.div>

            {/* Processing Node */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center"
            >
                <div className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-xs font-mono border border-brand-red/20 animate-pulse">
                    PROCESSING RULES...
                </div>
            </motion.div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-4">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex items-center space-x-3"
                >
                    <div className="bg-green-500/20 p-2 rounded-full">
                        <MessageSquare className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                        <div className="text-xs text-white font-medium">WhatsApp</div>
                        <div className="text-[10px] text-gray-400">Sent: "ID Received"</div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.0 }}
                    className="bg-gray-800 p-3 rounded-lg border border-gray-700 flex items-center space-x-3"
                >
                    <div className="bg-blue-500/20 p-2 rounded-full">
                        <Mail className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                        <div className="text-xs text-white font-medium">Email Team</div>
                        <div className="text-[10px] text-gray-400">Notify Compliance</div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  );
};

// --- Feature 2: Manual Review Widget ---
const ManualReviewWidget = () => {
    const [status, setStatus] = useState<'pending' | 'approved'>('pending');

    useEffect(() => {
        const timer = setInterval(() => {
            setStatus(prev => prev === 'pending' ? 'approved' : 'pending');
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[350px] bg-gray-900 rounded-xl border border-gray-800 overflow-hidden p-6 flex flex-col items-center justify-center">
            <div className="bg-gray-800 w-full max-w-xs rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                {/* Header */}
                <div className="bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
                    <span className="text-xs font-mono text-gray-400">CASE #8992</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-green-500/20 text-green-500'}`}>
                        {status === 'pending' ? 'NEEDS REVIEW' : 'VERIFIED'}
                    </span>
                </div>
                {/* Body */}
                <div className="p-4 space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                            <User className="text-gray-400 w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                            <div className="text-xs text-gray-500">ID: 900124 0058 083</div>
                        </div>
                    </div>
                    
                    <div className="bg-gray-900/50 p-3 rounded border border-gray-700/50">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-400">Face Match</span>
                            <span className="text-xs text-red-400 font-bold">88% (Low Conf)</span>
                        </div>
                        <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full w-[88%]"></div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                         <motion.button 
                            className="flex-1 bg-red-600 hover:bg-red-500 text-white text-xs font-bold py-2 rounded transition-colors"
                            whileTap={{ scale: 0.95 }}
                         >
                            Reject
                         </motion.button>
                         <motion.button 
                            className={`flex-1 text-white text-xs font-bold py-2 rounded transition-colors ${status === 'approved' ? 'bg-green-600' : 'bg-gray-700'}`}
                            animate={{ scale: status === 'approved' ? [1, 1.05, 1] : 1 }}
                         >
                            {status === 'approved' ? 'Approved' : 'Approve'}
                         </motion.button>
                    </div>
                </div>
            </div>
            
            {/* Fake Cursor Animation */}
            <motion.div 
                className="absolute"
                animate={{ 
                    x: status === 'pending' ? 60 : 120, 
                    y: status === 'pending' ? 80 : 120,
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ duration: 4, times: [0, 0.2, 0.8, 1], repeat: Infinity }}
            >
                <MousePointer2 className="w-6 h-6 text-white fill-black drop-shadow-lg" />
            </motion.div>
        </div>
    );
};

// --- Feature 3: Onboarding Widget ---
const OnboardingWidget = () => {
    return (
        <div className="relative w-full h-[350px] bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center">
            {/* Phone Frame */}
            <div className="w-[180px] h-[300px] bg-black rounded-3xl border-4 border-gray-700 shadow-2xl overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-white flex flex-col relative z-10 pt-8 px-4">
                    {/* Brand Header */}
                    <div className="flex items-center justify-center mb-6">
                         <div className="w-6 h-6 bg-brand-red rounded flex items-center justify-center text-white">
                            <Shield className="w-3 h-3" />
                         </div>
                         <span className="text-brand-red font-bold ml-1 text-xs">Identity</span>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-800">1. Scan ID</span>
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                            </div>
                            <div className="h-1 w-full bg-gray-100 rounded">
                                <div className="h-full w-full bg-green-500 rounded"></div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold text-gray-800">2. Liveness</span>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    <Loader2 className="w-3 h-3 text-brand-red" />
                                </motion.div>
                            </div>
                            <div className="h-1 w-full bg-gray-100 rounded">
                                <motion.div 
                                    className="h-full bg-brand-red rounded"
                                    animate={{ width: ["0%", "80%"] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </div>
                        
                        <div className="pt-2">
                             <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-hidden">
                                <User className="text-gray-300 w-8 h-8" />
                                {/* Scanner Line */}
                                <motion.div 
                                    className="absolute top-0 left-0 w-full h-0.5 bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]"
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                             </div>
                             <p className="text-[9px] text-center text-gray-400 mt-2">Align your face within the frame</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Feature 4: Reports Widget ---
const ReportsWidget = () => {
    return (
        <div className="relative w-full h-[350px] bg-gray-900 rounded-xl border border-gray-800 overflow-hidden flex items-center justify-center p-8">
            <motion.div 
                className="w-[240px] h-[300px] bg-white rounded-lg shadow-2xl relative overflow-hidden flex flex-col"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Report Header */}
                <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                     <div className="flex items-center">
                        <FileCheck className="w-4 h-4 text-brand-red mr-2" />
                        <span className="text-[10px] font-bold text-gray-700 uppercase">Compliance Report</span>
                     </div>
                     <span className="text-[8px] text-gray-400">PDF</span>
                </div>

                {/* Report Content */}
                <div className="p-4 space-y-3 flex-grow">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="space-y-1">
                                <div className="w-16 h-1.5 bg-gray-200 rounded"></div>
                                <div className="w-10 h-1.5 bg-gray-100 rounded"></div>
                            </div>
                            <div className="flex items-center text-[10px] font-bold text-green-600">
                                <span className="mr-1">PASS</span>
                                <CheckCircle2 className="w-3 h-3" />
                            </div>
                        </div>
                    ))}
                    <div className="pt-4 border-t border-gray-100 mt-4">
                        <div className="flex justify-between items-center">
                             <span className="text-xs font-bold text-gray-800">Risk Score</span>
                             <span className="text-sm font-bold text-green-600">LOW</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 mt-2 rounded-full overflow-hidden">
                             <motion.div 
                                className="h-full bg-green-500"
                                initial={{ width: "0%" }}
                                whileInView={{ width: "95%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                             />
                        </div>
                    </div>
                </div>

                {/* Stamp */}
                <motion.div 
                    initial={{ scale: 2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    className="absolute bottom-8 right-4 w-20 h-20 border-4 border-red-600 rounded-full flex items-center justify-center transform -rotate-12 opacity-80"
                >
                    <span className="text-red-600 font-bold text-xs uppercase text-center leading-tight">Verified<br/>Approved</span>
                </motion.div>
            </motion.div>
        </div>
    );
};


const SectionFeatures: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Alternating Features */}
        <div className="space-y-24 md:space-y-32">
          {FEATURES_DEEP_DIVE.map((feature, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                    {feature.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center text-gray-700">
                            <span className="h-5 w-5 rounded-full bg-red-100 text-brand-red flex items-center justify-center mr-3">
                                <Check className="w-3 h-3" />
                            </span>
                            {bullet}
                        </li>
                    ))}
                </ul>
                <div className="pt-4">
                    <button className="text-brand-red font-semibold flex items-center hover:underline">
                        {feature.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                 {/* Feature Widget Switching Logic */}
                 {idx === 0 && <AutomationWidget />}
                 {idx === 1 && <ManualReviewWidget />}
                 {idx === 2 && <OnboardingWidget />}
                 {idx === 3 && <ReportsWidget />}
              </motion.div>

            </div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="mt-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Built for Every Industry</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {USE_CASES.map((uc, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg hover:shadow-red-900/10 transition-all border border-gray-100 group">
                        <div className="h-12 w-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-red mb-6 border border-gray-100 group-hover:bg-red-50 transition-colors">
                            <uc.icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h4>
                        <p className="text-gray-600">{uc.desc}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default SectionFeatures;