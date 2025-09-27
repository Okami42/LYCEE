import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Users, BookOpen, Award } from 'lucide-react';

export default function Rentree2024() {
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
            <span className="text-slate-700">Rentrée scolaire 2024-2025</span>
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
              <time className="text-slate-600">Publié le 15 septembre 2024</time>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Rentrée scolaire 2024-2025
            </h1>

            {/* Featured image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&auto=format"
                alt="Rentrée scolaire 2024-2025"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-green-900 font-semibold text-lg mb-2">
                Une rentrée réussie !
              </p>
              <p className="text-green-800">
                La rentrée s'est déroulée dans d'excellentes conditions avec l'accueil de 1200 élèves.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">1200</h3>
                <p className="text-slate-600">Élèves accueillis</p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">45</h3>
                <p className="text-slate-600">Classes formées</p>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">85</h3>
                <p className="text-slate-600">Enseignants</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Une organisation parfaite</h2>
            <p className="text-slate-700 mb-6">
              Cette année encore, l'équipe pédagogique et administrative du lycée Pierre de La Ramée 
              a mis tout en œuvre pour assurer une rentrée sereine et bien organisée. Dès le premier 
              jour, les élèves ont pu retrouver leurs marques dans un environnement propice à l'apprentissage.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nouveautés de cette rentrée</h2>
            <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
              <li>Mise en place de nouveaux espaces collaboratifs</li>
              <li>Rénovation complète de la salle informatique</li>
              <li>Nouveau système de restauration avec menus diversifiés</li>
              <li>Renforcement de l'accompagnement personnalisé</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Message de la direction</h3>
              <p className="text-blue-800 italic">
                "Nous sommes ravis d'accueillir nos élèves dans les meilleures conditions pour cette 
                nouvelle année scolaire. L'équipe pédagogique est mobilisée pour accompagner chaque 
                élève vers la réussite."
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Prochaines étapes</h2>
            <p className="text-slate-700 mb-6">
              Les semaines à venir seront consacrées à la finalisation des emplois du temps et à 
              l'organisation des différentes activités périscolaires. Les parents d'élèves recevront 
              prochainement toutes les informations nécessaires concernant le suivi scolaire.
            </p>
          </div>

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>Vie du lycée</strong>
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
                  href="/le-lycee" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Le lycée
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
