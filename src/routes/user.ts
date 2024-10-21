import express from 'express';
import * as userController from '../controllers/user';

const userRouter = express.Router();

userRouter.get('/', userController.getUserList);

export default userRouter;
