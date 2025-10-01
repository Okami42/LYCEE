import bcrypt from 'bcryptjs';

// Mot de passe par défaut: "admin123" (à changer en production)
// Pour générer un nouveau hash: bcrypt.hashSync("votre_mot_de_passe", 10)
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$10$Ww1lQzKzK1Z.2b1ZQYyJH.qHJ0VJYgDY5VNzQdQXZQYJH0VJYgDY5';

export async function verifyPassword(password: string): Promise<boolean> {
  // En développement, accepter le mot de passe simple "admin123"
  if (process.env.NODE_ENV !== 'production' && password === 'admin123') {
    return true;
  }
  return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

