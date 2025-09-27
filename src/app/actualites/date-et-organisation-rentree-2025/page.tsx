import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';

export default function DateOrganisationRentree2025() {
  return (
    <div className="bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <span className="text-slate-500">›</span>
            <Link href="/actualites" className="text-blue-600 hover:text-blue-800">Actualités</Link>
            <span className="text-slate-500">›</span>
            <span className="text-slate-700">Date et organisation rentrée 2025</span>
          </nav>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link 
            href="/actualites" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux actualités
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-slate-500 mr-2" />
              <time className="text-slate-600">Publié le 8 juillet 2025</time>
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-600">Rentrée scolaire</span>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Date et organisation rentrée 2025
            </h1>
          </header>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            
            {/* Première image - Organisation */}
            <div className="mb-16">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                <img
                  src="https://lgt-pierre-de-la-ramee-saint-quentin.02.ac-amiens.fr/wp-content/uploads/sites/40/2024/11/Rentree-2025.png"
                  alt="Organisation de la rentrée 2025"
                  className="w-full h-auto"
                />
                
              </div>
            </div>

            {/* Date centrale */}
            <div className="text-center my-16">
              <div className="bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 text-white rounded-2xl p-6 inline-block shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-8 w-8 mr-2 text-green-100" />
                  <h2 className="text-2xl font-bold">Date de la rentrée</h2>
                </div>
                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                  <p className="text-xl font-bold text-white">
                    Lundi 1er septembre 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Deuxième image - Photo du lycée avec texte superposé */}
            <div className="mb-12">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://lgt-pierre-de-la-ramee-saint-quentin.02.ac-amiens.fr/wp-content/uploads/sites/40/2025/06/20250620_113207-2048x1193.jpg"
                  alt="Vue du lycée Pierre de la Ramée"
                  className="w-full h-auto"
                />
                
                {/* Texte superposé sur l'image */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  {/* Rentrée des élèves */}
                  <div className="mb-8">
                    <div className="bg-yellow-500 text-black px-4 py-2 rounded font-bold text-lg mb-4">
                      Rentrée des élèves
                    </div>
                    <div className="space-y-2 text-lg font-semibold drop-shadow-lg">
                      <p>8h00 : Rentrée des élèves de Seconde</p>
                      <p>10h00 : Rentrée des élèves de 1ère, de Terminale</p>
                      <p>11h00 : Rentrée des étudiants de BTS et de CPGE</p>
                    </div>
                  </div>
                  
                  {/* Accueil des internes */}
                  <div>
                    <div className="bg-yellow-500 text-black px-4 py-2 rounded font-bold text-lg mb-4">
                      Accueil des internes
                    </div>
                    <div className="space-y-2 text-lg font-semibold drop-shadow-lg">
                      <p>7h30 : Accueil des élèves de Seconde</p>
                      <p>9h30 : Accueil des élèves de 1ère et Terminale</p>
                      <p>10h30 : Accueil des étudiants</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-600 mt-4 text-sm">
                Le lycée Pierre de la Ramée vous accueille pour la rentrée 2025
              </p>
            </div>

        

           
          </div>

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>Rentrée scolaire</strong>
                </p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/actualites" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Toutes les actualités
                </Link>
                <Link 
                  href="/inscriptions" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Inscriptions
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
