import { createUserValidator } from '../validators';
import { UsersController } from '../controllers';
import { Router } from 'express';

export const usersRoutes = Router();

usersRoutes.post('/', [createUserValidator], new UsersController().create);
