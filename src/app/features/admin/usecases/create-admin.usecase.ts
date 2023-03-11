import { AdminRepository } from '../repositories';
import { Admin } from '../../../models';

interface ICreateAdminDTO {
	username: string;
	password: string;
	name: string;
}

export class CreateAdminUseCase {
	constructor(private repository: AdminRepository) {}

	public async execute({ username, password, name }: ICreateAdminDTO) {
		const admin = await Admin.create(username, password, name);

		return await this.repository.create(admin);
	}
}
