import React from 'react';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

const SectionPricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-brand-slate py-24 text-white relative overflow-hidden">
        {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">
            Transparent, Pay-As-You-Go
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
             Only pay for successful verifications. No monthly fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
            {PRICING.map((tier, idx) => (
                <div 
                    key={idx} 
                    className={`relative rounded-2xl p-8 transition-transform hover:-translate-y-2 ${
                        tier.highlight 
                        ? 'bg-gradient-to-b from-red-900 to-red-950 border-2 border-red-500 shadow-2xl shadow-red-900/50 scale-105 z-10' 
                        : 'bg-white/5 border border-white/10'
                    }`}
                >
                    {tier.highlight && (
                        <div className="absolute top-0 right-0 -mt-3 mr-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white uppercase tracking-wider shadow-lg">
                                Most Popular
                            </span>
                        </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{tier.audience}</p>
                    <div className="my-6">
                        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {tier.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start">
                                <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${tier.highlight ? 'text-red-400' : 'text-gray-500'}`} />
                                <span className="text-gray-300 text-sm">{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors ${
                        tier.highlight 
                        ? 'bg-brand-red hover:bg-red-600 text-white shadow-lg shadow-red-500/30' 
                        : 'bg-white text-gray-900 hover:bg-gray-200'
                    }`}>
                        {tier.cta}
                    </button>
                </div>
            ))}
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
            All prices in ZAR ex VAT.
        </div>

      </div>
    </div>
  );
};

export default SectionPricing;