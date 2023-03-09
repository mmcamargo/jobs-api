import { UserEntity, JobEntity } from '.';
import { Entity, OneToMany, JoinColumn } from 'typeorm';

@Entity({ name: 'recruiters' })
export class RecruiterEntity extends UserEntity {
	@OneToMany(() => JobEntity, (job) => job.recruiter)
	@JoinColumn({ name: 'uid', referencedColumnName: 'recruiter_uid' })
	jobs?: JobEntity[];
}
