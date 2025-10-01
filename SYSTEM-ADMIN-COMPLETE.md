# 🎉 Système d'Administration - Installation Complète

## ✅ Ce qui a été installé

### 1. 🔐 Système d'authentification sécurisé
- Page de connexion avec mot de passe
- Gestion de sessions avec cookies sécurisés
- Protection de toutes les routes admin
- Mot de passe par défaut en dev : `admin123`

### 2. 📝 Interface d'administration complète
- **Dashboard** : Vue d'ensemble de tous les articles
- **Éditeur visuel** : Créer et modifier des articles sans coder
- **Gestion des médias** : Upload d'images et de fichiers
- **Catégories** : Système de classification des articles
- **Articles à la une** : Mise en avant des articles importants

### 3. 🎨 Éditeur WYSIWYG (Tiptap)
Fonctionnalités disponibles :
- ✏️ Formatage de texte (gras, italique)
- 📑 Titres (H1, H2, H3)
- 📍 Alignement (gauche, centre, droite)
- 📋 Listes (à puces, numérotées)
- 💬 Citations et blocs de code
- 🔗 Liens et images
- ↩️ Annuler/Refaire

### 4. 📤 Système d'upload de fichiers
- Upload d'images (JPG, PNG, WebP, etc.)
- Upload de documents (PDF, Word, Excel, etc.)
- Organisation automatique dans les dossiers appropriés
- Noms de fichiers sécurisés et uniques

### 5. 🗄️ Base de données JSON
- Stockage simple et efficace dans `data/articles.json`
- Sauvegarde automatique à chaque modification
- Facile à sauvegarder et à restaurer

## 📁 Nouveaux fichiers créés

### Frontend
```
src/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx              # Page de connexion
│   │   └── dashboard/
│   │       ├── page.tsx                # Dashboard principal
│   │       └── editor/page.tsx         # Éditeur d'articles
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts          # API de connexion
│   │   │   ├── logout/route.ts         # API de déconnexion
│   │   │   └── status/route.ts         # Vérification du statut
│   │   └── admin/
│   │       ├── articles/route.ts       # CRUD articles
│   │       ├── articles/[id]/route.ts  # Article spécifique
│   │       └── upload/route.ts         # Upload de fichiers
│   └── actualites/
│       └── [slug]/page.tsx             # Page dynamique des articles
└── components/
    └── ArticleEditor.tsx               # Composant éditeur

src/lib/
├── session.ts                          # Configuration des sessions
├── auth.ts                             # Authentification
└── articles.ts                         # Gestion des articles
```

### Data & Scripts
```
data/
└── articles.json                       # Base de données des articles

scripts/
├── generate-password-hash.js           # Générer un hash de mot de passe
└── migrate-existing-articles.js        # Migrer les articles existants

public/
├── images/uploads/                     # Images uploadées
└── documents/uploads/                  # Documents uploadés
```

### Documentation
```
README-ADMIN.md                         # Guide complet d'administration
QUICK-START-ADMIN.md                    # Guide de démarrage rapide
SYSTEM-ADMIN-COMPLETE.md                # Ce fichier
```

## 🚀 Comment utiliser

### Première utilisation

1. **Démarrer le serveur** :
```bash
npm run dev
```

2. **Migrer les articles existants** (optionnel) :
```bash
node scripts/migrate-existing-articles.js
```

3. **Se connecter** :
   - Aller sur : http://localhost:3000/admin/login
   - Mot de passe : `admin123`

4. **Créer un article** :
   - Cliquer sur "Nouvel article"
   - Remplir les informations
   - Utiliser l'éditeur visuel
   - Uploader des images/fichiers
   - Cliquer sur "Publier"

### URLs importantes

- **Page de connexion** : `/admin/login`
- **Dashboard** : `/admin/dashboard`
- **Créer un article** : `/admin/dashboard/editor`
- **Modifier un article** : `/admin/dashboard/editor?id=article-id`
- **Actualités publiques** : `/actualites`
- **Article public** : `/actualites/[slug]`

## 🔒 Sécurité

### En développement
Le mot de passe par défaut `admin123` est accepté sans vérification de hash.

### En production
**OBLIGATOIRE** : Changer le mot de passe avant de déployer !

1. Générer un hash :
```bash
node scripts/generate-password-hash.js VotreMotDePasseSecurise123
```

2. Créer `.env.local` :
```env
ADMIN_PASSWORD_HASH=<hash_généré>
SECRET_COOKIE_PASSWORD=<clé_aléatoire_32_caractères>
```

3. Redémarrer le serveur

### Variables d'environnement

| Variable | Description | Requis |
|----------|-------------|--------|
| `ADMIN_PASSWORD_HASH` | Hash bcrypt du mot de passe admin | Production |
| `SECRET_COOKIE_PASSWORD` | Clé secrète pour les cookies de session (32+ caractères) | Production |

## 🎯 Fonctionnalités en détail

