import { BookOpen, Users, Award, Globe, Calculator, Palette, Microscope, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Formations() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nos Formations
            </h1>
            <p className="text-xl text-purple-100">
              Un large choix de parcours pour construire votre avenir
            </p>
          </div>
        </div>
      </section>

      {/* Voie Générale */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Voie Générale
              </h2>
              <p className="text-xl text-slate-600">
                Une formation équilibrée pour préparer aux études supérieures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Link href="/formations/seconde" className="group">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold text-lg">2de</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Classe de Seconde</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Classe de détermination avec enseignements communs et options pour découvrir ses goûts et aptitudes.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link href="/formations/premiere" className="group">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold text-lg">1re</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Classe de Première</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Spécialisation progressive avec le choix de 3 enseignements de spécialité selon ses projets.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>

              <Link href="/formations/terminale" className="group">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold text-lg">Tle</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Classe de Terminale</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Préparation au baccalauréat avec 2 spécialités et un accompagnement vers le supérieur.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Voie Technologique */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Voie Technologique
              </h2>
              <p className="text-xl text-slate-600">
                Des formations concrètes vers les métiers de demain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border border-orange-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Microscope className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">STI2D</h3>
                    <p className="text-slate-600">Sciences et Technologies de l'Industrie et du Développement Durable</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6">
                  Formation axée sur l'innovation technologique et le développement durable, 
                  préparant aux métiers de l'ingénierie et des nouvelles technologies.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-slate-700">Innovation technologique et éco-conception</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-slate-700">Systèmes d'information et numérique</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-slate-700">Énergies et environnement</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-slate-700">Architecture et construction</span>
                  </div>
                </div>
                
                <Link
                  href="/formations/sti2d"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">STMG</h3>
                    <p className="text-slate-600">Sciences et Technologies du Management et de la Gestion</p>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6">
                  Formation centrée sur l'étude des organisations et de leur fonctionnement, 
                  préparant aux métiers du management, de la gestion et du commerce.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-slate-700">Management des organisations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-slate-700">Gestion et finance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-slate-700">Mercatique (marketing)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-slate-700">Ressources humaines et communication</span>
                  </div>
                </div>
                
                <Link
                  href="/formations/stmg"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options facultatives */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Options Facultatives
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                'Latin', 'Grec ancien', 'Russe LV3', 'Italien LV3', 
                'Mathématiques expertes', 'Mathématiques complémentaires',
                'Droit et grands enjeux', 'Section européenne'
              ].map((option, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <h4 className="font-medium text-slate-900 text-sm">{option}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/formations/options"
                className="inline-flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
              >
                Découvrir toutes les options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à rejoindre notre établissement ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Découvrez nos modalités d'inscription et préparez votre dossier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscriptions"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                S'inscrire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 font-semibold rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
