import { User } from './user.model';

export class Admin extends User {
	name: string;

	constructor(
		username: string,
		password: string,
		name: string,
		uid?: string
	) {
		super(username, password, uid);
		this.name = name;
	}

	static create(
		username: string,
		password: string,
		name: string,
		uid?: string
	) {
		return new Admin(username, password, name, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			username: this.username,
			password: this.password,
			name: this.name,
		};
	}
}
