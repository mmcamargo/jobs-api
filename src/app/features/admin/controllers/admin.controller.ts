import { AdminRepository } from '../repositories';
import { CreateAdminUseCase } from '../usecases';
import { HttpHelper } from '../../../shared/utils';
import { Response, Request } from 'express';

export class AdminController {
	async create(req: Request, res: Response) {
		try {
			const { username, password, name } = req.body;

			const useCase = new CreateAdminUseCase(new AdminRepository());

			const response = await useCase.execute({
				username,
				password,
				name,
			});

			return HttpHelper.success(
				res,
				'ADMIN_SUCCESSFULLY_CREATED',
				response,
				201
			);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}
}
