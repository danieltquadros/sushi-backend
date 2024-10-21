import { Router } from 'express';
import * as pingController from '../controllers/ping';
import userRouter from './user';
import ingredientRouter from './ingredient';
import authRouter from './auth';
import { verifyJWT } from '../middlewares/jwt';

export const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/ingredient', ingredientRouter);
mainRouter.use('/auth', authRouter);

mainRouter.get('/ping', pingController.ping);
mainRouter.get('/private-ping', verifyJWT, pingController.privatePing);
