import {
	CreateUserUseCase,
	GetUsersUseCase,
	GetUsersByTypeUseCase,
} from '../usecases';
import { UsersRepository } from '../repositories';
import { HttpHelper } from '../../../shared/utils';
import { Response, Request } from 'express';

export class UsersController {
	async create(req: Request, res: Response) {
		try {
			const { type, username, password, name, companyName } = req.body;

			const useCase = new CreateUserUseCase(new UsersRepository());

			const response = await useCase.execute({
				type,
				username,
				password,
				name,
				companyName,
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

	async getUsers(_: Request, res: Response) {
		try {
			const useCase = new GetUsersUseCase(new UsersRepository());

			const response = await useCase.execute();

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}

	async getUsersByType(req: Request, res: Response) {
		try {
			const { type } = req.params;

			const useCase = new GetUsersByTypeUseCase(new UsersRepository());

			const response = await useCase.execute(type);

			return HttpHelper.success(res, undefined, response);
		} catch (error: any) {
			return HttpHelper.serverError(res, error);
		}
	}
}
