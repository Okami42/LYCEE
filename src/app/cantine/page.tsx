import { ChefHat, Clock, Euro, Utensils, Leaf, Heart, Shield, Users } from 'lucide-react';

export default function Cantine() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Restauration Scolaire
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Une restauration de qualité privilégiant les produits locaux et de saison
              pour le bien-être et la santé de nos élèves.
            </p>
          </div>
        </div>
      </section>

      {/* Menu de la Semaine */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Menu de la Semaine
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Lundi */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500">
              <div className="bg-blue-500 text-white p-4 text-center">
                <h3 className="font-bold">LUNDI</h3>
                <p className="text-sm">25 Mars</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Entrée</h4>
                    <p className="text-sm">Salade de betteraves</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Plat</h4>
                    <p className="text-sm">Escalope de porc<br/>Haricots verts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fromage</h4>
                    <p className="text-sm">Camembert</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dessert</h4>
                    <p className="text-sm">Compote de pommes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mardi */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500">
              <div className="bg-green-500 text-white p-4 text-center">
                <h3 className="font-bold">MARDI</h3>
                <p className="text-sm">26 Mars</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Entrée</h4>
                    <p className="text-sm">Potage de légumes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Plat</h4>
                    <p className="text-sm">Saumon grillé<br/>Riz pilaf</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fromage</h4>
                    <p className="text-sm">Yaourt nature</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dessert</h4>
                    <p className="text-sm">Tarte aux fruits</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mercredi */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-yellow-500">
              <div className="bg-yellow-500 text-white p-4 text-center">
                <h3 className="font-bold">MERCREDI</h3>
                <p className="text-sm">27 Mars</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Entrée</h4>
                    <p className="text-sm">Carottes râpées</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Plat</h4>
                    <p className="text-sm">Bœuf bourguignon<br/>Purée de pommes de terre</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fromage</h4>
                    <p className="text-sm">Gouda</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dessert</h4>
                    <p className="text-sm">Mousse au chocolat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jeudi */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500">
              <div className="bg-purple-500 text-white p-4 text-center">
                <h3 className="font-bold">JEUDI</h3>
                <p className="text-sm">28 Mars</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Entrée</h4>
                    <p className="text-sm">Salade verte</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Plat</h4>
                    <p className="text-sm">Poulet rôti<br/>Ratatouille</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fromage</h4>
                    <p className="text-sm">Brie</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dessert</h4>
                    <p className="text-sm">Fruit de saison</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendredi */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-red-500">
              <div className="bg-red-500 text-white p-4 text-center">
                <h3 className="font-bold">VENDREDI</h3>
                <p className="text-sm">29 Mars</p>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-green-600">Entrée</h4>
                    <p className="text-sm">Taboulé</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Plat</h4>
                    <p className="text-sm">Poisson pané<br/>Frites</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fromage</h4>
                    <p className="text-sm">Fromage blanc</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Dessert</h4>
                    <p className="text-sm">Gâteau au yaourt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/documents/menu-complet.pdf" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Utensils className="h-5 w-5 mr-2" />
              Télécharger le menu complet
            </a>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nos Engagements Qualité
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Produits Locaux</h3>
              <p className="text-gray-600">
                80% de nos produits proviennent de producteurs locaux dans un rayon de 100km.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Équilibre Nutritionnel</h3>
              <p className="text-gray-600">
                Menus élaborés par une diététicienne pour répondre aux besoins des adolescents.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sécurité Alimentaire</h3>
              <p className="text-gray-600">
                Respect strict des normes HACCP et traçabilité complète de nos produits.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <ChefHat className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cuisine Traditionnelle</h3>
              <p className="text-gray-600">
                Préparation sur place par notre équipe de cuisiniers avec des recettes maison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Informations Pratiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Horaires de Service</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Petit-déjeuner :</strong> 7h30 - 8h00</p>
                <p><strong>Déjeuner :</strong> 11h45 - 13h30</p>
                <p><strong>Goûter :</strong> 16h00 - 16h30</p>
                <p><strong>Service continu</strong> pour s'adapter aux emplois du temps</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <Euro className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tarification</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Élèves :</strong> 3,30€ / repas</p>
                <p><strong>Personnel :</strong> 4,50€ / repas</p>
                <p><strong>Externes occasionnels :</strong> 5,00€</p>
                <p><strong>Paiement :</strong> Badge rechargeable ou espèces</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Capacité d'Accueil</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Self-service :</strong> 400 places</p>
                <p><strong>Services par jour :</strong> 800 repas</p>
                <p><strong>Restaurants :</strong> 2 espaces distincts</p>
                <p><strong>Adaptations :</strong> Régimes spéciaux possibles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inscriptions */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Inscription à la Demi-Pension
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-orange-900">Modalités d'Inscription</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Formulaire d'inscription</h4>
                      <p className="text-gray-600">À compléter lors de l'inscription administrative</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fiche sanitaire</h4>
                      <p className="text-gray-600">Allergies et régimes particuliers à signaler</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Badge de restauration</h4>
                      <p className="text-gray-600">Remis après validation de l'inscription</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-orange-900">Régimes Spéciaux</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700">PAI (Projet d'Accueil Individualisé)</h4>
                    <p className="text-gray-600">Pour les élèves avec allergies alimentaires</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">Régimes Religieux</h4>
                    <p className="text-gray-600">Menus adaptés selon les convictions</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-700">Régimes Médicaux</h4>
                    <p className="text-gray-600">Sur prescription médicale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/documents/inscription-cantine.pdf" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center mr-4"
              >
                <ChefHat className="h-5 w-5 mr-2" />
                Formulaire d'inscription
              </a>
              <a 
                href="/contact" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Restauration */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Restauration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ChefHat className="h-16 w-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-3">Chef de Cuisine</h3>
              <p className="text-gray-300">M. Laurent DUBOIS</p>
              <p className="text-gray-300">cuisine@lycee-ramee.fr</p>
            </div>
            
            <div>
              <Users className="h-16 w-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-3">Gestionnaire</h3>
              <p className="text-gray-300">Mme Sophie MARTIN</p>
              <p className="text-gray-300">03 23 64 23 27</p>
            </div>
            
            <div>
              <Heart className="h-16 w-16 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-3">Diététicienne</h3>
              <p className="text-gray-300">Dr. Marie LENOIR</p>
              <p className="text-gray-300">nutrition@lycee-ramee.fr</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
