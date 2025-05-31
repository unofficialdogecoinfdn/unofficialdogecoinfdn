import { Link } from 'wouter';
import { ArrowLeft, Home } from 'lucide-react';

export default function DogecoinFoundation() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <Link href="/">
            <button className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Main Site</span>
            </button>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
          Unofficial Dogecoin Foundation 0208
        </h1>
        
        <div className="space-y-6">
          <div>
            <p className="text-lg text-slate-800 mb-3">The Decision Makers:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-slate-600 mr-3 flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></span>
                The Cheese Committee
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-lg text-slate-800 mb-3">Current esteemed employees:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-center text-slate-700">
                <span className="w-2 h-2 bg-slate-600 mr-3 flex-shrink-0" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></span>
                Mrs Real Person
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}