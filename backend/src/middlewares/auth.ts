import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token not found' });

  const { JWT_SECRET } = process.env;
  const [, token] = authHeader.split(' ');

  try {
    verify(token, JWT_SECRET!);

    return next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ error: `Invalid token: ${err.message}` });
  }
};
