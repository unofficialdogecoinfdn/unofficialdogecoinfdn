import { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, Dog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export function ScryptToolSection() {
  const [inputData, setInputData] = useState('Hello Dogecoin!');
  const [hashOutput, setHashOutput] = useState('');
  const [copied, setCopied] = useState(false);

  // Simple Scrypt simulation (not cryptographically secure, just for demonstration)
  const simpleScrypt = (input: string): string => {
    // This is a simplified demonstration, not actual Scrypt
    let hash = '';
    const chars = '0123456789abcdef';
    
    // Simulate memory-hard function with multiple rounds
    let workingData = input;
    for (let round = 0; round < 3; round++) {
      let tempHash = '';
      for (let i = 0; i < workingData.length; i++) {
        const charCode = workingData.charCodeAt(i);
        const index = (charCode * (round + 1) * i) % chars.length;
        tempHash += chars[index];
      }
      workingData = tempHash + workingData;
    }
    
    // Generate final 64-character hash
    for (let i = 0; i < 64; i++) {
      const index = (workingData.charCodeAt(i % workingData.length) * (i + 1)) % chars.length;
      hash += chars[index];
    }
    
    return hash;
  };

  useEffect(() => {
    const hash = simpleScrypt(inputData);
    setHashOutput(hash);
  }, [inputData]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(hashOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const properties = [
    {
      title: "Memory-Hard",
      description: "Needs lots of computer memory",
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    },
    {
      title: "Originally ASIC-Resistant",
      description: "Was designed to resist special mining hardware",
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: "Now ASIC-Dominated",
      description: "Big mining farms with special equipment control it",
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    }
  ];

  return (
    <section id="scrypt-tool" className="py-8 sm:py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Dog className="h-8 w-8 sm:h-12 sm:w-12 text-yellow-600 mr-2 sm:mr-3" />
            <h3 className="text-xl sm:text-3xl font-bold text-slate-900">
              Interactive Scrypt Tool
            </h3>
          </div>
          <p className="text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto px-2">
            Try the hashing algorithm that powers Dogecoin! See how Scrypt creates unique digital fingerprints while being more memory-intensive than SHA256.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl">
            {/* Input Section */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                Input Text
              </label>
              <Textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="w-full h-24 sm:h-32 p-3 sm:p-4 border-2 border-slate-200 rounded-xl focus:border-yellow-600 focus:outline-none resize-none text-sm sm:text-lg"
                placeholder="Type anything here..."
              />
            </div>

            {/* Arrow */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full">
                <ArrowDown className="text-white h-6 w-6" />
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Scrypt Algorithm (Dogecoin's Recipe!)
              </p>
            </div>

            {/* Output Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Scrypt Hash Output (64 characters)
              </label>
              <div className="relative">
                <Input
                  value={hashOutput}
                  readOnly
                  className="w-full p-4 pr-12 border-2 border-slate-200 rounded-xl bg-slate-50 font-mono text-sm"
                />
                <Button
                  onClick={copyToClipboard}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 h-8 w-8"
                  variant="ghost"
                  size="sm"
                >
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Scrypt Properties */}
            <div className="grid md:grid-cols-3 gap-4">
              {properties.map((property, index) => (
                <div key={index} className={`${property.bgColor} p-4 rounded-xl text-center`}>
                  <div className={`text-lg font-semibold ${property.textColor} mb-2`}>
                    {property.title}
                  </div>
                  <div className="text-sm text-slate-600">
                    {property.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Educational Note */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6">
            <h4 className="text-lg font-bold text-blue-800 mb-3">🔬 This is a Simplified Demo</h4>
            <p className="text-blue-700">
              Real Scrypt is much more complex and secure. This tool shows the basic concept of how 
              input text creates a unique hash, but actual Scrypt used in Dogecoin involves sophisticated 
              cryptographic operations and memory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}