import { UserEntity } from '.';
import { Entity, Column } from 'typeorm';

@Entity({ name: 'admins' })
export class AdminEntity extends UserEntity {
	@Column()
	name!: string;
}
