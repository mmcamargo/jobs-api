import { DatabaseConnection } from '../../../../main/database';
import { AdminEntity } from '../../../shared/database/entities';
import { Admin } from '../../../models';

export class AdminRepository {
	private _repository =
		DatabaseConnection.connection.getRepository(AdminEntity);

	private toModel({ uid, username, password, name }: AdminEntity): Admin {
		return Admin.create(username, password, name, uid);
	}

	async create({ uid, username, password, name }: Admin): Promise<Admin> {
		const admin = this._repository.create({
			uid,
			username,
			password,
			name,
		});

		const response = await this._repository.save(admin);

		return this.toModel(response);
	}
}
