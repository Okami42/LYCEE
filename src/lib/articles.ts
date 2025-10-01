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

const articlesFilePath = path.join(process.cwd(), 'data', 'articles.json');

// S'assurer que le dossier data existe
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(articlesFilePath)) {
    fs.writeFileSync(articlesFilePath, JSON.stringify([], null, 2));
  }
}

export function getAllArticles(): Article[] {
  ensureDataDirectory();
  const data = fs.readFileSync(articlesFilePath, 'utf-8');
  return JSON.parse(data) as Article[];
}

export function getArticleById(id: string): Article | null {
  const articles = getAllArticles();
  return articles.find(article => article.id === id) || null;
}

export function saveArticle(article: Article): void {
  ensureDataDirectory();
  const articles = getAllArticles();
  const existingIndex = articles.findIndex(a => a.id === article.id);
  
  if (existingIndex >= 0) {
    articles[existingIndex] = article;
  } else {
    articles.unshift(article); // Ajouter au début (plus récent)
  }
  
  fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
}

export function deleteArticle(id: string): boolean {
  ensureDataDirectory();
  const articles = getAllArticles();
  const filteredArticles = articles.filter(a => a.id !== id);
  
  if (filteredArticles.length === articles.length) {
    return false; // Article non trouvé
  }
  
  fs.writeFileSync(articlesFilePath, JSON.stringify(filteredArticles, null, 2));
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

