import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
	@Column()
	username!: string;

	@Column()
	password!: string;

	@Column()
	name!: string;

	@Column('company_name')
	companyName!: string;

	@Column('user_type')
	userType!: string;
}
