import { Dog, Coins, Zap, Users, Clock, Shield } from 'lucide-react';

export function DogecoinTechExplainer() {
  const techFeatures = [
    {
      icon: Dog,
      title: "Based on Litecoin",
      description: "Dogecoin was created by copying Litecoin's code and changing a few settings. It's like making a photocopy and writing 'DOGE' on top!",
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Coins,
      title: "No Supply Limit",
      description: "Unlike Bitcoin (21 million max), Dogecoin creates 5 billion new coins every year forever. It's inflationary by design.",
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: Clock,
      title: "1-Minute Blocks",
      description: "New blocks are created every minute (vs Bitcoin's 10 minutes). This makes transactions faster but uses more energy.",
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Zap,
      title: "Merged Mining",
      description: "Dogecoin miners also mine Litecoin at the same time. It's like doing two puzzles with one brain!",
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "No central company controls it. Decisions are made by volunteers and the community (which can be chaotic).",
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Shield,
      title: "Same Security as Litecoin",
      description: "Since it shares mining with Litecoin, it borrows Litecoin's security. Like having a big brother protect you.",
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Dog className="h-16 w-16 text-yellow-600 mr-4" />
            <h3 className="text-3xl font-bold text-slate-900">
              How Dogecoin Actually Works
            </h3>
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding Dogecoin's technology in simple terms - no technical jargon, just the facts.
          </p>
        </div>

        {/* Simple Explanation Box */}
        <div className="bg-yellow-100 border-4 border-yellow-300 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-yellow-800 mb-4">Dogecoin in One Sentence</h4>
            <p className="text-xl text-yellow-700">
              It's basically Litecoin with a dog logo, faster blocks, and unlimited supply.
            </p>
          </div>
        </div>

        {/* Technical Features Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={`${feature.bgColor} p-6 rounded-xl border-2 ${feature.borderColor}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.iconColor} rounded-full bg-white mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Reality Check */}
        <div className="mt-12 bg-red-100 border-2 border-red-300 rounded-xl p-8 max-w-4xl mx-auto">
          <h4 className="text-xl font-bold text-red-800 mb-4">💡 The Bottom Line</h4>
          <div className="text-red-700 space-y-3">
            <p><strong>What makes it special:</strong> Fast transactions, low fees, meme culture</p>
            <p><strong>What makes it risky:</strong> Unlimited supply means inflation, volatile price, no real innovation</p>
            <p><strong>Mining reality:</strong> You can't mine it profitably at home anymore - big ASIC farms dominate</p>
            <p><strong>Honest assessment:</strong> It's fine as internet money for tips and jokes, but probably not a serious investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}