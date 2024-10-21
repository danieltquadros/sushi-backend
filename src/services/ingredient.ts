import { prisma } from '../libs/prisma';

export const getIngredientListService = async () => {
  const ingredientList = await prisma.ingredient.findMany();

  return ingredientList;
};

export const createIngredientService = async (name: string) => {
  const ingredient = await prisma.ingredient.create({
    data: { name },
  });

  return ingredient;
};
