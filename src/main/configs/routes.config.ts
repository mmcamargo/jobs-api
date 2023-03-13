import { usersRoutes } from './../../app/features/users/routes';
import { Express } from 'express';

export const makeRoutes = (app: Express) => {
	app.use('/user', usersRoutes);
	app.use('/users', usersRoutes);
};
