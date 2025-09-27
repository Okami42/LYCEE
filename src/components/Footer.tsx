import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info avec logo coloré */}
          <div className="lg:col-span-1">
            <div className="flex items-start space-x-4 mb-6">
              {/* Logo Pierre de la Ramée */}
              <div className="flex-shrink-0">
                <Image 
                  src="/14313.png" 
                  alt="Logo Lycée Pierre de la Ramée" 
                  width={120} 
                  height={64}
                />
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-2">Lycée Pierre de La Ramée</h4>
            <p className="text-slate-300 mb-4 text-sm">
              Lycée générale et technologique
            </p>
          </div>

          {/* Infos pratiques */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Infos pratiques</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/calendrier" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Calendrier scolaire
                </Link>
              </li>
              <li>
                <Link href="https://vimeo.com/1052033861?share=copy" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Le Lycée en vidéo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Foire Aux Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Vie scolaire */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Vie scolaire</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/restauration" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Restauration
                </Link>
              </li>
              <li>
                <Link href="https://0020049t.esidoc.fr/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  CDI - ESIDOC
                </Link>
              </li>
              <li>
                <Link href="/vie-lycee/activites" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Activités périscolaires
                </Link>
              </li>
              <li>
                <Link href="/vie-lycee/association-sportive" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Association sportive
                </Link>
              </li>
            </ul>
          </div>

          {/* Nous Contacter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Nous Contacter</h4>
            <div className="space-y-4 text-sm">
              <div className="text-slate-300">
                <p className="font-medium">1 rue Jules Siegfried -</p>
                <p>02100 Saint-Quentin</p>
              </div>
              
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span>03 23 62 83 00</span>
              </div>
              
              <div className="flex items-start text-slate-300">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                <span className="break-all">ce.0020049t@ac-amiens.fr</span>
              </div>
              
              <button className="flex items-center px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-950 rounded-lg transition-colors text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Nous localiser
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Noir */}
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-slate-300">© 2025 Lycée Pierre de la Ramée - Tous droits réservés</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/mentions-legales" className="text-slate-300 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-slate-300 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/plan-du-site" className="text-slate-300 hover:text-white transition-colors">
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}