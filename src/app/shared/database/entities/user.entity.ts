import { BaseEntity } from './base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export abstract class UserEntity extends BaseEntity {
	@Column()
	username!: string;

	@Column()
	password!: string;
}
