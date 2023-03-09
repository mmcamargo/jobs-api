import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'jobs' })
export class JobEntity extends BaseEntity {
	@Column({ name: 'recruiter_uid' })
	recruiterUid!: string;

	@Column()
	description!: string;

	@Column({ name: 'company_name' })
	companyName!: string;

	@Column()
	active!: boolean;

	@Column({ name: 'expiration_date' })
	expirationDate!: Date;

	@Column({ name: 'max_applicants' })
	maxApplicants!: number;
}
