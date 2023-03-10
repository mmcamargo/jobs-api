import { User } from './user.model';

export class Applicant extends User {
	constructor(username: string, password: string, uid?: string) {
		super(username, password, uid);
	}

	static create(username: string, password: string, uid?: string) {
		return new Applicant(username, password, uid);
	}

	toJson() {
		return {
			uid: this.uid,
			username: this.username,
			password: this.password,
		};
	}
}
