import { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export function ShaToolSection() {
  const [inputData, setInputData] = useState('Hello World!');
  const [hashOutput, setHashOutput] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate SHA256 hash
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).CryptoJS) {
      const hash = (window as any).CryptoJS.SHA256(inputData).toString();
      setHashOutput(hash);
    }
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
      title: "Always 64 Characters",
      description: "No matter the input size",
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: "Deterministic",
      description: "Same input = Same output",
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: "Avalanche Effect",
      description: "Tiny change = Big difference",
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <section id="sha-tool" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Interactive SHA256 Tool
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Try the hashing algorithm that powers blockchain security. Type anything and see how it creates a unique digital fingerprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Input Text
              </label>
              <Textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                className="w-full h-32 p-4 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none resize-none text-lg"
                placeholder="Type anything here..."
              />
            </div>

            {/* Arrow */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
                <ArrowDown className="text-white h-6 w-6" />
              </div>
              <p className="text-sm text-slate-600 mt-2">
                SHA256 Algorithm
              </p>
            </div>

            {/* Output Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Hash Output (64 characters)
              </label>
              <div className="relative">
                <Input
                  value={hashOutput}
                  readOnly
                  className="w-full p-4 pr-12 bg-slate-50 border-2 border-slate-200 rounded-xl font-mono text-sm"
                />
                <Button
                  onClick={copyToClipboard}
                  variant="ghost"
                  size="sm"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {/* Hash Properties */}
            <div className="grid md:grid-cols-3 gap-4">
              {properties.map((property, index) => (
                <div key={index} className={`${property.bgColor} p-4 rounded-xl`}>
                  <h5 className={`font-semibold ${property.textColor} mb-1`}>
                    {property.title}
                  </h5>
                  <p className="text-sm text-slate-600">
                    {property.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
