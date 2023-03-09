import { UserEntity } from '.';
import { Entity } from 'typeorm';

@Entity({ name: 'admins' })
export class AdminEntity extends UserEntity {}
