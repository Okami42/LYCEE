import bcrypt from 'bcryptjs';

// Hash du mot de passe admin (crypté de manière sécurisée - impossible à décrypter)
// Le mot de passe est stocké sous forme de hash bcrypt pour des raisons de sécurité
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$10$VmzA7AIKFzf9V1D5MoXnbe7Y7FD2UvfbOY/6V/wlBRyIjc6r.hNZS';

export async function verifyPassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

