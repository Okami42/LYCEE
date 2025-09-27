import { Users, Award, BookOpen, Globe, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Presentation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Présentation du Lycée
            </h1>
            <p className="text-xl text-blue-100">
              Un établissement public d'enseignement général et technologique au cœur de Saint-Quentin
            </p>
          </div>
        </div>
      </section>

      {/* Présentation générale */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Notre établissement</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Le Lycée Pierre de la Ramée est un établissement public d'enseignement général et technologique 
                    situé au cœur de Saint-Quentin, dans l'Aisne. Fondé en 1920, notre lycée accueille aujourd'hui 
                    plus de 1200 élèves de la seconde à la terminale.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Notre mission est d'accompagner chaque élève vers la réussite en lui offrant un enseignement 
                    de qualité, adapté à ses besoins et à ses ambitions. Nous proposons un large éventail de 
                    formations dans les voies générale et technologique.
                  </p>
                  
                  <p className="text-lg text-slate-700 leading-relaxed">
                    L'établissement se distingue par son engagement en faveur de l'innovation pédagogique, 
                    de l'ouverture culturelle et internationale, ainsi que par l'accompagnement personnalisé 
                    de chaque élève.
                  </p>
                </div>
                
                <div className="bg-slate-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Le lycée en chiffres</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Élèves accueillis</span>
                      <span className="text-2xl font-bold text-blue-600">1200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Classes</span>
                      <span className="text-2xl font-bold text-green-600">48</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Enseignants</span>
                      <span className="text-2xl font-bold text-purple-600">95</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Personnels</span>
                      <span className="text-2xl font-bold text-orange-600">35</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Taux de réussite Bac</span>
                      <span className="text-2xl font-bold text-red-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos atouts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Les atouts de notre établissement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Excellence pédagogique</h3>
                <p className="text-slate-600">
                  Un corps enseignant qualifié et des méthodes pédagogiques innovantes
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Accompagnement personnalisé</h3>
                <p className="text-slate-600">
                  Un suivi individualisé pour favoriser la réussite de chaque élève
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Ouverture internationale</h3>
                <p className="text-slate-600">
                  Échanges, voyages scolaires et certifications en langues étrangères
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Résultats d'excellence</h3>
                <p className="text-slate-600">
                  95% de réussite au baccalauréat et 85% de mentions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projet d'établissement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Notre projet d'établissement
            </h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Réussir ensemble</h3>
                <p className="text-slate-700 leading-relaxed">
                  Notre projet d'établissement s'articule autour de trois axes majeurs : l'excellence pédagogique, 
                  l'épanouissement de chaque élève et l'ouverture sur le monde. Nous mettons tout en œuvre pour 
                  offrir à nos élèves les meilleures conditions d'apprentissage et les préparer à leur avenir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Excellence académique</h4>
                  <p className="text-slate-600">
                    Proposer un enseignement de qualité adapté aux enjeux du XXIe siècle
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Épanouissement personnel</h4>
                  <p className="text-slate-600">
                    Développer l'autonomie, la citoyenneté et l'esprit critique de nos élèves
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3">Ouverture culturelle</h4>
                  <p className="text-slate-600">
                    Favoriser l'ouverture d'esprit et la découverte du monde
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Informations pratiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Adresse</h3>
                <p className="text-slate-300">
                  1 Rue de la République<br />
                  02100 Saint-Quentin
                </p>
              </div>

              <div className="text-center">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Téléphone</h3>
                <p className="text-slate-300">
                  Standard : 03 23 64 23 23<br />
                  Fax : 03 23 64 23 24
                </p>
              </div>

              <div className="text-center">
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-slate-300">
                  ce.0021234x@ac-amiens.fr<br />
                  Académie d'Amiens
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Horaires</h3>
                <p className="text-slate-300">
                  Lun-Ven : 7h30-18h30<br />
                  Sam : 8h00-12h00
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
