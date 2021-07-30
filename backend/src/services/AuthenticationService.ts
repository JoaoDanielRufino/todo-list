import { sign } from 'jsonwebtoken';

interface Request {
  login: string;
  senha: string;
}

class AuthenticationService {
  execute({ login, senha }: Request): string {
    const { DEFAULT_LOGIN, DEFAULT_PASSWORD, JWT_SECRET } = process.env;

    if (login !== DEFAULT_LOGIN || senha !== DEFAULT_PASSWORD) throw new Error('Invalid credentials');

    const token = sign({ user: DEFAULT_LOGIN }, JWT_SECRET!, { expiresIn: '7d' });

    return token;
  }
}

export default AuthenticationService;
