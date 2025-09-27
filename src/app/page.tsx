import { Calendar, Users, BookOpen, Award, ChefHat, GraduationCap, ArrowRight, Star, Globe, Bell, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

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

      {/* Navigation rapide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Accès rapide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/formations" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 group-hover:border-blue-600 transform hover:scale-105">
                <BookOpen className="h-14 w-14 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Formations</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Découvrez nos filières générales et technologiques, nos spécialités et options.
                </p>
              </div>
            </Link>

            <Link href="/vie-lycee" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500 group-hover:border-green-600 transform hover:scale-105">
                <Users className="h-14 w-14 text-green-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Vie du Lycée</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vie scolaire, CDI, associations, clubs et toutes les activités de l'établissement.
                </p>
              </div>
            </Link>

            <Link href="/restauration" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 group-hover:border-orange-600 transform hover:scale-105">
                <ChefHat className="h-14 w-14 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Restauration</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Menus de la semaine, tarifs et modalités d'inscription à la demi-pension.
                </p>
              </div>
            </Link>

            <Link href="/inscriptions" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-500 group-hover:border-purple-600 transform hover:scale-105">
                <FileText className="h-14 w-14 text-purple-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Inscriptions</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Modalités d'admission, dossiers à télécharger et calendrier des inscriptions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Services numériques */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Services numériques
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a href="https://ent.ac-amiens.fr" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-xl">ENT</span>
              </div>
              <h3 className="font-semibold mb-2">Mon lycée.net</h3>
              <p className="text-sm text-slate-600">Espace numérique de travail</p>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h3 className="font-semibold mb-2">Pronote</h3>
              <p className="text-sm text-slate-600">Notes et cahier de textes</p>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">e-sidoc</h3>
              <p className="text-sm text-slate-600">Portail du CDI</p>
            </a>

            <a href="#" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-700 transition-colors">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Folios</h3>
              <p className="text-sm text-slate-600">Parcours d'orientation</p>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}