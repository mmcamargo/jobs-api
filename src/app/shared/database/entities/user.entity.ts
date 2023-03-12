import { BaseEntity, JobEntity } from '.';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
	@Column()
	type!: string;

	@Column()
	username!: string;

	@Column()
	password!: string;

	@Column()
	name!: string;

	@Column({ name: 'company_name' })
	companyName!: string;

	@OneToMany(() => JobEntity, (job) => job.recruiter)
	@JoinColumn({ name: 'uid', referencedColumnName: 'recruiter_uid' })
	jobs?: JobEntity[];
}
