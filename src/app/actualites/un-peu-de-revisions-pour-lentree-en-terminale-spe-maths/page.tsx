import Link from 'next/link';
import { Calendar, ArrowLeft, Download, BookOpen, Calculator, FileText } from 'lucide-react';

export default function RevisionsTerminaleMaths() {
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
            <span className="text-slate-700">Un peu de révisions pour l'entrée en Terminale Spé Maths</span>
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
              <time className="text-slate-600">Publié le 29 juillet 2025</time>
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-600">Mathématiques</span>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Un peu de révisions pour l'entrée en Terminale Spé Maths
            </h1>

            {/* Hero section with math illustration */}

          </header>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-blue-900 font-semibold text-lg mb-2">
                Message aux futurs élèves de Terminale Spé Maths
              </p>
              <p className="text-blue-800">
                Chers futurs élèves de terminale Spé Maths (et pourquoi pas les élèves d'option maths complémentaires),
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Voici un petit livret récapitulant les bases à maîtriser pour faire une entrée en Spécialité mathématiques sereine.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Ces fiches de révisions sont l'occasion de se remettre en route un peu avant la rentrée.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                La correction permet de vérifier votre maîtrise des méthodes.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                Evidemment, toutes les méthodes seront retravaillées au fur et à mesure des besoins pendant l'année.
              </p>
              
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                Je vous souhaite un bon été.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-900 font-semibold">S. Pluot</p>
                <p className="text-slate-600 text-sm">Professeur de Mathématiques</p>
              </div>
            </div>

            {/* Documents section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center">
                <BookOpen className="h-8 w-8 mr-3 text-green-600" />
                Documents à télécharger
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Exercices PDF */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Exercices</h4>
                      <p className="text-slate-600 text-sm">Livret de révisions</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">
                    Exercices de révision pour préparer votre entrée en Terminale Spécialité Mathématiques.
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-500">PDF • Exercices</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">1er document</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href="/documents/TG-Bases-pour-lentree-en-spe-maths-S.-Pluot-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      Voir
                    </a>
                    <a 
                      href="/documents/TG-Bases-pour-lentree-en-spe-maths-S.-Pluot-1.pdf"
                      download="TG-Bases-pour-lentree-en-spe-maths-S.-Pluot-1.pdf"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Télécharger
                    </a>
                  </div>
                </div>

                {/* Correction PDF */}
                <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Correction</h4>
                      <p className="text-slate-600 text-sm">Corrigé détaillé</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 mb-4">
                    Correction détaillée des exercices avec explications des méthodes et des étapes.
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-slate-500">PDF • Correction</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">2ème document</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href="/documents/TG-Correction-bases-SPE-MATHS-S.-Pluot.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      Voir
                    </a>
                    <a 
                      href="/documents/TG-Correction-bases-SPE-MATHS-S.-Pluot.pdf"
                      download="TG-Correction-bases-SPE-MATHS-S.-Pluot.pdf"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>
              
 
            </div>



      
          </div>

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>Mathématiques</strong>
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
                  href="/formations/specialites" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Spécialités
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
