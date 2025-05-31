import { HeroSection } from '@/components/HeroSection';
import { BlockchainBasics } from '@/components/BlockchainBasics';
import { ScryptToolSection } from '@/components/ScryptToolSection';
import { DogecoinTechExplainer } from '@/components/DogecoinTechExplainer';
import { SimpleInvestmentWarnings, SimpleFooter } from '@/components/SimpleComponents';
import { Link2, Dog } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {

  return (
    <div className="min-h-screen bg-slate-50">
      {/* AI Disclaimer */}
      <div className="bg-yellow-100 border-b-2 border-yellow-300 py-2 px-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-yellow-800">
            ⚠️ <strong>AI Generated:</strong> This site may contain inaccurate information. Verify facts independently.
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Dog className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
              <h1 className="text-sm sm:text-xl font-bold text-slate-900 truncate">
                <span className="hidden sm:inline">Unofficial Dogecoin Foundation 0208</span>
                <span className="sm:hidden">UDCF 0208</span>
              </h1>
            </div>
            <div className="flex items-center">
              <Link href="/dogecoin-foundation">
                <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1 sm:py-2 text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 rounded-lg transition-colors">
                  <Dog className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="font-medium text-xs sm:text-sm">
                    <span className="hidden sm:inline">Foundation 0208</span>
                    <span className="sm:hidden">Team</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <BlockchainBasics />
        <DogecoinTechExplainer />
        <ScryptToolSection />
        <SimpleInvestmentWarnings />
      </main>

      <SimpleFooter />
    </div>
  );
}
