import { kv } from '@vercel/kv';
import fs from 'fs';
import path from 'path';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  dateFormatted: string;
  category: string;
  categoryColor: string;
  image: string;
  featured: boolean;
  files?: Array<{
    name: string;
    url: string;
  }>;
  author?: {
    name: string;
    title: string;
  };
}

const ARTICLES_KEY = 'articles';

// Fonction pour charger les articles initiaux depuis le fichier JSON (migration)
async function loadInitialArticles() {
  try {
    const articlesFilePath = path.join(process.cwd(), 'data', 'articles.json');
    if (fs.existsSync(articlesFilePath)) {
      const data = fs.readFileSync(articlesFilePath, 'utf-8');
      return JSON.parse(data) as Article[];
    }
  } catch (error) {
    console.log('No initial articles file found or error reading it:', error);
  }
  return [];
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    // Essayer de récupérer depuis KV
    const articles = await kv.get<Article[]>(ARTICLES_KEY);
    
    // Si pas d'articles dans KV, charger depuis le fichier JSON (première fois)
    if (!articles || articles.length === 0) {
      const initialArticles = await loadInitialArticles();
      if (initialArticles.length > 0) {
        await kv.set(ARTICLES_KEY, initialArticles);
        return initialArticles;
      }
    }
    
    return articles || [];
  } catch (error) {
    console.error('Error getting articles from KV:', error);
    // Fallback: essayer de lire depuis le fichier local
    return await loadInitialArticles();
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find(article => article.id === id) || null;
}

export async function saveArticle(article: Article): Promise<void> {
  const articles = await getAllArticles();
  const existingIndex = articles.findIndex(a => a.id === article.id);
  
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.unshift(article); // Ajouter au début (plus récent)
  }
  
  await kv.set(ARTICLES_KEY, articles);
}

export async function deleteArticle(id: string): Promise<boolean> {
  const articles = await getAllArticles();
  const filteredArticles = articles.filter(a => a.id !== id);
  
  if (filteredArticles.length === articles.length) {
    return false; // Article non trouvé
  }
  
  await kv.set(ARTICLES_KEY, filteredArticles);
  return true;
}

export function generateArticleId(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Retirer les accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

