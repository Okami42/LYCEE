# 🚀 Configuration de Vercel KV pour les articles

## Pourquoi Vercel KV ?

Sur Vercel, le système de fichiers est en **lecture seule**. On ne peut pas écrire dans `data/articles.json`. 
La solution : utiliser **Vercel KV** (une base de données Redis gratuite).

---

## ⚡ Installation rapide (5 minutes)

### 1️⃣ **Allez sur votre projet Vercel**

Connectez-vous sur https://vercel.com et sélectionnez votre projet.

### 2️⃣ **Créez une base Vercel KV**

1. Cliquez sur l'onglet **"Storage"** en haut
2. Cliquez sur **"Create Database"**
3. Sélectionnez **"KV"** (Redis)
4. Donnez un nom (exemple : `lycee-articles`)
5. Sélectionnez la région la plus proche (exemple : `Paris, France`)
6. Cliquez sur **"Create"**

### 3️⃣ **Connectez la base à votre projet**

1. Dans la page de votre base KV, cliquez sur **"Connect Project"**
2. Sélectionnez votre projet (lycee-site)
3. Cliquez sur **"Connect"**

✅ **C'est tout !** Les variables d'environnement sont automatiquement configurées.

### 4️⃣ **Redéployez votre site**

Option A : **Automatique** - Faites un nouveau `git push` sur votre dépôt
Option B : **Manuel** - Allez dans "Deployments" → "..." → "Redeploy"

---

## 📊 Migration des articles existants

Si vous avez déjà des articles dans `data/articles.json`, ils seront **automatiquement migrés** vers Vercel KV au premier chargement de page ! 🎉

Le code vérifie s'il y a des articles dans la base KV :
- ✅ Si oui → utilise KV
- ❌ Si non → charge depuis `data/articles.json` et les copie dans KV

---

## 🔧 Variables d'environnement (automatiques)

Quand vous créez une base KV et la connectez à votre projet, Vercel ajoute automatiquement ces variables :

```
KV_URL=redis://...
KV_REST_API_URL=https://...
KV_REST_API_TOKEN=...
KV_REST_API_READ_ONLY_TOKEN=...
```

**Vous n'avez RIEN à configurer manuellement !** ✨

---

## ✅ Vérification

Pour vérifier que tout fonctionne :

1. Allez sur `votre-site.com/admin/login`
2. Connectez-vous avec `admin` / `Okami02`
3. Créez un nouvel article
4. Si ça fonctionne → tout est OK ! 🎉
5. Si erreur 500 → vérifiez que la base KV est bien connectée

---

## 🆓 Plan gratuit

Vercel KV est **GRATUIT** avec ces limites :
- ✅ 256 MB de stockage (largement suffisant pour des milliers d'articles)
- ✅ 30,000 commandes par mois
- ✅ Parfait pour un site de lycée

---

## ❓ Besoin d'aide ?

1. Vérifiez dans Vercel → Storage → que votre base KV existe
2. Vérifiez dans Vercel → Settings → Environment Variables → que les variables KV_ existent
3. Redéployez votre site après avoir connecté la base

---

## 🎯 Résumé ultra-rapide

```bash
1. Vercel Dashboard → Storage → Create Database → KV
2. Connect Project → Sélectionnez votre projet
3. Redéployez (ou faites un git push)
4. C'est prêt ! 🚀
```

