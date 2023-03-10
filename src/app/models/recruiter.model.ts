import { User } from './user.model';

export class Recruiter extends User {
	constructor(username: string, password: string, uid?: string) {
		super(username, password, uid);
	}

	static create(username: string, password: string, uid?: string) {
		return new Recruiter(username, password, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			username: this.username,
			password: this.password,
		};
	}
}
