import { createUserValidator, getUsersByTypeValidator } from '../validators';
import { UsersController } from '../controllers';
import { Router } from 'express';

export const usersRoutes = Router();

usersRoutes.post('/', [createUserValidator], new UsersController().create);
usersRoutes.get('/', new UsersController().getUsers);
usersRoutes.get(
	'/:type',
	[getUsersByTypeValidator],
	new UsersController().getUsersByType
);
