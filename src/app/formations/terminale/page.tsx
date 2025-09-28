import { BookOpen, Users, Globe, Calculator, Microscope, Clock, Target, ArrowRight, CheckCircle, Star, Brain, Award, GraduationCap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Terminale() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-6">
              <span className="text-purple-600 font-bold text-2xl">Tle</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Classe de Terminale Générale
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              L'aboutissement de votre parcours lycéen : préparation au baccalauréat et aux études supérieures
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscriptions"
                className="inline-flex items-center px-8 py-3 bg-white text-purple-900 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
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

      {/* Présentation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                La Terminale
              </h2>
          
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Baccalauréat</h3>
                <p className="text-gray-700 text-sm">
                  Préparation aux épreuves finales du baccalauréat
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Approfondissement</h3>
                <p className="text-gray-700 text-sm">
                  Expertise dans 2 spécialités choisies selon votre projet
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Parcoursup</h3>
                <p className="text-gray-700 text-sm">
                  Accompagnement dans vos choix post-bac
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">Grand Oral</h3>
                <p className="text-gray-700 text-sm">
                  Épreuve final du baccalauréat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enseignements Communs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enseignements Communs
              </h2>
              <p className="text-xl text-slate-600">
                Le socle commun pour tous les élèves de terminale générale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Philosophie</h3>
                  <span className="text-sm text-slate-500">4h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Initiation à la réflexion philosophique et à l'argumentation rationnelle
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Épreuve finale du bac (coeff. 8)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Histoire-Géographie</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Analyse critique du monde contemporain et des enjeux géopolitiques
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 6)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVA Anglais</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Maîtrise avancée de l'anglais : expression, compréhension, civilisation
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 6)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVB</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Allemand, Espagnol ou Italien : perfectionnement linguistique
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 6)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Enseignement Scientifique</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Culture scientifique : enjeux contemporains et démarche scientifique
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 6)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EPS</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Pratiques physiques diversifiées et projet personnel de formation
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 6)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EMC</h3>
                  <span className="text-sm text-slate-500">0h30</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Enseignement moral et civique : engagement et responsabilité citoyenne
                </p>
                <div className="text-xs text-purple-600 font-semibold">
                  📝 Contrôle continu (coeff. 2)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enseignements de Spécialité
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                2 spécialités approfondies (6h chacune) - Épreuves finales du baccalauréat
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 max-w-3xl mx-auto">
                <p className="text-purple-800 font-semibold">
                  🎯 Coefficient 16 chacune : ces épreuves représentent 64% de votre note finale du bac !
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sciences */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">Mathématiques</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Analyse complexe, algèbre linéaire, probabilités avancées et applications
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Fonctions • Suites • Géométrie dans l'espace • Probabilités
                </div>
                <div className="text-xs text-blue-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 4h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Microscope className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">Physique-Chimie</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Mécanique quantique, thermodynamique, cinétique et synthèse organique
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Ondes • Mécanique • Transformations • Synthèses
                </div>
                <div className="text-xs text-green-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 3h30 + TP 1h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">SVT</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Génétique moléculaire, évolution, géologie et enjeux planétaires
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Génétique • Évolution • Géologie • Écosystèmes
                </div>
                <div className="text-xs text-emerald-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 3h30 + TP 1h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">NSI</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Algorithmique avancée, structures de données, projets informatiques
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Algorithmes • Bases de données • Réseaux • Projets
                </div>
                <div className="text-xs text-purple-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 3h30 + pratique 1h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">HGGSP</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Géopolitique mondiale, relations internationales, enjeux contemporains
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Géopolitique • Diplomatie • Conflits • Puissances
                </div>
                <div className="text-xs text-red-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 4h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">HLP</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Philosophie de la littérature, esthétique et création artistique
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Littérature • Philosophie • Arts • Création
                </div>
                <div className="text-xs text-orange-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 4h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">LLCER Anglais</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Littérature anglophone, civilisation et traduction littéraire
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Littérature • Civilisation • Traduction • Oral
                </div>
                <div className="text-xs text-teal-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 3h30 + oral 20min)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">SES</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Économie approfondie, sociologie contemporaine et science politique
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Macroéconomie • Sociologie • Sciences politiques
                </div>
                <div className="text-xs text-indigo-600 font-semibold">
                  📅 Épreuve finale : Mars (écrit 4h)
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-pink-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">Arts Plastiques</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Création artistique personnelle et analyse critique des œuvres
                </p>
                <div className="text-xs text-slate-500 mb-2">
                  • Création • Histoire de l'art • Critique • Portfolio
                </div>
                <div className="text-xs text-pink-600 font-semibold">
                  📅 Épreuve finale : Mars (pratique + oral 30min)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options et Compléments */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Options et Enseignements Complémentaires
              </h2>
              <p className="text-xl text-slate-600">
                Enrichissez votre parcours et valorisez votre dossier post-bac
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mathématiques Complémentaires/Expertes */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-black mb-6">Mathématiques Complémentaires</h3>
                <p className="text-gray-700 mb-6">
                  <strong>3h/semaine</strong> - Pour les élèves qui n'ont pas choisi Maths en spécialité mais en ont besoin pour leurs études supérieures
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Analyse et probabilités</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Statistiques et algorithmes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Applications économiques</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <p className="text-blue-800 text-sm font-semibold">
                    🎯 Idéal pour : Économie, Médecine, Sciences Po, Commerce
                  </p>
                </div>
              </div>

              {/* Mathématiques Expertes */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg border border-purple-200">
                <h3 className="text-2xl font-bold text-black mb-6">Mathématiques Expertes</h3>
                <p className="text-gray-700 mb-6">
                  <strong>3h/semaine</strong> - Pour les élèves qui ont choisi Maths en spécialité et visent des études scientifiques exigeantes
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Arithmétique et cryptographie</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Matrices et graphes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Nombres complexes avancés</span>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded">
                  <p className="text-purple-800 text-sm font-semibold">
                    🎯 Idéal pour : Classes prépa, Écoles d'ingénieurs, Recherche
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-black mb-6 text-center">Autres Options Facultatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="font-bold text-black mb-2">Langues et Cultures</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• Latin (3h)</p>
                    <p>• Grec ancien (3h)</p>
                    <p>• LV3 : Chinois, Italien, Arabe (3h)</p>
                    <p>• Section européenne anglais</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="font-bold text-black mb-2">Arts et Expression</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• Arts plastiques (3h)</p>
                    <p>• Musique (3h)</p>
                    <p>• Théâtre (3h)</p>
                    <p>• Cinéma-audiovisuel (3h)</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="font-bold text-black mb-2">Autres</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>• Droit et grands enjeux (3h)</p>
                    <p>• EPS complémentaire (4h)</p>
                    <p>• Atelier artistique</p>
                    <p>• Préparation Sciences Po</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Oral */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Le Grand Oral
              </h2>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg border border-orange-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Format de l'épreuve</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-gray-700"><strong>20 minutes</strong> d'épreuve</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-gray-700"><strong>Coefficient 10</strong> (14 en voie techno)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-orange-600 mr-3" />
                      <span className="text-gray-700"><strong>2 examinateurs</strong> (spécialités)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-4">Déroulement</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <strong className="text-black">10 min</strong> : <span className="text-black">Présentation d'une question préparée</span>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <strong className="text-black">10 min</strong> : <span className="text-black">Échange avec le jury</span>
                    </div>
                  </div>
                </div>
              </div>

            
                
             
            </div>
          </div>
        </div>
      </section>



 
    </div>
  );
}
