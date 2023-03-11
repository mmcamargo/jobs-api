import 'dotenv/config';
import {
	UserEntity,
	JobEntity,
	ApplicantPerPlaceEntity,
} from './../../app/shared/database/entities';
import {
	CreateUsersTable1678404037402,
	CreateJobsTable1678406445266,
	CreateApplicantsPerPlaceTable1678406520894,
} from './../../app/shared/database/migrations';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [UserEntity, JobEntity, ApplicantPerPlaceEntity],
	migrations: [
		CreateUsersTable1678404037402,
		CreateJobsTable1678406445266,
		CreateApplicantsPerPlaceTable1678406520894,
	],
});
