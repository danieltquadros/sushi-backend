import { Response } from 'express';
import { ExtendedRequest } from '../types/extended-request';
import { createUserService, getUserListService } from '../services/user';
import { prisma } from '../libs/prisma';

export const getUserList = async (req: ExtendedRequest, res: Response) => {
  const userList = await getUserListService();

  res.json(userList);
};
