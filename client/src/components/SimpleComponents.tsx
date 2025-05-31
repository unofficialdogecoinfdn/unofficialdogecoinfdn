import { AlertTriangle, Brain, GraduationCap, Coins, Zap, Shield, Database, Link2 } from 'lucide-react';

// Simple Investment Warnings Component
export function SimpleInvestmentWarnings() {
  const statistics = [
    { percentage: '95%', title: 'People lose money', description: 'Most crypto investors lose their investment' },
    { percentage: '80%', title: 'Lose half or more', description: 'Of those who lose, most lose 50%+ of their money' },
    { percentage: '65%', title: 'Make emotional decisions', description: 'Fear and greed lead to poor investment choices' },
    { percentage: '40%', title: 'Quit within a year', description: 'Many give up after experiencing significant losses' }
  ];

  const messages = [
    {
      icon: AlertTriangle,
      title: 'Only invest what you can afford to lose',
      description: 'Cryptocurrency is extremely risky. Never invest money you need for living expenses.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Brain,
      title: 'Beware of cognitive biases',
      description: 'FOMO, confirmation bias, and overconfidence can lead to poor decisions.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: GraduationCap,
      title: 'Education first',
      description: 'Learn about blockchain technology without the pressure to invest.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <section id="warnings" className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-red-900 mb-4">
            Investment Reality Check
          </h3>
          <p className="text-lg text-red-700 max-w-3xl mx-auto">
            Before you consider investing in cryptocurrency, understand the real risks with actual data.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{stat.percentage}</div>
              <div className="text-sm font-semibold text-slate-900 mb-2">{stat.title}</div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="grid md:grid-cols-3 gap-6">
          {messages.map((message, index) => {
            const IconComponent = message.icon;
            return (
              <div key={index} className={`${message.bgColor} p-6 rounded-xl border-2 border-red-200`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 ${message.iconColor} rounded-full bg-white mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{message.title}</h4>
                <p className="text-slate-700">{message.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Simple Crypto Connection with Child-Friendly Scrypt Explanation
export function SimpleCryptoConnection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            How Hashing Powers Cryptocurrency
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding the simple connection between hashing and digital money like Dogecoin.
          </p>
        </div>

        {/* Simple Explanation for Kids */}
        <div className="bg-yellow-100 border-4 border-yellow-300 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <Coins className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">Dogecoin's Special Recipe (Scrypt)</h4>
            <div className="text-lg text-yellow-700 space-y-4">
              <p><strong>Imagine making cookies:</strong></p>
              <p>🍪 Bitcoin uses a simple recipe (SHA256) - like making chocolate chip cookies</p>
              <p>🐕 Dogecoin uses a different recipe called "Scrypt" - like making special doggy treats!</p>
              <p><strong>Why different recipes?</strong></p>
              <p>• Scrypt needs more "memory" (like a bigger mixing bowl)</p>
              <p>• It's harder for big companies to take over</p>
              <p>• Regular people can still "bake" (mine) Dogecoin at home</p>
              <p><strong>Both recipes do the same job:</strong> Make unique "fingerprints" for each transaction!</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
            <div className="inline-flex items-center justify-center w-12 h-12 text-orange-600 rounded-full bg-white mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Mining & Proof of Work</h4>
            <p className="text-slate-700">Miners compete to solve math puzzles. It's like a race to find the right answer first. Winner gets new coins!</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <div className="inline-flex items-center justify-center w-12 h-12 text-green-600 rounded-full bg-white mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Blockchain Security</h4>
            <p className="text-slate-700">Each block connects to the previous one. Changing old data would break the chain - nearly impossible!</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="inline-flex items-center justify-center w-12 h-12 text-blue-600 rounded-full bg-white mb-4">
              <Database className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Why It Matters</h4>
            <p className="text-slate-700">Understanding how it works helps you make smarter decisions about whether to invest (spoiler: probably don't).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple Footer Component
export function SimpleFooter() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-yellow-400 mb-2">Unofficial Dogecoin Foundation 0208</h4>
            <p className="text-slate-300 text-lg">
              Educational content about Dogecoin technology and investment risks
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 mb-6 max-w-2xl mx-auto">
            <h5 className="text-lg font-semibold mb-3 text-red-400">Important Disclaimer</h5>
            <p className="text-slate-300 text-sm leading-relaxed">
              This site is for educational purposes only. Cryptocurrency investing is extremely risky. 
              Most people lose money. We honestly recommend not investing in crypto.
            </p>
          </div>

          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Unofficial Dogecoin Foundation 0208 • Educational content only • Generated by AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}