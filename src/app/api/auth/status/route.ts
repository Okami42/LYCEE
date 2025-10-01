import { NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '@/lib/session';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);
    
    return NextResponse.json({
      isLoggedIn: session.isLoggedIn || false,
      username: session.username
    });
  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json({ isLoggedIn: false });
  }
}

