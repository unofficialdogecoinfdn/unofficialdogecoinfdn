import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.educational.title}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.educational.links.cryptography}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.educational.links.distributed}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.educational.links.signatures}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.financial.title}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.financial.links.risk}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.financial.links.psychology}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t.footer.financial.links.analysis}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.disclaimer.title}
            </h4>
            <p className="text-slate-300 text-sm">
              {t.footer.disclaimer.text}
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Sha Sha Real Smooth. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
