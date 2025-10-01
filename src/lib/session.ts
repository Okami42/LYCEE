import { SessionOptions } from 'iron-session';

export interface SessionData {
  isLoggedIn: boolean;
  username?: string;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD || 'complex_password_at_least_32_characters_long_for_security',
  cookieName: 'lycee_admin_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 24 heures
  },
};

