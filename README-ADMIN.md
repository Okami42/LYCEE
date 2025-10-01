# Guide d'Administration - Lycée Site

## 🔐 Accès à l'administration

### Connexion
- URL : `http://localhost:3000/admin/login` (développement) ou `https://votre-domaine.com/admin/login` (production)
- Mot de passe par défaut (développement) : `admin123`

### ⚠️ IMPORTANT - Sécurité

En production, vous **DEVEZ** changer le mot de passe par défaut :

1. Générer un hash de votre nouveau mot de passe :
```javascript
const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('votre_nouveau_mot_de_passe', 10);
console.log(hash);
```

2. Créer un fichier `.env.local` à la racine du projet :
```env
ADMIN_PASSWORD_HASH=votre_hash_généré
SECRET_COOKIE_PASSWORD=une_clé_secrète_de_32_caractères_minimum
```

## 📝 Gestion des articles

### Créer un nouvel article

1. Connectez-vous au dashboard admin
2. Cliquez sur "Nouvel article"
3. Remplissez les champs :
   - **Titre** : Le titre principal de l'article
   - **Extrait** : Un court résumé (affiché sur la page actualités)
   - **Catégorie** : Choisir parmi les catégories prédéfinies
   - **Image principale** : URL ou upload d'une image
   - **Contenu** : Utilisez l'éditeur visuel pour formater votre article

### Éditeur visuel

L'éditeur propose les fonctionnalités suivantes :

#### Formatage de texte
- **Gras** et *Italique*
- Titres (H1, H2, H3)
- Alignement (gauche, centre, droite)

#### Listes
- Listes à puces
- Listes numérotées

#### Éléments avancés
- Citations
- Blocs de code
- Liens
- Images

### Ajouter des images

2 options :
1. **URL externe** : Coller l'URL d'une image hébergée ailleurs
2. **Upload** : Cliquer sur le bouton "Upload" pour télécharger depuis votre ordinateur

### Ajouter des fichiers à télécharger

1. Dans la section "Fichiers à télécharger"
2. Cliquer sur "Ajouter un fichier"
3. Sélectionner le fichier (PDF, Word, etc.)
4. Le fichier sera disponible en téléchargement sur l'article publié

### Mettre un article à la une

Cocher la case "Mettre en avant" pour afficher l'article en grand format sur la page actualités.

### Modifier un article

1. Dans le dashboard, cliquer sur l'icône "Modifier" (crayon) à côté de l'article
2. Effectuer les modifications
3. Cliquer sur "Sauvegarder"

### Supprimer un article

1. Dans le dashboard, cliquer sur l'icône "Supprimer" (poubelle)
2. Confirmer la suppression

## 🎨 Conseils pour de beaux articles

### Structure recommandée

1. **Introduction** : Présenter le sujet en quelques lignes
2. **Section principale** : Développer le contenu
3. **Appel à l'action** : Que doivent faire les lecteurs ?
4. **Informations pratiques** : Dates, liens, fichiers

### Utiliser les encadrés

Pour créer des encadrés colorés comme dans l'exemple "Calculatrice Numworks", utilisez les citations (blockquote) dans l'éditeur.

### Images

- Préférez des images de bonne qualité (minimum 1200px de largeur)
- Formats recommandés : JPG, PNG, WebP
- Compressez les images avant upload pour un chargement rapide

### Fichiers

- Nommez vos fichiers clairement (ex: "reglement-interieur-2025.pdf")
- Formats acceptés : PDF, DOC, DOCX, XLS, XLSX, etc.

## 🚀 Déploiement

Après avoir créé ou modifié des articles, les changements sont immédiatement visibles sur le site.

## 📁 Emplacement des fichiers

- **Articles** : `data/articles.json`
- **Images uploadées** : `public/images/uploads/`
- **Documents uploadés** : `public/documents/uploads/`

## 🛟 Support

En cas de problème :
1. Vérifiez que vous êtes bien connecté
2. Essayez de vous reconnecter
3. Vérifiez les permissions du dossier `data/`
4. Contactez le développeur si le problème persiste

## 📊 Catégories disponibles

- Vie du lycée (bleu)
- Rentrée scolaire (vert)
- Mathématiques (violet)
- Inscription 2025/2026 (orange)
- Événement (rose)
- Information (indigo)

Pour ajouter de nouvelles catégories, modifiez le fichier `src/app/admin/dashboard/editor/page.tsx`.

