import React from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { COMPLIANCE } from '../constants';

const SectionDev: React.FC = () => {
  return (
    <>
      {/* API Section */}
      <div id="api" className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Code Block */}
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                    <Terminal className="text-gray-600 w-24 h-24" />
                </div>
                <div className="bg-[#252526] px-4 py-3 border-b border-black flex items-center justify-between relative z-10">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">verify-identity.js</div>
                </div>
                <div className="p-6 overflow-x-auto relative z-10">
                    <pre className="font-mono text-sm text-gray-300 leading-relaxed">
<code><span className="text-red-400">const</span> client = <span className="text-red-400">new</span> <span className="text-yellow-300">RahnIntergriGate</span>({'{\n  '}apiKey: <span className="text-green-400">'your_api_key'</span>{'\n}'});

<span className="text-gray-500">// Verify RSA ID in 3 lines</span>
<span className="text-red-400">const</span> result = <span className="text-red-400">await</span> client.verifications.<span className="text-blue-400">create</span>({'{'}
  type: <span className="text-green-400">'RSA_ID_VERIFICATION_LIVE'</span>,
  idNumber: <span className="text-green-400">'0208025422089'</span>,
  firstName: <span className="text-green-400">'Ashlin'</span>,
  lastName: <span className="text-green-400">'Govindasamy'</span>,
  faceImage: base64Image
{'}'});

console.<span className="text-blue-400">log</span>(result.confidence); <span className="text-gray-500">// 0.95</span>
console.<span className="text-blue-400">log</span>(result.riskLevel);  <span className="text-gray-500">// "LOW"</span></code>
                    </pre>
                </div>
            </div>

            {/* Content */}
            <div>
                <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-3 py-1 mb-6">
                    <Terminal className="w-4 h-4 text-brand-red" />
                    <span className="text-xs font-bold text-brand-red uppercase tracking-wide">Developer First</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Developers</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Clean REST API. Comprehensive documentation. SDKs in multiple languages. Integration takes minutes, not weeks.
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-10">
                    {['RESTful API', 'Webhook Support', 'Rate Limiting', 'Node.js SDK', 'Python SDK', 'Postman Collection'].map(item => (
                        <li key={item} className="flex items-center text-gray-700 font-medium">
                            <Check className="w-4 h-4 text-brand-red mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-4">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition">
                        Read Docs
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        View GitHub
                    </button>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900">Enterprise Grade Security</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We take data protection seriously. Your customer data is encrypted and secure.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {COMPLIANCE.map((item, idx) => (
                    <div key={idx} className="flex items-start p-6 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-red text-white">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                            <p className="mt-2 text-base text-gray-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default SectionDev;