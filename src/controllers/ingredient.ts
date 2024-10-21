import { Response } from 'express';
import { ExtendedRequest } from '../types/extended-request';
import { prisma } from '../libs/prisma';
import {
  createIngredientService,
  getIngredientListService,
} from '../services/ingredient';

export const getIngredientList = async (
  req: ExtendedRequest,
  res: Response,
) => {
  const ingredientList = await getIngredientListService();

  res.json(ingredientList);
};

export const createIngredient = async (req: ExtendedRequest, res: Response) => {
  const { name } = req.body;
  const ingredient = await createIngredientService(name);

  res.status(201).json({ ingredient });
};
