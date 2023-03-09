import { v4 } from 'uuid';

export class Job {
	uid: string;
	recruiterUid: string;
	description: string;
	companyName: string;
	active: boolean;
	expirationDate: Date;
	maxApplicants: number;

	constructor(
		recruiterUid: string,
		description: string,
		companyName: string,
		active: boolean,
		expirationDate: Date,
		maxApplicants: number,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.recruiterUid = recruiterUid;
		this.description = description;
		this.companyName = companyName;
		this.active = active;
		this.expirationDate = expirationDate;
		this.maxApplicants = maxApplicants;
	}

	static create(
		recruiterUid: string,
		description: string,
		companyName: string,
		active: boolean,
		expirationDate: Date,
		maxApplicants: number,
		uid?: string
	): Job {
		return new Job(
			recruiterUid,
			description,
			companyName,
			active,
			expirationDate,
			maxApplicants,
			uid
		);
	}

	toJson() {
		return {
			uid: this.uid,
			recruiterUid: this.recruiterUid,
			description: this.description,
			companyName: this.companyName,
			active: this.active,
			expirationDate: this.expirationDate,
			maxApplicants: this.maxApplicants,
		};
	}
}