### Dashboard
- ✅ Liste tous les articles
- ✅ Tri par date (plus récent en premier)
- ✅ Affiche catégorie, date, statut
- ✅ Badge spécial pour les articles à la une
- ✅ Actions rapides : Modifier, Voir, Supprimer
- ✅ Lien vers le site public

### Éditeur
- ✅ Champs : Titre, Extrait, Contenu, Catégorie
- ✅ Upload d'image principale
- ✅ Éditeur visuel riche (Tiptap)
- ✅ Upload de fichiers multiples
- ✅ Option "Article à la une"
- ✅ Prévisualisation en temps réel
- ✅ Sauvegarde automatique de l'ID

### Gestion des fichiers
- ✅ Upload sécurisé
- ✅ Noms de fichiers nettoyés
- ✅ Organisation automatique par type
- ✅ Génération d'URLs publiques
- ✅ Liste des fichiers attachés
- ✅ Suppression de fichiers

### Page publique des articles
- ✅ Rendu HTML du contenu
- ✅ Styles cohérents avec le site
- ✅ Affichage des fichiers téléchargeables
- ✅ Breadcrumb de navigation
- ✅ Métadonnées (date, catégorie)
- ✅ Responsive design

## 📦 Dépendances installées

```json
{
  "bcryptjs": "^2.x.x",              // Hashage de mots de passe
  "@types/bcryptjs": "^2.x.x",       // Types TypeScript
  "iron-session": "^8.x.x",          // Gestion de sessions
  "@tiptap/react": "^2.x.x",         // Éditeur visuel
  "@tiptap/starter-kit": "^2.x.x",   // Extensions de base
  "@tiptap/extension-image": "^2.x.x",
  "@tiptap/extension-link": "^2.x.x",
  "@tiptap/extension-text-align": "^2.x.x",
  "@tiptap/extension-color": "^2.x.x",
  "@tiptap/extension-text-style": "^2.x.x"
}
```

## 🎨 Catégories prédéfinies

| Catégorie | Couleur | Utilisation |
|-----------|---------|-------------|
| Vie du lycée | Bleu | Événements, activités |
| Rentrée scolaire | Vert | Informations de rentrée |
| Mathématiques | Violet | Contenus mathématiques |
| Inscription 2025/2026 | Orange | Procédures d'inscription |
| Événement | Rose | Événements spéciaux |
| Information | Indigo | Informations générales |

Pour ajouter des catégories : modifier `src/app/admin/dashboard/editor/page.tsx`

## 💡 Conseils d'utilisation

### Pour de beaux articles

1. **Structure claire** : Utilisez des titres (H2, H3) pour organiser
2. **Images de qualité** : Minimum 1200px de largeur
3. **Extraits concis** : 2-3 lignes maximum
4. **Fichiers bien nommés** : Utilisez des noms descriptifs
5. **Un seul article à la une** : Pour plus d'impact

### Raccourcis de l'éditeur

- `Ctrl/Cmd + B` : Gras
- `Ctrl/Cmd + I` : Italique
- `Ctrl/Cmd + Z` : Annuler
- `Ctrl/Cmd + Shift + Z` : Refaire

## 🐛 Résolution de problèmes

### Problème de connexion
- Vérifier que le serveur est démarré
- Vérifier le mot de passe (case-sensitive)
- En production, vérifier `.env.local`

### Articles ne s'affichent pas
- Vérifier que `data/articles.json` existe
- Vérifier les permissions du dossier
- Redémarrer le serveur

### Upload de fichiers échoue
- Vérifier que les dossiers `public/images/uploads/` et `public/documents/uploads/` existent
- Vérifier les permissions d'écriture
- Vérifier la taille du fichier

### Éditeur ne se charge pas
- Vérifier la console du navigateur
- Rafraîchir la page
- Vider le cache du navigateur

## 📈 Prochaines améliorations possibles

- [ ] Système de brouillons
- [ ] Planification de publication
- [ ] Recherche d'articles dans l'admin
- [ ] Pagination de la liste d'articles
- [ ] Statistiques de consultation
- [ ] Gestion des utilisateurs multiples
- [ ] Éditeur Markdown en option
- [ ] Prévisualisation avant publication
- [ ] Gestion des commentaires
- [ ] SEO metadata (titre, description)

## 📞 Support

Pour toute question ou problème :
1. Consultez `README-ADMIN.md` pour le guide détaillé
2. Consultez `QUICK-START-ADMIN.md` pour le démarrage rapide
3. Vérifiez les logs du serveur
4. Contactez le développeur

## 🎓 Ressources

- [Documentation Tiptap](https://tiptap.dev/)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Iron Session](https://github.com/vvo/iron-session)
- [Documentation bcryptjs](https://www.npmjs.com/package/bcryptjs)

---

**✨ Système créé avec ❤️ pour faciliter la gestion des actualités du lycée**

**Bonne utilisation ! 🚀**

