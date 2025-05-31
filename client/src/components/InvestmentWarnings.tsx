import { AlertTriangle, Brain, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function InvestmentWarnings() {
  const { t } = useLanguage();

  const statistics = [
    { percentage: '95%', title: t.warnings.stats.loseMoney.title, description: t.warnings.stats.loseMoney.description },
    { percentage: '80%', title: t.warnings.stats.loseHalf.title, description: t.warnings.stats.loseHalf.description },
    { percentage: '65%', title: t.warnings.stats.emotional.title, description: t.warnings.stats.emotional.description },
    { percentage: '90%', title: t.warnings.stats.quit.title, description: t.warnings.stats.quit.description }
  ];

  const warningMessages = [
    {
      icon: AlertTriangle,
      title: t.warnings.messages.invest.title,
      description: t.warnings.messages.invest.description,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-400',
      iconColor: 'text-red-500'
    },
    {
      icon: Brain,
      title: t.warnings.messages.biases.title,
      description: t.warnings.messages.biases.description,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-400',
      iconColor: 'text-orange-500'
    },
    {
      icon: GraduationCap,
      title: t.warnings.messages.education.title,
      description: t.warnings.messages.education.description,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-400',
      iconColor: 'text-yellow-600'
    }
  ];

  return (
    <section id="warnings" className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            {t.warnings.title}
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t.warnings.description}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center border-2 border-red-200">
              <div className="text-3xl font-bold text-red-600 mb-2">{stat.percentage}</div>
              <h4 className="font-semibold text-slate-900 mb-1">
                {stat.title}
              </h4>
              <p className="text-sm text-slate-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Warning Messages */}
        <div className="space-y-6">
          {warningMessages.map((message, index) => {
            const IconComponent = message.icon;
            return (
              <div key={index} className={`${message.bgColor} border-l-4 ${message.borderColor} p-6 rounded-r-xl`}>
                <div className="flex items-start">
                  <IconComponent className={`${message.iconColor} h-6 w-6 mt-1 mr-3 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      {message.title}
                    </h4>
                    <p className="text-slate-700">
                      {message.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
