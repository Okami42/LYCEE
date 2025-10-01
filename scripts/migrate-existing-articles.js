#!/usr/bin/env node

/**
 * Script pour migrer les articles existants vers le système d'administration
 * Ce script convertit les articles hardcodés en articles dans la base de données JSON
 */

const fs = require('fs');
const path = require('path');

// Articles existants à migrer
const existingArticles = [
  {
    id: 'un-peu-de-revisions-pour-lentree-en-terminale-spe-maths',
    title: 'Un peu de révisions pour l\'entrée en Terminale Spé Maths',
    excerpt: 'Chers futurs élèves de terminale Spé Maths, voici un petit livret récapitulant les bases à maîtriser pour une entrée sereine.',
    content: `
      <p>Chers futurs élèves de terminale Spé Maths,</p>
      <p>Voici un petit livret récapitulant les bases à maîtriser pour une entrée sereine en terminale spécialité mathématiques.</p>
      <h2>Objectif</h2>
      <p>Ce document vous permettra de réviser les notions essentielles vues en première et de vous préparer au mieux pour la terminale.</p>
      <h2>Contenu du livret</h2>
      <ul>
        <li>Rappels sur les fonctions</li>
        <li>Dérivation</li>
        <li>Suites numériques</li>
        <li>Probabilités</li>
        <li>Géométrie dans l'espace</li>
      </ul>
      <p>Bon courage pour vos révisions et excellente rentrée !</p>
    `,
    date: '2025-07-29',
    dateFormatted: '29 juillet 2025',
    category: 'Mathématiques',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=300&fit=crop&auto=format',
    featured: false,
    files: [
      {
        name: 'TG-Bases-pour-lentree-en-spe-maths-S.-Pluot-1.pdf',
        url: '/documents/TG-Bases-pour-lentree-en-spe-maths-S.-Pluot-1.pdf'
      },
      {
        name: 'TG-Correction-bases-SPE-MATHS-S.-Pluot.pdf',
        url: '/documents/TG-Correction-bases-SPE-MATHS-S.-Pluot.pdf'
      }
    ]
  },
  {
    id: 'date-et-organisation-rentree-2025',
    title: 'Date et organisation rentrée 2025',
    excerpt: 'Toutes les informations importantes concernant l\'organisation de la rentrée scolaire 2025. Rendez-vous le lundi 1er septembre !',
    content: `
      <h2>Informations générales</h2>
      <p>La rentrée scolaire 2025 aura lieu le <strong>lundi 1er septembre 2025</strong>.</p>
      
      <h2>Organisation par niveau</h2>
      
      <h3>Seconde</h3>
      <ul>
        <li>Accueil à 8h00</li>
        <li>Appel et constitution des classes</li>
        <li>Distribution des emplois du temps</li>
        <li>Visite du lycée</li>
      </ul>
      
      <h3>Première et Terminale</h3>
      <ul>
        <li>Accueil à 9h00</li>
        <li>Distribution des emplois du temps</li>
        <li>Début des cours à 10h00</li>
      </ul>
      
      <h2>Documents à apporter</h2>
      <ul>
        <li>Certificat de scolarité</li>
        <li>Photos d'identité</li>
        <li>Attestation d'assurance scolaire</li>
        <li>Matériel scolaire de base</li>
      </ul>
      
      <blockquote>
        <p>Nous vous souhaitons à tous une excellente rentrée scolaire 2025 !</p>
      </blockquote>
    `,
    date: '2025-06-20',
    dateFormatted: '20 juin 2025',
    category: 'Rentrée scolaire',
    categoryColor: 'bg-emerald-100 text-emerald-800',
    image: 'https://lycee.bonne-terre.fr/wp-content/uploads/2025/07/rentree-2025-940x675.png',
    featured: false
  }
];

// Chemin du fichier articles.json
const articlesPath = path.join(process.cwd(), 'data', 'articles.json');

// Créer le dossier data s'il n'existe pas
const dataDir = path.dirname(articlesPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
  console.log('✅ Dossier data/ créé');
}

// Lire les articles existants ou créer un tableau vide
let articles = [];
if (fs.existsSync(articlesPath)) {
  const data = fs.readFileSync(articlesPath, 'utf-8');
  articles = JSON.parse(data);
  console.log(`📖 ${articles.length} article(s) existant(s) trouvé(s)`);
}

// Ajouter les nouveaux articles s'ils n'existent pas déjà
let added = 0;
existingArticles.forEach(article => {
  const exists = articles.some(a => a.id === article.id);
  if (!exists) {
    articles.push(article);
    added++;
    console.log(`✅ Article ajouté : ${article.title}`);
  } else {
    console.log(`⏭️  Article existant ignoré : ${article.title}`);
  }
});

// Sauvegarder
fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2));

console.log('\n' + '='.repeat(60));
console.log(`🎉 Migration terminée !`);
console.log(`📊 ${added} article(s) ajouté(s)`);
console.log(`📚 Total : ${articles.length} article(s) dans la base`);
console.log('='.repeat(60));
console.log('\n💡 Vous pouvez maintenant gérer ces articles depuis l\'interface admin');
console.log('🔗 http://localhost:3000/admin/login\n');

