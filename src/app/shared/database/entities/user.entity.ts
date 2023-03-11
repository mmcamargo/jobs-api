import { BaseEntity, JobEntity } from '.';
import { TUser } from '../../utils/types';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
	@Column()
	type!: TUser;

	@Column()
	username!: string;

	@Column()
	password!: string;

	@Column()
	name!: string;

	@OneToMany(() => JobEntity, (job) => job.recruiter)
	@JoinColumn({ name: 'uid', referencedColumnName: 'recruiter_uid' })
	jobs?: JobEntity[];
}
