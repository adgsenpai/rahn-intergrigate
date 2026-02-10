import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-brand-slate relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-800 rounded-full blur-[100px]"></div>
       </div>

       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="relative z-10 w-full max-w-md bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-red-900/30 shadow-2xl"
       >
          <div className="text-center mb-8">
              <div className="mx-auto w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-white w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-400 text-sm mt-2">Sign in to your Rahn IntergriGate dashboard</p>
          </div>

          <form className="space-y-6">
              <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Email Address</label>
                  <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                      <input 
                        type="email" 
                        placeholder="you@company.com" 
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                  </div>
              </div>
              
              <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs font-semibold text-gray-400 uppercase">Password</label>
                    <a href="#" className="text-xs text-brand-red hover:underline">Forgot password?</a>
                  </div>
                  <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                      <input 
                        type="password" 
                        placeholder="••••••••" 
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                      />
                  </div>
              </div>

              <button className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg shadow-red-900/20 transition-all flex items-center justify-center group">
                  Sign In
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
             <p className="text-gray-500 text-sm">Don't have an account? <Link to="/register" className="text-brand-red font-semibold hover:underline">Sign up</Link></p>
          </div>
       </motion.div>
    </div>
  );
};

export const Register: React.FC = () => {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-brand-slate relative overflow-hidden">
         {/* Background */}
         <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950 rounded-full blur-[150px]"></div>
         </div>
  
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative z-10 w-full max-w-lg bg-black/60 backdrop-blur-md p-8 rounded-2xl border border-red-900/30 shadow-2xl"
         >
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Create Account</h2>
                <p className="text-gray-400 mt-2">Get 100 free verifications when you start.</p>
            </div>
  
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">First Name</label>
                        <input type="text" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:border-red-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Last Name</label>
                        <input type="text" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:border-red-500 focus:outline-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Work Email</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                        <input type="email" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:border-red-500 focus:outline-none" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                        <input type="password" className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:border-red-500 focus:outline-none" />
                    </div>
                </div>

                <div className="pt-2">
                    <button className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all">
                        Create Free Account
                    </button>
                </div>
                
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-gray-700"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">OR CONTINUE WITH</span>
                    <div className="flex-grow border-t border-gray-700"></div>
                </div>

                <button type="button" className="w-full bg-white text-gray-900 font-bold py-3 rounded-lg shadow hover:bg-gray-100 transition-all flex items-center justify-center">
                   <Github className="w-5 h-5 mr-2" />
                   GitHub
                </button>
            </form>
  
            <div className="mt-6 text-center">
               <p className="text-gray-500 text-sm">Already have an account? <Link to="/login" className="text-brand-red font-semibold hover:underline">Sign in</Link></p>
            </div>
         </motion.div>
      </div>
    );
  };