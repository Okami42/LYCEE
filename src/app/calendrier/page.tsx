'use client';

import Link from 'next/link';
import { Calendar, ArrowLeft, Download, Clock, X } from 'lucide-react';
import { useState } from 'react';

export default function CalendrierScolaire() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-12 w-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Calendrier Scolaire</h1>
          </div>
          <p className="text-xl text-center text-blue-100 max-w-2xl mx-auto">
            Calendrier scolaire 2025-2026 - Zone B
          </p>
          <p className="text-center text-blue-200 mt-2">
            Académies d'Aix-Marseille, Amiens, Lille, Nancy-Metz, Nantes, Nice, Normandie, Orléans-Tours, Reims, Rennes et Strasbourg
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>

        {/* Calendrier principal */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Header du calendrier */}
            <div className="bg-slate-50 border-b border-slate-200 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Calendrier Scolaire 2025-2026 - Zone B</h2>
                <button 
                  onClick={() => setShowModal(true)}
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Vue détaillée
                </button>
              </div>
            </div>

            {/* Contenu du calendrier */}
            <div className="p-6">
              <div className="space-y-8">
                
                {/* Rentrée scolaire */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-xl font-semibold text-green-900">Rentrée scolaire</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Lundi 1er septembre 2025</p>
                </div>

                {/* Vacances de la Toussaint */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold text-orange-900">Vacances de la Toussaint</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Du samedi 18 octobre au lundi 3 novembre 2025</p>
                </div>

                {/* Vacances de Noël */}
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-red-600 mr-2" />
                    <h3 className="text-xl font-semibold text-red-900">Vacances de Noël</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Du samedi 20 décembre 2025 au lundi 5 janvier 2026</p>
                </div>

                {/* Vacances d'hiver */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-blue-900">Vacances d'hiver</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Du samedi 7 février au lundi 23 février 2026</p>
                </div>

                {/* Vacances de printemps */}
                <div className="border-l-4 border-emerald-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold text-emerald-900">Vacances de printemps</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Du samedi 4 avril au lundi 20 avril 2026</p>
                </div>

                {/* Pont de l'Ascension */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-purple-900">Pont de l'Ascension</h3>
                  </div>
                  <p className="text-slate-700 font-medium">Du mercredi 13 mai au lundi 18 mai 2026</p>
                </div>

                {/* Vacances d'été */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-yellow-600 mr-2" />
                    <h3 className="text-xl font-semibold text-yellow-900">Vacances d'été</h3>
                  </div>
                  <p className="text-slate-700 font-medium">À partir du samedi 4 juillet 2026</p>
                </div>

              </div>
            </div>

            {/* Footer du calendrier */}
            <div className="bg-slate-50 border-t border-slate-200 p-6">
              <div className="text-center text-sm text-slate-600">
                <p className="mb-2">
                  <strong>Zone B :</strong> Académies d'Aix-Marseille, Amiens, Lille, Nancy-Metz, Nantes, Nice, Normandie, Orléans-Tours, Reims, Rennes et Strasbourg
                </p>
                <p>
                  Les dates peuvent être sujettes à modifications selon les directives du Ministère de l'Éducation Nationale
                </p>
              </div>
            </div>
          </div>



          {/* Actions */}


        </div>
      </div>

      {/* Modal calendrier détaillé */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header modal */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Calendrier Scolaire 2025-2026 - Zone B</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            {/* Contenu modal */}
            <div className="p-6">
              <div className="space-y-6">
                
                {/* Rentrée scolaire */}
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-lg">Rentrée scolaire</h4>
                    <p className="text-blue-800 font-medium">Lundi 1er septembre 2025</p>
                  </div>
                </div>

                {/* Vacances de la Toussaint */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 text-lg">Vacances de la Toussaint</h4>
                    <p className="text-orange-800 font-medium">Du samedi 18 octobre au lundi 3 novembre 2025</p>
                  </div>
                </div>

                {/* Vacances de Noël */}
                <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 text-lg">Vacances de Noël</h4>
                    <p className="text-red-800 font-medium">Du samedi 20 décembre 2025 au lundi 5 janvier 2026</p>
                  </div>
                </div>

                {/* Vacances d'hiver */}
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 text-lg">Vacances d'hiver</h4>
                    <p className="text-blue-800 font-medium">Du samedi 7 février au lundi 23 février 2026</p>
                  </div>
                </div>

                {/* Vacances de printemps */}
                <div className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 text-lg">Vacances de printemps</h4>
                    <p className="text-emerald-800 font-medium">Du samedi 4 avril au lundi 20 avril 2026</p>
                  </div>
                </div>

                {/* Pont de l'Ascension */}
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 text-lg">Pont de l'Ascension</h4>
                    <p className="text-purple-800 font-medium">Du mercredi 13 mai au lundi 18 mai 2026</p>
                  </div>
                </div>

                {/* Vacances d'été */}
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 text-lg">Vacances d'été</h4>
                    <p className="text-yellow-800 font-medium">À partir du samedi 4 juillet 2026</p>
                  </div>
                </div>

              </div>

              {/* Zone info */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600 text-center">
                  <strong>Zone B :</strong> Académies d'Aix-Marseille, Amiens, Lille, Nancy-Metz, Nantes, Nice, Normandie, Orléans-Tours, Reims, Rennes et Strasbourg
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
