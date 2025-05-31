import { Button } from '@/components/ui/button';
import { Play, AlertTriangle } from 'lucide-react';

export function HeroSection() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-8 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
            Learn Dogecoin
            <br />
            <span className="text-yellow-600">Simply & Safely</span>
          </h2>
          <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-2">
            Understand how Dogecoin works through our interactive Scrypt tool and learn about the real risks of cryptocurrency investing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              onClick={() => scrollToSection('scrypt-tool')}
              className="inline-flex items-center px-8 py-4 bg-yellow-600 text-white hover:bg-yellow-700 font-semibold"
              size="lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Try the Scrypt Tool
            </Button>
            <Button
              onClick={() => scrollToSection('warnings')}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white hover:bg-red-700 font-semibold"
              size="lg"
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              Investment Warnings
            </Button>
          </div>
          
          {/* Honest Crypto Message */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-red-100 border-2 border-red-300 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-2 sm:mb-3">Honestly, don't invest in crypto</h3>
            <p className="text-sm sm:text-base text-red-700">
              This site is educational. Crypto is extremely risky and most people lose money. 
              Learn the technology, but be very careful about investing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
