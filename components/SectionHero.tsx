import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Globe, PlayCircle, Server, User, ScanLine, CheckCircle2 } from 'lucide-react';
import { STATS } from '../constants';

const VerificationDemo: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500); // Cycle every 2.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-gray-900 rounded-xl border border-red-900/50 shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="bg-black/50 px-4 py-2 border-b border-red-900/30 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
        </div>
        <div className="text-xs font-mono text-red-400">LIVE_VERIFICATION_PROTOCOL</div>
      </div>

      <div className="p-8 min-h-[300px] flex flex-col items-center justify-center relative">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div
              key="scan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 rounded-lg bg-gray-800 overflow-hidden border border-red-500/30 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                 {/* Fake Face Image */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <User className="w-20 h-20 text-gray-600" />
                 </div>
                 {/* Scanning Laser */}
                 <motion.div 
                    className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)] z-10"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                 />
                 <div className="absolute inset-0 bg-red-900/10 grid grid-cols-4 grid-rows-4">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-red-500/10"></div>
                    ))}
                 </div>
              </div>
              <p className="mt-4 text-red-400 font-mono text-sm animate-pulse">Scanning Biometrics...</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="server"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <div className="flex space-x-4 mb-4">
                 {[...Array(3)].map((_, i) => (
                    <motion.div 
                        key={i}
                        initial={{ height: 20 }}
                        animate={{ height: [20, 60, 30, 80, 20] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                        className="w-4 bg-red-600 rounded-sm shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                    />
                 ))}
              </div>
              <Server className="w-16 h-16 text-red-500 mb-2" />
              <p className="mt-4 text-red-400 font-mono text-sm">Querying Databases...</p>
              <div className="text-xs text-red-800 font-mono mt-2 space-y-1">
                 <div>{'>'} CIPC: CHECKING</div>
                 <div>{'>'} HOME AFFAIRS: CHECKING</div>
                 <div>{'>'} SANCTIONS: CLEAR</div>
              </div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring" }}
                className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-1">Identity Verified</h3>
              <p className="text-green-400 font-mono text-sm">Confidence Score: 99.8%</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-gray-800 mt-auto">
        <motion.div 
            className="h-full bg-red-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 7.5, ease: "linear", repeat: Infinity }}
        />
      </div>
    </div>
  );
};

const SectionHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-maroon via-black to-red-950 overflow-hidden pb-16 lg:pb-24 pt-32 lg:pt-40">
      
      {/* Background Abstract Shapes - RED THEME */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[100px] mix-blend-screen opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-red rounded-full blur-[120px] mix-blend-screen opacity-20"></div>
        <div className="absolute -bottom-32 right-1/2 w-96 h-96 bg-red-800 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 bg-red-900/30 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 border border-red-500/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-red-300">System Status: Operational</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Stop Fraud. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-orange-400">
              Verify Instantly.
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The most aggressive identity verification platform in South Africa. 
            Real-time checks against CIPC, Home Affairs, and Global Watchlists.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              Start Verification Free →
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2">
              <PlayCircle size={20} className="text-red-500" />
              Live Demo
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center space-x-6 text-sm font-medium text-gray-500">
            <span className="flex items-center hover:text-red-400 transition-colors"><ShieldCheck className="w-4 h-4 mr-1.5" /> POPIA Compliant</span>
            <span className="flex items-center hover:text-red-400 transition-colors"><Lock className="w-4 h-4 mr-1.5" /> AES-256 Encryption</span>
            <span className="flex items-center hover:text-red-400 transition-colors"><Globe className="w-4 h-4 mr-1.5" /> 99.9% Uptime</span>
          </div>
        </motion.div>

        {/* Dynamic Verification Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 w-full"
        >
            <VerificationDemo />
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 mt-20 border-t border-red-900/20 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-red-900/30">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                        <span className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
                        <span className="text-sm md:text-base text-red-300/70">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;