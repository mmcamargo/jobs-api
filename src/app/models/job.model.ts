import { v4 } from 'uuid';

export class Job {
	uid: string;
	recruiterUid: string;
	companyName: string;
	description: string;
	active: boolean;
	maxApplicants: number;
	expirationDate: Date;

	constructor(
		recruiterUid: string,
		companyName: string,
		description: string,
		active: boolean,
		maxApplicants: number,
		expirationDate: Date,
		uid?: string
	) {
		this.uid = uid ?? v4();
		this.recruiterUid = recruiterUid;
		this.companyName = companyName;
		this.description = description;
		this.active = active;
		this.maxApplicants = maxApplicants;
		this.expirationDate = expirationDate;
	}

	static create(
		recruiterUid: string,
		companyName: string,
		description: string,
		active: boolean,
		maxApplicants: number,
		expirationDate: Date,
		uid?: string
	): Job {
		return new Job(
			recruiterUid,
			companyName,
			description,
			active,
			maxApplicants,
			expirationDate,
			uid
		);
	}

	toJson() {
		return {
			uid: this.uid,
			recruiterUid: this.recruiterUid,
			companyName: this.companyName,
			description: this.description,
			active: this.active,
			maxApplicants: this.maxApplicants,
			expirationDate: this.expirationDate,
		};
	}
}
