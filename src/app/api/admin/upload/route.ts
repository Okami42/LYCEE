import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/session';
import { put } from '@vercel/blob';
import { cookies } from 'next/headers';

// Middleware pour vérifier l'authentification
async function checkAuth() {
  const cookieStore = await cookies();
  const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
  return session.isLoggedIn === true;
}

export async function POST(request: NextRequest) {
  try {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      );
    }

    // Créer un nom de fichier unique
    const timestamp = Date.now();
    const originalName = file.name;
    const safeFileName = originalName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9.]+/gi, '-')
      .toLowerCase();
    const fileName = `${timestamp}-${safeFileName}`;

    // Déterminer le préfixe selon le type
    const type = formData.get('type') as string || 'other';
    let prefix = 'uploads';
    
    if (type === 'image') {
      prefix = 'images';
    } else if (type === 'document') {
      prefix = 'documents';
    }

    // Upload vers Vercel Blob (fonctionne pour images ET documents)
    const blob = await put(`${prefix}/${fileName}`, file, {
      access: 'public',
    });
    
    return NextResponse.json({
      success: true,
      url: blob.url,
      fileName: originalName
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
}

