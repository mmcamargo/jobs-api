import { UsersRepository } from '../repositories';

export class GetUsersByTypeUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute(type: string) {
		const response = await this._repository.getUsersByType(type);

		return response;
	}
}
