import { Database, Link2, Shield } from 'lucide-react';

export function BlockchainBasics() {
  const steps = [
    {
      icon: Database,
      title: "1. Store Data",
      description: "Information is stored in blocks, like pages in a book.",
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Link2,
      title: "2. Chain Together",
      description: "Each block connects to the previous one using special math (hashing).",
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: "3. Stay Secure",
      description: "Once connected, changing old data becomes nearly impossible.",
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            What is Blockchain?
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Think of blockchain as a digital ledger that everyone can see, but no one can cheat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={`${step.bgColor} rounded-2xl p-6 text-center`}>
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
