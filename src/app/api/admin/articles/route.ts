import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/session';
import { getAllArticles, saveArticle, generateArticleId } from '@/lib/articles';
import { cookies } from 'next/headers';

// Middleware pour vérifier l'authentification
async function checkAuth() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session.isLoggedIn === true;
}

// GET - Récupérer tous les articles
export async function GET(request: NextRequest) {
  try {
    const articles = await getAllArticles();
    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Get articles error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}

// POST - Créer ou mettre à jour un article
export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const articleData = await request.json();
    
    // Générer l'ID si ce n'est pas une mise à jour
    if (!articleData.id) {
      articleData.id = generateArticleId(articleData.title);
    }
    
    // Formater la date
    const date = new Date(articleData.date || Date.now());
    articleData.date = date.toISOString().split('T')[0];
    articleData.dateFormatted = new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
    
    await saveArticle(articleData);
    
    return NextResponse.json({ success: true, article: articleData });
  } catch (error) {
    console.error('Save article error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la sauvegarde de l\'article' },
      { status: 500 }
    );
  }
}

