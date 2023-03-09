import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'jobs' })
export class JobEntity extends BaseEntity {
	@Column('recruiter_uid')
	recruiterUid!: string;

	@Column()
	description!: string;

	@Column('company_name')
	companyName!: string;

	@Column()
	active!: boolean;

	@Column('expiration_date')
	expirationDate!: Date;

	@Column('max_applicants')
	maxApplicants!: number;
}
