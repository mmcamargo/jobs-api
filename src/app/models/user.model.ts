import { UserType } from '../shared/enums';
import { v4 } from 'uuid';

export class User {
	uid: string;
	username: string;
	password: string;
	name: string;
	companyName: string;
	userType: UserType;

	constructor(
		username: string,
		name: string,
		password: string,
		companyName: string,
		userType: UserType,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.username = username;
		this.password = password;
		this.name = name;
		this.companyName = companyName;
		this.userType = userType;
	}

	static create(
		username: string,
		name: string,
		password: string,
		companyName: string,
		userType: UserType,
		uid?: string
	): User {
		return new User(username, name, password, companyName, userType, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			username: this.username,
			password: this.password,
			name: this.name,
			companyName: this.companyName,
			userType: this.userType,
		};
	}
}
