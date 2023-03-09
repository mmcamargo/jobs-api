import { UserEntity } from '.';
import { Entity } from 'typeorm';

@Entity({ name: 'applicants' })
export class ApplicantsEntity extends UserEntity {}
