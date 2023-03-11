import { TUser } from '../shared/utils/types';
import { v4 } from 'uuid';

export class User {
	uid: string;
	type: TUser;
	username: string;
	password: string;
	name: string;

	constructor(
		type: TUser,
		username: string,
		password: string,
		name: string,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.type = type;
		this.username = username;
		this.password = password;
		this.name = name;
	}

	static create(
		type: TUser,
		username: string,
		password: string,
		name: string,
		uid?: string
	) {
		return new User(type, username, password, name, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			type: this.type,
			username: this.username,
			password: this.password,
			name: this.name,
		};
	}
}
