import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/session';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
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
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    const safeBaseName = baseName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/gi, '-')
      .toLowerCase();
    const fileName = `${timestamp}-${safeBaseName}${extension}`;

    // Déterminer le dossier de destination
    const type = formData.get('type') as string || 'other';
    let uploadDir = 'public/uploads';
    
    if (type === 'image') {
      uploadDir = 'public/images/uploads';
    } else if (type === 'document') {
      uploadDir = 'public/documents/uploads';
    }

    // Créer le dossier s'il n'existe pas
    await mkdir(uploadDir, { recursive: true });

    // Sauvegarder le fichier
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);

    // Retourner l'URL publique
    const publicPath = filePath.replace('public', '');
    
    return NextResponse.json({
      success: true,
      url: publicPath,
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

