import { Prisma } from '@prisma/client';
import { prisma } from '../libs/prisma';

export const findUserByEmail = async (email: string) => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (user) {
    return user;
  }

  return null;
};

export const getUserListService = async () => {
  const userList = await prisma.user.findMany();

  return userList;
};

export const createUserService = async (data: Prisma.UserCreateInput) => {
  const newUser = await prisma.user.create({ data });

  return newUser;
};
