#!/usr/bin/env node

/**
 * Script pour générer un hash de mot de passe pour l'administration
 * Usage: node scripts/generate-password-hash.js votre_mot_de_passe
 */

const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.error('❌ Erreur : Veuillez fournir un mot de passe');
  console.log('Usage: node scripts/generate-password-hash.js votre_mot_de_passe');
  process.exit(1);
}

if (password.length < 8) {
  console.warn('⚠️  Attention : Le mot de passe est trop court (minimum recommandé : 8 caractères)');
}

const hash = bcrypt.hashSync(password, 10);

console.log('\n✅ Hash généré avec succès !\n');
console.log('Ajoutez cette ligne dans votre fichier .env.local :');
console.log('─'.repeat(60));
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
console.log('─'.repeat(60));
console.log('\n📝 N\'oubliez pas de générer aussi une clé secrète pour les cookies :');
console.log('SECRET_COOKIE_PASSWORD=<une_clé_aléatoire_de_32_caractères>\n');

