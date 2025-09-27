import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Clock, MapPin, Users, BookOpen } from 'lucide-react';

export default function PortesOuvertes() {
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
            <span className="text-slate-700">Journées Portes Ouvertes 2025</span>
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
              <time className="text-slate-600">Publié le 10 septembre 2024</time>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Journées Portes Ouvertes 2025
            </h1>

            {/* Featured image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=400&fit=crop&auto=format"
                alt="Journées Portes Ouvertes 2025"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
              <p className="text-purple-900 font-semibold text-lg mb-2">
                Découvrez notre lycée !
              </p>
              <p className="text-purple-800">
                Venez découvrir notre établissement le samedi 16 mars 2025 de 9h à 17h.
              </p>
            </div>

            {/* Info pratiques */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Informations pratiques</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p>Samedi 16 mars 2025</p>
                </div>
                
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="font-semibold mb-2">Horaires</h3>
                  <p>De 9h00 à 17h00</p>
                </div>
                
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="font-semibold mb-2">Lieu</h3>
                  <p>1 rue Jules Siegfried<br />Saint-Quentin</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Au programme</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <Users className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Rencontres</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Équipe pédagogique</li>
                  <li>• Direction de l'établissement</li>
                  <li>• Élèves ambassadeurs</li>
                  <li>• Anciens élèves</li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Découvertes</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Visite des installations</li>
                  <li>• Présentation des formations</li>
                  <li>• Laboratoires et ateliers</li>
                  <li>• Espaces numériques</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nos formations</h2>
            <p className="text-slate-700 mb-6">
              Profitez de cette journée pour découvrir l'ensemble de nos formations et spécialités. 
              Nos enseignants seront présents pour répondre à toutes vos questions concernant :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Voie générale</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Mathématiques</li>
                  <li>• Physique-Chimie</li>
                  <li>• SVT</li>
                  <li>• Histoire-Géographie</li>
                  <li>• Littérature et philosophie</li>
                  <li>• Langues vivantes</li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Voie technologique</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Sciences et Technologies de l'Industrie</li>
                  <li>• Sciences et Technologies du Management</li>
                  <li>• Sciences et Technologies de la Santé</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Conseils pour votre visite</h3>
              <ul className="text-amber-800 space-y-1">
                <li>• Venez avec vos questions préparées</li>
                <li>• N'hésitez pas à échanger avec les élèves</li>
                <li>• Visitez les différents espaces pédagogiques</li>
                <li>• Renseignez-vous sur les modalités d'inscription</li>
              </ul>
            </div>

            <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Nous vous attendons nombreux !</h3>
              <p className="text-lg mb-6">
                Une occasion unique de découvrir notre établissement et de rencontrer notre communauté éducative.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>Événements</strong>
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
