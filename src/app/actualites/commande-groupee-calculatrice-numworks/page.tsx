import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, ExternalLink, QrCode } from 'lucide-react';

export default function CommandeCalculatriceNumworks() {
  return (
    <div className="bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Accueil</Link>
            <span className="text-slate-500">›</span>
            <Link href="/actualites" className="text-blue-600 hover:text-blue-800">Actualités</Link>
            <span className="text-slate-500">›</span>
            <span className="text-slate-700">Commande groupée – Calculatrice Numworks</span>
          </nav>
        </div>
      </div>

      {/* Article content */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link 
            href="/actualites" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux actualités
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-slate-500 mr-2" />
              <time className="text-slate-600">Publié le 19 juillet 2025</time>
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-600">Inscription 2025/2026</span>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Commande groupée – Calculatrice Numworks
            </h1>

            {/* Featured image */}
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://je-progresse-en-maths.fr/wp-content/uploads/2023/08/numworks-calculatrice.jpg"
                alt="Calculatrice Numworks"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article body */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-blue-900 font-semibold text-lg mb-2">
                Offre spéciale pour nos élèves !
              </p>
              <p className="text-blue-800 mb-4">
                Tous les ans, nous proposons une commande groupée de calculatrices NumWorks à un prix préférentiel.
              </p>
              
              {/* Prix avantageux dans l'encadré bleu */}
              <div className="bg-white/70 rounded-lg p-4 mb-4">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Prix avantageux</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Prix public :</span>
                    <span className="text-slate-400 line-through">82,99 €</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-900 font-semibold">Prix groupé :</span>
                    <span className="text-green-600 font-bold text-xl">74,69 €</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Économie : 8,30 €
                  </div>
                </div>
              </div>
              
              <p className="text-blue-900 font-semibold text-lg">
                Nous sommes habitués, en classe, à travailler sur ce modèle.
              </p>
            </div>


            <div className="bg-slate-900 text-white rounded-lg p-8 text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Comment commander ?</h3>
              <p className="text-slate-300 mb-6">
                Rien de plus simple ! Scannez le QR code ci-dessous ou cliquez sur le lien.
              </p>
              
              {/* QR Code */}
              <div className="bg-white p-6 rounded-lg inline-block mb-6">
                <img
                  src="/images/qr-code-numworks.png"
                  alt="QR Code pour la commande groupée de calculatrices Numworks"
                  width="192"
                  height="192"
                  className="rounded"
                />
              </div>
              
              <div className="text-center">
                <p className="text-slate-300 mb-4">ou</p>
                <a 
                  href="https://my.numworks.com/group_orders/i3CbwC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Cliquez sur le lien
                </a>
              </div>
            </div>

            {/* Instructions détaillées */}
            <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Étapes de commande</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Renseignez les informations</h4>
                    <p className="text-slate-700">
                      Renseignez les informations concernant votre enfant, en précisant le niveau :
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">2GT</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">1T ou 1G</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">TT ou TG</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Paiement sécurisé</h4>
                    <p className="text-slate-700">
                      Payez directement en ligne en toute sécurité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Livraison au lycée</h4>
                    <p className="text-slate-700">
                      Les calculatrices seront livrées au lycée et distribuées par le professeur de votre enfant 
                      peu après le <strong>11 septembre</strong> (date de fin de la commande groupée).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message de l'équipe */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-slate-700 text-lg mb-4 italic">
                "Bel été à tous et on se rencontre en septembre, pour une belle rentrée mathématique."
              </p>
              <p className="text-slate-900 font-semibold">
                L'équipe de mathématiques
              </p>
            </div>

        
          </div>

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-slate-600 text-sm">
                  Article publié dans la catégorie <strong>Inscription 2025/2026</strong>
                </p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/actualites" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Toutes les actualités
                </Link>
                <Link 
                  href="/inscriptions" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Inscriptions
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
}
