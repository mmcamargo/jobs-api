import { TUser } from '../../../shared/utils/types';
import { UsersRepository } from '../repositories';
import { User } from '../../../models';

interface ICreateUserDTO {
	type: TUser;
	username: string;
	password: string;
	name: string;
}

export class CreateUserUseCase {
	constructor(private repository: UsersRepository) {}

	public async execute({ type, username, password, name }: ICreateUserDTO) {
		const user = await User.create(type, username, password, name);

		return await this.repository.create(user);
	}
}
