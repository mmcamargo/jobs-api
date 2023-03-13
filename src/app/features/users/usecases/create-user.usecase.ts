import { UsersRepository } from '../repositories';
import { User } from '../../../models';

interface ICreateUserDTO {
	type: string;
	username: string;
	password: string;
	name: string;
	companyName?: string;
	role?: string;
}

export class CreateUserUseCase {
	constructor(private _repository: UsersRepository) {}

	async execute({
		type,
		username,
		password,
		name,
		companyName,
	}: ICreateUserDTO) {
		const user = await User.create(
			type,
			username,
			password,
			name,
			companyName
		);

		return await this._repository.create(user);
	}
}
