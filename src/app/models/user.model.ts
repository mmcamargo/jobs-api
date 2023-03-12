import { v4 } from 'uuid';

export class User {
	uid: string;
	type: string;
	username: string;
	password: string;
	name: string;
	companyName?: string;

	constructor(
		type: string,
		username: string,
		password: string,
		name: string,
		companyName?: string,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.type = type;
		this.username = username;
		this.password = password;
		this.name = name;
		this.companyName = companyName;
	}

	static create(
		type: string,
		username: string,
		password: string,
		name: string,
		companyName?: string,
		uid?: string
	) {
		return new User(type, username, password, name, companyName, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			type: this.type,
			username: this.username,
			password: this.password,
			name: this.name,
			companyName: this.companyName ?? null,
		};
	}
}
