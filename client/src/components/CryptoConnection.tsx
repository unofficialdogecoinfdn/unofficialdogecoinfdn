import { Coins, Zap, Shield } from 'lucide-react';

export function CryptoConnection() {

  const connections = [
    {
      icon: Coins,
      title: "Dogecoin & Scrypt",
      description: "While our tool shows SHA256, Dogecoin actually uses Scrypt algorithm. Both serve the same purpose: creating unique fingerprints for data.",
      algorithm: "Dogecoin Algorithm: Scrypt",
      note: "Different from Bitcoin's SHA256, but same concept",
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Zap,
      title: "Mining & Proof of Work",
      description: "Miners compete to find hash values that meet specific criteria. This process secures the network and creates new coins.",
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Each block's hash depends on the previous block. Changing any old transaction would require recalculating all subsequent hashes - nearly impossible.",
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            How SHA256 Powers Cryptocurrency
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding the connection between hashing and digital currencies like Dogecoin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {connections.map((connection, index) => {
            const IconComponent = connection.icon;
            return (
              <div 
                key={index} 
                className={`${connection.bgColor} border-2 ${connection.borderColor} rounded-2xl p-6`}
              >
                <div className={`w-16 h-16 ${connection.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${connection.iconColor}`} />
                </div>
                
                <h4 className="text-xl font-semibold text-slate-900 text-center mb-3">
                  {connection.title}
                </h4>
                
                <p className="text-slate-700 text-center mb-4">
                  {connection.description}
                </p>
                
                {connection.algorithm && (
                  <div className="bg-white rounded-lg p-3 border border-slate-200">
                    <p className="text-sm font-medium text-slate-800 text-center">
                      {connection.algorithm}
                    </p>
                    <p className="text-xs text-slate-600 text-center mt-1">
                      {connection.note}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}