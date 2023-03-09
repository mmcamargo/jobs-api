import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'applicants_per_place' })
export class ApplicantPerPlaceEntity extends BaseEntity {
	@Column('applicant_uid')
	applicantUid!: string;

	@Column('job_uid')
	jobUid!: string;

	@Column()
	success!: boolean;
}
