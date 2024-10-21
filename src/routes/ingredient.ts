import express from 'express';
import * as ingredientController from '../controllers/ingredient';

const ingredientRouter = express.Router();

ingredientRouter.get('/', ingredientController.getIngredientList);
ingredientRouter.post('/', ingredientController.createIngredient);

export default ingredientRouter;
