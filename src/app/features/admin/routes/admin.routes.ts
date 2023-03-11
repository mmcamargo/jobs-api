import { createAdminValidator } from '../validators';
import { AdminController } from '../controllers';
import { Router } from 'express';

export const adminRoutes = Router();

adminRoutes.post('/', [createAdminValidator], new AdminController().create);
