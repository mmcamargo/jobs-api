import { UsersRepository } from '../repositories';
import { CreateUserUseCase } from '../usecases';
import { HttpHelper } from '../../../shared/utils';
import { Response, Request } from 'express';

export class UsersController {
	async create(req: Request, res: Response) {
		try {
			const { type, username, password, name } = req.body;

			const useCase = new CreateUserUseCase(new UsersRepository());

			const response = await useCase.execute({
				type,
				username,
				password,
				name,
			});

			return HttpHelper.success(
				res,
				'USER_SUCCESSFULLY_CREATED',
				response,
				201
			);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}
}
