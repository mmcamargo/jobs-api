import { adminRoutes } from '../../app/features/admin/routes';
import { Express } from 'express';

export const makeRoutes = (app: Express) => {
	app.use('/admin', adminRoutes);
};
