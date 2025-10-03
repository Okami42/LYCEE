import { BookOpen, Users, Globe, Calculator, Microscope, Clock, Target, ArrowRight, CheckCircle, Star, Brain, Award } from 'lucide-react';
import Link from 'next/link';

export default function Premiere() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <span className="text-green-600 font-bold text-2xl">1re</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Classe de Première Générale
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Spécialisez-vous avec 3 enseignements de spécialité et préparez-vous aux épreuves anticipées du baccalauréat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscriptions"
                className="inline-flex items-center px-8 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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
                La Première : Année de Spécialisation
              </h2>
              <p className="text-xl text-slate-600">
                La classe de première générale marque le début de la spécialisation avec le choix de 3 enseignements de spécialité parmi les 12 proposés dans notre établissement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Spécialisation</h3>
                <p className="text-gray-700">
                  Approfondissement dans 3 domaines d'excellence selon vos goûts et votre projet
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Épreuves Anticipées</h3>
                <p className="text-gray-700">
                  Préparation aux épreuves anticipées de français et d'enseignement scientifique
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Orientation</h3>
                <p className="text-gray-700">
                  Construction du projet d'études supérieures avec Parcoursup et les cordées
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
                Un tronc commun pour maintenir une culture générale équilibrée
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Français</h3>
                  <span className="text-sm text-slate-500">4h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Littérature, commentaire, dissertation, préparation aux épreuves anticipées
                </p>
                <div className="text-xs text-green-600 font-semibold">
                  📝 Épreuve anticipée au bac
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Histoire-Géographie</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Nouvelles approches historiques et géographiques du monde contemporain
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVA Anglais</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Perfectionnement linguistique et culturel, préparation aux certifications
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVB</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Allemand, Espagnol ou Italien : approfondissement linguistique
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Enseignement Scientifique</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Culture scientifique commune : mathématiques, physique, SVT, informatique
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EPS</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Activités physiques diversifiées et projet personnel de l'élève
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EMC</h3>
                  <span className="text-sm text-slate-500">0h30</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Enseignement moral et civique : débats et projets citoyens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enseignements de Spécialité */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enseignements de Spécialité
              </h2>
              <p className="text-xl text-slate-600 mb-6">
                Choisissez 3 spécialités parmi les 12 proposées (4h chacune)
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-green-800 font-semibold">
                  💡 En Terminale, vous conserverez 2 spécialités sur les 3 choisies en Première
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
                  Algèbre, analyse, géométrie, probabilités et statistiques approfondies
                </p>
                <div className="text-xs text-slate-500">
                  • Suites et fonctions • Dérivation • Probabilités conditionnelles
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <Microscope className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">Physique-Chimie</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Ondes, mécanique, transformations chimiques et synthèse organique
                </p>
                <div className="text-xs text-slate-500">
                  • Ondes et signaux • Mécanique • Transformations chimiques
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-emerald-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">SVT</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Génétique, évolution, géologie et enjeux environnementaux contemporains
                </p>
                <div className="text-xs text-slate-500">
                  • Génétique • Évolution • Géologie • Écosystèmes
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">NSI</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Programmation Python, bases de données, algorithmique et projets
                </p>
                <div className="text-xs text-slate-500">
                  • Python avancé • Bases de données • Réseaux • Projets
                </div>
              </div>

              {/* Humanités */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">HGGSP</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Histoire-Géographie, Géopolitique et Sciences Politiques approfondies
                </p>
                <div className="text-xs text-slate-500">
                  • Géopolitique • Relations internationales • Démocratie
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">HLP</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Humanités, Littérature et Philosophie : culture et réflexion critique
                </p>
                <div className="text-xs text-slate-500">
                  • Littérature • Philosophie • Rhétorique • Arts
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-teal-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">AMC</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                LLCE Anglais Monde Contemporain : approfondissement anglophone
                </p>
                <div className="text-xs text-slate-500">
                  • Littérature anglophone • Civilisation • Traduction
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-indigo-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">SES</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Sciences Économiques et Sociales : analyse du monde contemporain
                </p>
                <div className="text-xs text-slate-500">
                  • Microéconomie • Sociologie • Sciences politiques
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-pink-600 mr-3" />
                  <h3 className="text-lg font-bold text-black">Sports</h3>
                </div>
                <p className="text-gray-700 text-sm mb-3">
                  Pratique sportive approfondie et culture du sport de haut niveau
                </p>
                <div className="text-xs text-slate-500">
                  • Entraînement • Physiologie • Performance • Analyse sportive
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Options Facultatives
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
                <h3 className="text-lg font-bold text-black mb-4">Langues & EPS</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Latin</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Grec ancien</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">LV3 (Italien,Russe)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Section européenne anglais & allemand</span>

                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Option EPS</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Prêt pour la classe de Première ?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Rejoignez-nous pour une année de spécialisation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscriptions"
                className="inline-flex items-center px-8 py-3 bg-white text-green-900 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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
