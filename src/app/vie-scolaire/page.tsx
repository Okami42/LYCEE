import { Users, Heart, Shield, BookOpen, Music, Trophy, Camera, Gamepad2, Globe, Stethoscope } from 'lucide-react';

export default function VieScolaire() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-teal-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vie Scolaire
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Un environnement bienveillant et stimulant pour l'épanouissement 
              personnel et collectif de tous nos élèves.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Services aux Élèves
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Infirmerie</h3>
              <p className="text-gray-600 mb-4">
                Suivi médical et accompagnement santé avec une infirmière diplômée.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Soins et premiers secours</li>
                <li>• Suivi médical</li>
                <li>• Prévention santé</li>
                <li>• Ouvert de 8h à 17h</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">CDI</h3>
              <p className="text-gray-600 mb-4">
                Centre de Documentation et d'Information pour la recherche et l'étude.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15 000 ouvrages</li>
                <li>• Espace numérique</li>
                <li>• Aide aux recherches</li>
                <li>• Animations culturelles</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Soutien Psychologique</h3>
              <p className="text-gray-600 mb-4">
                Accompagnement et écoute avec notre psychologue scolaire.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entretiens individuels</li>
                <li>• Gestion du stress</li>
                <li>• Aide à l'orientation</li>
                <li>• Prévention du harcèlement</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
              <Shield className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
              <p className="text-gray-600 mb-4">
                Un environnement sécurisé avec surveillance et protocoles adaptés.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Contrôle d'accès</li>
                <li>• Surveillance continue</li>
                <li>• Protocoles d'urgence</li>
                <li>• Prévention des risques</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vie Scolaire</h3>
              <p className="text-gray-600 mb-4">
                Suivi éducatif et accompagnement au quotidien par nos CPE.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Suivi des absences</li>
                <li>• Médiation conflits</li>
                <li>• Projets citoyens</li>
                <li>• Liaison familles</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-teal-500">
              <Globe className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Orientation</h3>
              <p className="text-gray-600 mb-4">
                Conseils personnalisés pour construire votre projet d'avenir.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entretiens orientation</li>
                <li>• Salons étudiants</li>
                <li>• Parcoursup</li>
                <li>• Rencontres professionnels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs et Activités */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Clubs & Activités Extrascolaires
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Music className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Club Musique</h3>
              <p className="text-gray-600 mb-4">
                Orchestre, chorale et groupes de musique moderne
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Mardi et Jeudi 17h-18h30</p>
                <p>👥 Tous niveaux acceptés</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Trophy className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Association Sportive</h3>
              <p className="text-gray-600 mb-4">
                Football, basketball, volley, badminton, athlétisme
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Mercredi après-midi</p>
                <p>🏆 Compétitions UNSS</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Camera className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Atelier Photo</h3>
              <p className="text-gray-600 mb-4">
                Photographie, développement et création artistique
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Lundi 17h-18h30</p>
                <p>📷 Matériel fourni</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Gamepad2 className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Club E-Sport</h3>
              <p className="text-gray-600 mb-4">
                Jeux vidéo éducatifs et compétitions inter-lycées
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Vendredi 17h-19h</p>
                <p>🎮 Tournois réguliers</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Club Lecture</h3>
              <p className="text-gray-600 mb-4">
                Rencontres littéraires et prix des lycéens
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Jeudi 12h30-13h30</p>
                <p>📚 Prix Goncourt Lycéens</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Globe className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Club International</h3>
              <p className="text-gray-600 mb-4">
                Échanges culturels et préparation voyages
              </p>
              <div className="text-sm text-gray-500">
                <p>📅 Mardi 12h30-13h30</p>
                <p>✈️ Voyages scolaires</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Règlement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Règlement Intérieur
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Droits des Élèves</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Droit à l'éducation et à la formation</li>
                <li>• Respect de la dignité et de l'intégrité</li>
                <li>• Liberté d'expression dans le respect d'autrui</li>
                <li>• Droit de représentation (délégués)</li>
                <li>• Accès aux services et équipements</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">Devoirs des Élèves</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Respecter les règles de vie commune</li>
                <li>• Assiduité et ponctualité</li>
                <li>• Respect des personnes et des biens</li>
                <li>• Participation active aux cours</li>
                <li>• Respect de la laïcité</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/documents/reglement-interieur.pdf" 
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Télécharger le règlement complet
            </a>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Horaires & Informations Pratiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Horaires d'Ouverture</h3>
              <div className="space-y-2">
                <p>Lundi - Vendredi : 7h30 - 18h30</p>
                <p>Samedi : 8h00 - 12h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Horaires des Cours</h3>
              <div className="space-y-2 text-sm">
                <p>M1: 8h00 - 8h55</p>
                <p>M2: 9h00 - 9h55</p>
                <p>M3: 10h10 - 11h05</p>
                <p>M4: 11h10 - 12h05</p>
                <p>S1: 13h00 - 13h55</p>
                <p>S2: 14h00 - 14h55</p>
                <p>S3: 15h10 - 16h05</p>
                <p>S4: 16h10 - 17h05</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Vie Scolaire</h3>
              <div className="space-y-2">
                <p>📞 03 23 64 23 25</p>
                <p>📧 viescolaire@lycee-ramee.fr</p>
                <p>📍 Bureau Vie Scolaire</p>
                <p>⏰ 7h30 - 17h30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
