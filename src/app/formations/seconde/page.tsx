import { BookOpen, Users, Globe, Calculator, Microscope, Clock, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function Seconde() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-bold text-2xl">2de</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Classe de Seconde Générale et Technologique
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Une année de détermination pour découvrir ses goûts et construire son projet d'orientation
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

      {/* Présentation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                La Seconde
              </h2>
            
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Orientation</h3>
                <p className="text-gray-700">
                  Découvrir ses centres d'intérêt et construire progressivement son projet d'orientation
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Culture Générale</h3>
                <p className="text-gray-700">
                  Acquérir une solide culture générale commune à travers les enseignements obligatoires
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Exploration</h3>
                <p className="text-gray-700">
                  Explorer de nouveaux domaines grâce aux enseignements optionnels et d'exploration
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
                Enseignements Communs Obligatoires
              </h2>
              <p className="text-xl text-slate-600">
                Un socle commun de connaissances pour tous les élèves
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Français</h3>
                  <span className="text-sm text-slate-500">4h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Littérature, expression écrite et orale, préparation aux épreuves anticipées du baccalauréat
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Histoire-Géographie</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Comprendre le monde contemporain à travers l'histoire et la géographie
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVA Anglais</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Perfectionnement de la langue anglaise : expression, compréhension, civilisation
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">LVB</h3>
                  <span className="text-sm text-slate-500">2h30</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Allemand, Espagnol ou Italien selon le choix de l'élève
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Mathématiques</h3>
                  <span className="text-sm text-slate-500">4h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Algèbre, analyse, géométrie, statistiques et probabilités
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">Physique-Chimie</h3>
                  <span className="text-sm text-slate-500">3h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Découverte des sciences physiques et chimiques, expérimentations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">SVT</h3>
                  <span className="text-sm text-slate-500">1h30</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Sciences de la Vie et de la Terre : biologie, géologie, environnement
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EPS</h3>
                  <span className="text-sm text-slate-500">2h</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Éducation physique et sportive : développement des capacités motrices
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-black">EMC</h3>
                  <span className="text-sm text-slate-500">0h30</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Enseignement moral et civique : citoyenneté et valeurs républicaines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enseignements Optionnels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enseignements Optionnels
              </h2>
            </div>

            <div className="flex justify-center">
              {/* Options facultatives */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 max-w-md">
                <h3 className="text-2xl font-bold text-black mb-6">Options Facultatives</h3>
                <p className="text-gray-700 mb-6">
                  Enrichissez votre culture et développez vos talents
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700 font-semibold">Latin</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700 font-semibold">Grec ancien</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700 font-semibold">LV3 (Russe)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700 font-semibold">Section européenne</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  



      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Intéressé par la classe de Seconde ?
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
