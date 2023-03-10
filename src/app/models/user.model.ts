import { v4 } from 'uuid';
export abstract class User {
	uid: string;
	username: string;
	password: string;

	constructor(username: string, password: string, uid?: string) {
		this.uid = uid ?? v4();
		this.username = username;
		this.password = password;
	}
}
