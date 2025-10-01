import { Calendar, Users, BookOpen, Award, ChefHat, GraduationCap, ArrowRight, Star, Globe, Bell, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

// Rendu dynamique : la page d'accueil affiche toujours les derniers articles
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Carousel Hero */}
      <Carousel />

      {/* Actualités */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center">
              <Bell className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Actualités du lycée</h2>
            </div>
            <Link href="/actualites" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              Toutes les actualités <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://je-progresse-en-maths.fr/wp-content/uploads/2023/08/numworks-calculatrice.jpg"
                  alt="Commande groupée – Calculatrice Numworks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-500">19 juillet 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Commande groupée – Calculatrice Numworks</h3>
                <p className="text-slate-600 mb-4">
                La commande groupée vous permet de faire l’acquisition d’une calculatrice NumWorks à 74,69 € au lieu de 82,99 € prix public.
                </p>
                <Link href="/actualites/commande-groupee-calculatrice-numworks" className="text-blue-600 hover:text-blue-800 font-medium">
                  Lire la suite →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=300&fit=crop&auto=format"
                  alt="Journées Portes Ouvertes 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-500"> 29 juillet 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Un peu de révisions pour l’entrée en Terminale Spé Maths</h3>
                <p className="text-slate-600 mb-4">
                Chers futurs élèves de terminale Spé Maths, voici un petit livret récapitulant les bases à maîtriser pour une entrée sereine.
                </p>
                <Link href="/actualites/portes-ouvertes" className="text-blue-600 hover:text-blue-800 font-medium">
                  Lire la suite →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://lycee.bonne-terre.fr/wp-content/uploads/2025/07/rentree-2025-940x675.png"
                  alt="8 juillet 2025"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                  <span className="text-sm text-slate-500"> 8 juillet 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">Date et organisation Rentrée 2025</h3>
                <p className="text-slate-600 mb-4">
                  Découvrez les dates et l'organisation de la rentrée 2025.
                </p>
                <Link href="/actualites/date-et-organisation-rentree-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                  Lire la suite →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* Liens utiles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Liens utiles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a href="https://connexion.enthdf.fr" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-green-500 to-blue-600">
                <Image 
                  src="https://leconomieetmoi.fr/wp-content/uploads/2023/10/enthdf.jpg" 
                  alt="ENT - Espace numérique de travail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                  <Globe className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">ENT</h3>
                <p className="text-slate-600 text-lg">Espace numérique de travail</p>
              </div>
            </a>

            <a href="https://0020049t.esidoc.fr" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <Image 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YjZchnYJHf4R8DesNEPCFMrrKUVeqEWMjQ&s" 
                  alt="ESIDOC - Portail du CDI"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">ESIDOC</h3>
                <p className="text-slate-600 text-lg">Portail du CDI</p>
              </div>
            </a>

            <a href="https://espacenumerique.turbo-self.com/Connexion.aspx?id=426" className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:scale-105 overflow-hidden">
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600">
                <Image 
                  src="https://espacenumerique.turbo-self.com/images/1447_426.jpg" 
                  alt="Turboself - Gestion de la restauration"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                  <ChefHat className="h-16 w-16 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Turboself</h3>
                <p className="text-slate-600 text-lg">Gestion de la restauration</p>
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}