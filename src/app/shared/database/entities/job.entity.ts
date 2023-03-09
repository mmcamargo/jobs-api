import { BaseEntity, RecruiterEntity } from '.';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

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

	@ManyToOne(() => RecruiterEntity, (recruiter) => recruiter.jobs)
	@JoinColumn({ name: 'recruiter_uid', referencedColumnName: 'uid' })
	recruiter!: RecruiterEntity;
}
