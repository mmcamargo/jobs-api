import { DatabaseConnection } from '../../../../main/database';
import { UserEntity } from '../../../shared/database/entities';
import { User } from '../../../models';

export class UsersRepository {
	private _repository =
		DatabaseConnection.connection.getRepository(UserEntity);

	private toModel({ uid, type, username, password, name }: UserEntity): User {
		return User.create(type, username, password, name, uid);
	}

	async create({ uid, type, username, password, name }: User): Promise<User> {
		const user = this._repository.create({
			uid,
			type,
			username,
			password,
			name,
		});

		const response = await this._repository.save(user);

		return this.toModel(response);
	}
}
