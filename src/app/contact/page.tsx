'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    typeContact: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Nous Contacter
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              concernant notre établissement et nos formations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-blue-500">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Adresse</h3>
              <p className="text-black">
              1 rue Jules Siegfried <br />
                02100 Saint-Quentin<br />
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-500">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Téléphone</h3>
              <p className="text-black">
                Standard : 03 23 62 83 00<br />
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-purple-500">
              <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Email</h3>
              <p className="text-black">
              ce.0020049t@ac-amiens.frr<br />
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-orange-500">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-black">Horaires</h3>
              <p className="text-black">
                Lun : 8h00 - 23h30<br />
                Mar : 24h/24h<br />
                Mer : 8h00 - 12h00<br />
                Jeu - Ven : 8h00 - 18h00<br />
                Sam - Dim : Fermé<br />
              </p>
            </div>
          </div>
        </div>
      </section>


 

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Plan d'Accès
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">Comment nous rejoindre</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-black">En voiture</h4>
                    <p className="text-gray-700">
                      Sortie autoroute A26, suivre direction Saint-Quentin centre.
                      Parking visiteurs disponible (places limitées).
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold">🚌</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-black">En transports en commun</h4>
                    <p className="text-gray-700">
                      Lignes de bus 2, 5 et 8 - Arrêt "Lycée Pierre de la Ramée".
                      Gare SNCF à 10 minutes à pied.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold">🚲</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-black">À vélo</h4>
                    <p className="text-gray-700">
                      Piste cyclable sécurisée depuis le centre-ville.
                      Parking vélos couvert et surveillé.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
              {/* Ici vous pourriez intégrer une vraie carte Google Maps ou OpenStreetMap */}
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Carte interactive</p>
                <p className="text-gray-500">1 rue Jules Siegfried, 02100 Saint-Quentin</p>
                <a 
                  href="https://maps.google.com/?q=Lycée+Pierre+de+la+Ramée+Saint-Quentin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
