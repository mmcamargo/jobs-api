import { BaseEntity } from './base.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'applicants_per_place' })
export class ApplicantPerPlaceEntity extends BaseEntity {
	@Column({ name: 'applicant_uid' })
	applicantUid!: string;

	@Column({ name: 'job_uid' })
	jobUid!: string;

	@Column()
	success!: boolean;
}
