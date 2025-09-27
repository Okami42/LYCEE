import { BookOpen, Users, Award, Globe, Microscope, Calculator, Palette, Music, ArrowRight, Star, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Pedagogie() {
  return (
    <div className="bg-white">
      {/* Hero Section - Style Henri-IV */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="relative container mx-auto px-4 flex flex-col justify-center min-h-[70vh]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <BookOpen className="h-4 w-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium">Excellence pédagogique</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
              <span className="font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Pédagogie
              </span>
              <br />
              <span className="font-light">& Formation</span>
            </h1>
            
            <p className="text-xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed">
              Notre projet pédagogique vise l'excellence et l'épanouissement de chaque élève 
              à travers des méthodes innovantes et un accompagnement personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Filières d'Excellence */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
                Nos <span className="font-semibold text-purple-600">filières</span> d'excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Des parcours diversifiés pour révéler le potentiel de chaque élève
              </p>
            </div>
            
            {/* Filière Générale */}
            <div className="mb-20">
              <div className="flex items-center mb-12">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-6"></div>
                <div>
                  <h3 className="text-3xl font-light text-slate-900 mb-2">
                    Filière <span className="font-semibold">Générale</span>
                  </h3>
                  <p className="text-slate-600">Formation d'excellence vers l'enseignement supérieur</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <Calculator className="h-12 w-12 text-blue-600 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-4 relative z-10">Mathématiques & Sciences</h4>
                    <p className="text-slate-600 mb-6 relative z-10">
                      Spécialités : Mathématiques, Physique-Chimie, SVT, NSI
                    </p>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Laboratoires modernes
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Préparation aux concours
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Projets scientifiques
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-green-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <Globe className="h-12 w-12 text-green-600 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-4 relative z-10">Langues & Humanités</h4>
                    <p className="text-slate-600 mb-6 relative z-10">
                      Spécialités : LLCER, HLP, HGGSP, SES
                    </p>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        5 langues enseignées
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Échanges internationaux
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Prépa Sciences Po
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -translate-y-10 translate-x-10"></div>
                    <Palette className="h-12 w-12 text-purple-600 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-4 relative z-10">Arts & Culture</h4>
                    <p className="text-slate-600 mb-6 relative z-10">
                      Spécialités : Arts plastiques, Musique, Théâtre
                    </p>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Ateliers créatifs
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Partenariats culturels
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        Spectacles annuels
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filière Technologique */}
            <div>
              <div className="flex items-center mb-12">
                <div className="w-1 h-16 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-6"></div>
                <div>
                  <h3 className="text-3xl font-light text-slate-900 mb-2">
                    Filière <span className="font-semibold">Technologique</span>
                  </h3>
                  <p className="text-slate-600">Innovation et technologies au service des métiers de demain</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <Microscope className="h-12 w-12 text-orange-600 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-4 relative z-10">STI2D</h4>
                    <p className="text-slate-600 mb-6 relative z-10">
                      Sciences et Technologies de l'Industrie et du Développement Durable
                    </p>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-orange-500" />
                        Innovation technologique
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-orange-500" />
                        Développement durable
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-orange-500" />
                        Projets concrets
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-orange-500" />
                        Partenariats entreprises
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-red-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <Users className="h-12 w-12 text-red-600 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-4 relative z-10">STMG</h4>
                    <p className="text-slate-600 mb-6 relative z-10">
                      Sciences et Technologies du Management et de la Gestion
                    </p>
                    <div className="space-y-2 relative z-10">
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-red-500" />
                        Gestion et finance
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-red-500" />
                        Marketing
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-red-500" />
                        Ressources humaines
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Zap className="h-3 w-3 mr-2 text-red-500" />
                        Entrepreneuriat
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Pédagogiques */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-6">
                Projets pédagogiques <span className="font-semibold text-blue-600">innovants</span>
              </h2>
              <p className="text-xl text-slate-600">
                L'innovation au service de l'excellence éducative
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-slate-100 hover:border-blue-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Échanges Internationaux</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Partenariats avec l'Allemagne, l'Espagne et l'Angleterre pour une ouverture culturelle exceptionnelle.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-slate-100 hover:border-green-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Microscope className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Classe Préparatoire</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Préparation aux grandes écoles avec un accompagnement renforcé et des méthodes adaptées.
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-slate-100 hover:border-purple-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Excellence Numérique</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Équipements modernes et formation aux outils numériques pour préparer l'avenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités & Options */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-900 mb-6">
                Enseignements de <span className="font-semibold text-purple-600">spécialité</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Spécialités */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-slate-900">Spécialités</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Mathématiques',
                    'Physique-Chimie',
                    'Sciences de la Vie et de la Terre',
                    'Numérique et Sciences Informatiques',
                    'Histoire-Géographie, Géopolitique et Sciences Politiques',
                    'Humanités, Littérature et Philosophie',
                    'Langues, Littératures et Cultures Étrangères',
                    'Sciences Économiques et Sociales',
                    'Arts Plastiques'
                  ].map((specialite, index) => (
                    <div key={index} className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-blue-200">
                      <BookOpen className="h-5 w-5 text-blue-600 mr-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-slate-900">{specialite}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Options */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-semibold text-slate-900">Options Facultatives</h3>
                </div>
                <div className="space-y-3">
                  {[
                    'Latin',
                    'Grec ancien',
                    'Chinois LV3',
                    'Arabe LV3',
                    'Musique',
                    'Arts plastiques',
                    'Théâtre',
                    'EPS complémentaire',
                    'Mathématiques expertes',
                    'Mathématiques complémentaires'
                  ].map((option, index) => (
                    <div key={index} className="group flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 hover:border-green-200">
                      <Award className="h-5 w-5 text-green-600 mr-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium text-slate-900">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">
                Accompagnement <span className="font-semibold">personnalisé</span>
              </h2>
              <p className="text-xl text-blue-100">
                Chaque élève au centre de notre projet pédagogique
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Suivi Individualisé</h3>
                <p className="text-blue-100 leading-relaxed">
                  Chaque élève bénéficie d'un accompagnement personnalisé selon ses besoins et ses projets d'avenir.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Méthodologie</h3>
                <p className="text-blue-100 leading-relaxed">
                  Apprentissage des méthodes de travail efficaces pour réussir dans l'enseignement supérieur.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Orientation</h3>
                <p className="text-blue-100 leading-relaxed">
                  Conseils et guidance pour construire un projet d'orientation réfléchi et ambitieux.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/inscriptions"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Rejoindre notre établissement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}