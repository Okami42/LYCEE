# 🚀 Démarrage Rapide - Système d'Administration

## ✅ Installation terminée !

Votre système d'administration est maintenant installé et prêt à l'emploi.

## 🎯 Accès immédiat

1. **Démarrer le serveur** :
```bash
npm run dev
```

2. **Se connecter** :
   - Ouvrir : `http://localhost:3000/admin/login`
   - Mot de passe : `admin123` (en développement uniquement)

3. **Créer votre premier article** :
   - Cliquer sur "Nouvel article"
   - Remplir le titre, l'extrait et le contenu
   - Cliquer sur "Publier l'article"

## 📸 Captures d'écran des fonctionnalités

### Page de connexion
- Interface sécurisée avec mot de passe
- Design moderne et responsive

### Dashboard
- Liste de tous vos articles
- Actions rapides : modifier, voir, supprimer
- Création de nouveaux articles en un clic

### Éditeur visuel
- **Formatage de texte** : Gras, italique, titres
- **Listes** : À puces ou numérotées
- **Médias** : Images et liens
- **Fichiers** : Upload de documents (PDF, Word, etc.)
- **Mise en avant** : Marquer un article comme "à la une"

## 🎨 Caractéristiques principales

✨ **Interface simple** - Aucune connaissance technique requise
📝 **Éditeur WYSIWYG** - Ce que vous voyez est ce que vous obtenez
🖼️ **Upload de fichiers** - Images et documents directement depuis l'interface
🎯 **Articles mis en avant** - Système de featured articles
📱 **Responsive** - Fonctionne sur tous les appareils
🔒 **Sécurisé** - Authentification par mot de passe

## 📂 Structure des fichiers

```
lycee-site/
├── data/
│   └── articles.json          # Base de données des articles
├── public/
│   ├── images/uploads/        # Images uploadées
│   └── documents/uploads/     # Documents uploadés
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── login/         # Page de connexion
│   │   │   └── dashboard/     # Dashboard et éditeur
│   │   ├── api/
│   │   │   ├── auth/          # APIs d'authentification
│   │   │   └── admin/         # APIs de gestion
│   │   └── actualites/
│   │       └── [slug]/        # Pages des articles
│   ├── components/
│   │   └── ArticleEditor.tsx  # Éditeur visuel
│   └── lib/
│       ├── articles.ts        # Gestion des articles
│       ├── auth.ts            # Authentification
│       └── session.ts         # Gestion des sessions
└── scripts/
    └── generate-password-hash.js  # Générer un hash de mot de passe
```

## 🔐 Sécurité en production

**IMPORTANT** : Avant de mettre en production, changez le mot de passe !

1. Générer un hash de mot de passe :
```bash
node scripts/generate-password-hash.js VotreNouveauMotDePasse123
```

2. Créer un fichier `.env.local` :
```env
ADMIN_PASSWORD_HASH=<le_hash_généré>
SECRET_COOKIE_PASSWORD=<une_clé_aléatoire_de_32_caractères>
```

3. Redémarrer le serveur

## 📖 Guide complet

Pour plus d'informations, consultez le fichier `README-ADMIN.md`.

## 🎯 Prochaines étapes

1. ✅ Connectez-vous à l'admin
2. ✅ Créez votre premier article
3. ✅ Testez l'upload d'images et de fichiers
4. ✅ Mettez un article en avant
5. ✅ Visualisez le résultat sur la page actualités

## 💡 Astuces

- **Images** : Utilisez des images de haute qualité (minimum 1200px)
- **Fichiers** : Nommez-les clairement avant l'upload
- **Catégories** : Utilisez des catégories cohérentes pour faciliter la navigation
- **Article à la une** : Un seul article à la fois pour plus d'impact
- **Brouillons** : Vous pouvez sauvegarder et revenir plus tard

## 🆘 Besoin d'aide ?

Consultez `README-ADMIN.md` pour :
- Guide détaillé de toutes les fonctionnalités
- Conseils pour créer de beaux articles
- Solutions aux problèmes courants
- Configuration avancée

## ✨ Exemple d'article

Un exemple d'article (Calculatrice Numworks) est déjà présent dans le code. 
Vous pouvez vous en inspirer pour créer de beaux articles avec :
- Encadrés colorés (utilisez les blockquotes)
- Étapes numérotées
- Images intégrées
- Fichiers téléchargeables
- Boutons d'appel à l'action

---

**Bon courage avec votre nouveau système de gestion d'actualités ! 🎉**

