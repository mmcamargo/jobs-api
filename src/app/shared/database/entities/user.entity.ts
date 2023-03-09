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

	@Column({ name: 'company_name' })
	companyName!: string;

	@Column({ name: 'user_type' })
	userType!: string;
}
