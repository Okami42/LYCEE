'use client';

import { useState } from 'react';
import { Calendar, FileText, Users, GraduationCap, CheckCircle, AlertCircle, Download, Mail, Phone } from 'lucide-react';

export default function Inscriptions() {
  const [selectedSection, setSelectedSection] = useState('seconde');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Inscriptions & Admissions
            </h1>
          </div>
        </div>
      </section>

  

      {/* Procédures d'Inscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Procédures d'Inscription
          </h2>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => setSelectedSection('seconde')}
              className={`px-6 py-3 font-semibold transition-colors ${
                selectedSection === 'seconde'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Entrée en Seconde Générale et Technologique
            </button>
            <button
              onClick={() => setSelectedSection('premiere')}
              className={`px-6 py-3 font-semibold transition-colors ${
                selectedSection === 'premiere'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Entrée en Première Générale et Technologique
            </button>
            <button
              onClick={() => setSelectedSection('terminale')}
              className={`px-6 py-3 font-semibold transition-colors ${
                selectedSection === 'terminale'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Entrée en Terminale Générale et Technologique
            </button>
          </div>

          {/* Content for Seconde */}
          {selectedSection === 'seconde' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Inscription en Seconde Générale et Technologique</h3>
                <div className="text-center mb-6">
                  <p className="text-lg text-black font-semibold mb-4">
                    Mesdames et Messieurs les responsables légaux,
                  </p>
                  <p className="text-black mb-4">
                    Suite à la notification d'affectation que vous venez de recevoir, vous devez maintenant procéder à l'inscription de votre enfant.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📅 Dates d'inscription sur rendez-vous</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <div className="font-bold text-black">Lundi 30 juin 2025</div>
                      <div className="text-black">8h - 18h</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <div className="font-bold text-black">Mardi 1er juillet 2025</div>
                      <div className="text-black">8h - 18h</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <div className="font-bold text-black">Mercredi 2 juillet 2025</div>
                      <div className="text-black">8h - 18h</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📞 Prise de rendez-vous</h4>
                  <div className="text-center">
                    <p className="text-black mb-2">
                      <strong>Appelez dès maintenant :</strong>
                    </p>
                    <p className="text-2xl font-bold text-green-600 mb-2">03.23.62.83.00</p>
                    <p className="text-black">
                      En précisant <strong>"inscription en seconde"</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-100 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📋 Préparation du rendez-vous</h4>
                  <div className="text-center">

                      <strong className="text-black">Téléchargez les documents ci-dessous et complétez-les pour le rendez-vous :</strong>
                      <p className="text-black">
                      Pour préparer ce rendez-vous et limiter le temps d'inscription, vous trouverez les documents à télécharger et à compléter ainsi que les pièces à fournir ci dessous et sur le service en ligne Inscription 
                      <a href="https://educonnect.education.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline ml-1">
                        https://educonnect.education.gouv.fr/
                      </a>
                      </p>
                   
                  </div>
                </div>

                <div className="text-center">

                  
                
                  
                  <p className="text-black font-semibold">
                    Agnès LECLERC<br />
                    <span className="text-lg">Proviseur</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Content for Première */}
          {selectedSection === 'premiere' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Inscription en Première Générale et Technologique</h3>
                <div className="text-center mb-6">
                  <p className="text-lg text-black font-semibold mb-4">
                    Mesdames et Messieurs les responsables légaux,
                  </p>
                  <p className="text-black mb-4">
                    Pour les élèves entrants en 1ère ST2S ou 1ère STMG, le lycée vous accueillera sur rendez-vous :
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📅 Date d'inscription sur rendez-vous</h4>
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-lg inline-block">
                      <div className="font-bold text-black">Vendredi 27 juin 2025</div>
                      <div className="text-black">8h - 18h</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-100 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📞 Prise de rendez-vous</h4>
                  <div className="text-center">
                    <p className="text-black mb-2">
                      <strong>Appelez l'établissement :</strong>
                    </p>
                    <p className="text-2xl font-bold text-green-600 mb-2">03.23.62.83.00</p>
                    <p className="text-black">
                      En précisant <strong>"inscription en 1ère technologique"</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-100 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-bold text-black mb-4 text-center">📋 Préparation du rendez-vous</h4>
                  <div className="text-center">
                    <strong className="text-black">Téléchargez les documents ci-dessous et complétez-les pour le rendez-vous :</strong>
                    <p className="text-black">
                      Pour préparer ce rendez-vous et limiter le temps d'inscription, vous trouverez ci-dessous les documents à télécharger et à compléter ainsi que les pièces à fournir.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-black mb-2">
                    Toute l'équipe de l'établissement se joint à moi pour vous assurer de notre engagement auprès de vous, pour la réussite scolaire de votre enfant.
                  </p>
                  <p className="text-black font-semibold">
                    Agnès LECLERC<br />
                    Proviseur
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Content for Terminale */}
          {selectedSection === 'terminale' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-black mb-6 text-center">Inscription en Terminale Générale et Technologique</h3>
                <div className="text-center mb-6">
                  <p className="text-lg text-black font-semibold mb-4">
                    Mesdames et Messieurs les responsables légaux,
                  </p>
                  <p className="text-black mb-4">
                    Vous trouverez ci-dessous les documents nécessaires à l'inscription de votre enfant.
                  </p>
                  <p className="text-black mb-4">
                    Veuillez télécharger, compléter et fournir tous les documents listés ci-dessous.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-black font-semibold">
                    Agnès LECLERC<br />
                    Proviseur
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Documents à Télécharger */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Documents à Télécharger - {selectedSection === 'seconde' ? 'Seconde' : selectedSection === 'premiere' ? 'Première' : 'Terminale'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Documents pour Seconde */}
            {selectedSection === 'seconde' && (
              <>
                <a href="/inscription-seconde/2025-2026-Composition-dossier-2nde.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Composition dossier 2nde</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-seconde/Fiche-de-renseignements-Responsables-legaux.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche de renseignements</h3>
                  <p className="text-black text-sm">PDF - Responsables légaux</p>
                </a>

                <a href="/inscription-seconde/fiche-scolarite-2nde.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche de scolarité</h3>
                  <p className="text-black text-sm">PDF - 2nde</p>
                </a>

                <a href="/inscription-seconde/Fiche-dintendance-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'intendance</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-seconde/Fiche-durgence-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'urgence</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-seconde/autor._droit_image_mineur.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation droit image</h3>
                  <p className="text-black text-sm">PDF - Mineur</p>
                </a>

                <a href="/inscription-seconde/Autorisation-de-sortie-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation de sortie</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-seconde/TRANSPORT-INSCRIPTION-EN-LIGNE.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Transport scolaire</h3>
                  <p className="text-black text-sm">PDF - Inscription en ligne</p>
                </a>

                <a href="/inscription-seconde/Etude-de-bourse-DOCUMENT-A-RENSEIGNER-OBLIGATOIREMENT-NOUVELLE-INSCRIPTION.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude de bourse</h3>
                  <p className="text-black text-sm">PDF - Nouvelle inscription</p>
                </a>

                <a href="/inscription-seconde/2025-2026-nouveaux-en-MLDS-composition.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Composition MLDS</h3>
                  <p className="text-black text-sm">PDF - Nouveaux 2025-2026</p>
                </a>

                <a href="/inscription-seconde/Adhesion-Maison-Des-Lyceens.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-lime-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Adhésion MDL</h3>
                  <p className="text-black text-sm">PDF - Maison des lycéens</p>
                </a>

                <a href="/inscription-seconde/brochure-turboself-2025-2026-maj-nouveaux-tarifs.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Brochure Turboself</h3>
                  <p className="text-black text-sm">PDF - Tarifs 2025-2026</p>
                </a>

                <a href="/inscription-seconde/CARTE-HDF.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Carte HDF</h3>
                  <p className="text-black text-sm">PDF - Hauts-de-France</p>
                </a>

                <a href="/inscription-seconde/Codes-professions-responsables-legaux.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Codes professions</h3>
                  <p className="text-black text-sm">PDF - Responsables légaux</p>
                </a>

                <a href="/inscription-seconde/Etude-automatique-du-droit-de-bourse.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude automatique bourse</h3>
                  <p className="text-black text-sm">PDF - Droit de bourse</p>
                </a>

                <a href="/inscription-seconde/fiche-MLDS.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche MLDS</h3>
                  <p className="text-black text-sm">PDF - Mission locale</p>
                </a>

                <a href="/inscription-seconde/trousseau_internat.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-stone-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Trousseau internat</h3>
                  <p className="text-black text-sm">PDF - Liste des affaires</p>
                </a>
              </>
            )}

            {/* Documents pour Première */}
            {selectedSection === 'premiere' && (
              <>
                <a href="/inscription-premiere/20252026-nouveaux-en-1ERE-composition-DOSSIER.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Composition dossier 1ère</h3>
                  <p className="text-black text-sm">PDF - Nouveaux 2025-2026</p>
                </a>

                <a href="/inscription-premiere/FICHE-DE-RENSEIGNEMENT-RESPONSABLES-LEGAUX.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche de renseignements</h3>
                  <p className="text-black text-sm">PDF - Responsables légaux</p>
                </a>

                <a href="/inscription-premiere/fiche-1ere-GENERALE-2.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche 1ère Générale</h3>
                  <p className="text-black text-sm">PDF - Voie générale</p>
                </a>

                <a href="/inscription-premiere/fiche-1ere-TECHNOLOGIQUE-2.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche 1ère Technologique</h3>
                  <p className="text-black text-sm">PDF - Voie technologique</p>
                </a>

                <a href="/inscription-premiere/FICHE-intendance-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'intendance</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-premiere/Fiche-d-urgence-2025-2026.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'urgence</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-premiere/autor._droit_image_mineur-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation droit image</h3>
                  <p className="text-black text-sm">PDF - Mineur</p>
                </a>

                <a href="/inscription-premiere/Autorisation-Captation-voix_image-Majeur.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation captation</h3>
                  <p className="text-black text-sm">PDF - Voix et image majeur</p>
                </a>

                <a href="/inscription-premiere/Autorisation-de-sortie-2025-2026-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation de sortie</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-premiere/TRANSPORT-INSCRIPTION-EN-LIGNE.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Transport scolaire</h3>
                  <p className="text-black text-sm">PDF - Inscription en ligne</p>
                </a>

                <a href="/inscription-premiere/Etude-de-bourse-DOCUMENT-A-RENSEIGNER-OBLIGATOIREMENT-NOUVELLE-INSCRIPTION-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude de bourse</h3>
                  <p className="text-black text-sm">PDF - Nouvelle inscription</p>
                </a>

                <a href="/inscription-premiere/Adhesion-Maison-Des-Lyceens-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-lime-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Adhésion MDL</h3>
                  <p className="text-black text-sm">PDF - Maison des lycéens</p>
                </a>

                <a href="/inscription-premiere/brochure-turboself-2025-2026-maj-nouveaux-tarifs-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Brochure Turboself</h3>
                  <p className="text-black text-sm">PDF - Tarifs 2025-2026</p>
                </a>

                <a href="/inscription-premiere/CARTE-HDF.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Carte HDF</h3>
                  <p className="text-black text-sm">PDF - Hauts-de-France</p>
                </a>

                <a href="/inscription-premiere/Codes-professions-responsables-legaux-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Codes professions</h3>
                  <p className="text-black text-sm">PDF - Responsables légaux</p>
                </a>

                <a href="/inscription-premiere/Etude-automatique-du-droit-de-bourse-1.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude automatique bourse</h3>
                  <p className="text-black text-sm">PDF - Droit de bourse</p>
                </a>

                <a href="/inscription-premiere/trousseau_internat.pdf" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-stone-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Trousseau internat</h3>
                  <p className="text-black text-sm">PDF - Liste des affaires</p>
                </a>
              </>
            )}

            {/* Documents pour Terminale */}
            {selectedSection === 'terminale' && (
              <>
                <a href="/inscription-terminale/Composition-dossier-Terminale.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Composition dossier Terminale</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-terminale/Fiche-de-renseignements-Terminale.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche de renseignements</h3>
                  <p className="text-black text-sm">PDF - Terminale</p>
                </a>

                <a href="/inscription-terminale/fiche-scolarite-Terminale.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche de scolarité</h3>
                  <p className="text-black text-sm">PDF - Terminale</p>
                </a>

                <a href="/inscription-terminale/Fiche-dintendance-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'intendance</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-terminale/Fiche-durgence-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche d'urgence</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-terminale/autor._droit_image_mineur.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-teal-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation droit image</h3>
                  <p className="text-black text-sm">PDF - Mineur</p>
                </a>

                <a href="/inscription-terminale/Autorisation-de-sortie-2025-2026.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Autorisation de sortie</h3>
                  <p className="text-black text-sm">PDF - 2025-2026</p>
                </a>

                <a href="/inscription-terminale/TRANSPORT-INSCRIPTION-EN-LIGNE.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Transport scolaire</h3>
                  <p className="text-black text-sm">PDF - Inscription en ligne</p>
                </a>

                <a href="/inscription-terminale/Etude-de-bourse-DOCUMENT-A-RENSEIGNER-OBLIGATOIREMENT-NOUVELLE-INSCRIPTION.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-pink-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude de bourse</h3>
                  <p className="text-black text-sm">PDF - Nouvelle inscription</p>
                </a>

                <a href="/inscription-terminale/2025-2026-nouveaux-en-MLDS-composition.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Composition MLDS</h3>
                  <p className="text-black text-sm">PDF - Nouveaux 2025-2026</p>
                </a>

                <a href="/inscription-terminale/Adhesion-Maison-Des-Lyceens.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-lime-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Adhésion MDL</h3>
                  <p className="text-black text-sm">PDF - Maison des lycéens</p>
                </a>

                <a href="/inscription-terminale/brochure-turboself-2025-2026-maj-nouveaux-tarifs.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Brochure Turboself</h3>
                  <p className="text-black text-sm">PDF - Tarifs 2025-2026</p>
                </a>

                <a href="/inscription-terminale/CARTE-HDF.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-sky-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Carte HDF</h3>
                  <p className="text-black text-sm">PDF - Hauts-de-France</p>
                </a>

                <a href="/inscription-terminale/Codes-professions-responsables-legaux.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-violet-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Codes professions</h3>
                  <p className="text-black text-sm">PDF - Responsables légaux</p>
                </a>

                <a href="/inscription-terminale/Etude-automatique-du-droit-de-bourse.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Étude automatique bourse</h3>
                  <p className="text-black text-sm">PDF - Droit de bourse</p>
                </a>

                <a href="/inscription-terminale/fiche-MLDS.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Fiche MLDS</h3>
                  <p className="text-black text-sm">PDF - Mission locale</p>
                </a>

                <a href="/inscription-terminale/trousseau_internat.pdf" className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group">
                  <Download className="h-12 w-12 text-stone-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2 text-black">Trousseau internat</h3>
                  <p className="text-black text-sm">PDF - Liste des affaires</p>
                </a>
              </>
            )}
          </div>
        </div>
      </section>


    </div>
  );
}
