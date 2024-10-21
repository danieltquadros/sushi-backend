import express from 'express';
import * as authController from '../controllers/auth';

const authRouter = express.Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/sign-in', authController.signIn);

export default authRouter;
