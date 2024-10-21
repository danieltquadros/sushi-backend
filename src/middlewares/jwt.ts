import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { findUserByEmail } from '../services/user';
import { ExtendedRequest } from '../types/extended-request';

export const createJWT = (email: string) => {
  return jwt.sign({ email }, process.env.JWT_SECRET as string);
};

export const verifyJWT = (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    res.status(401).json({ error: 'Acesso negado' });
    return;
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    async (error, decoded: any) => {
      if (error) {
        res.status(401).json({ error: 'Acesso negado' });
        return;
      }

      const user = await findUserByEmail(decoded.email);

      if (!user) {
        res.status(401).json({ error: 'Acesso negado' });
        return;
      }

      req.userEmail = user.email;
      next();
    },
  );
};
