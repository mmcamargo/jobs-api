import 'dotenv/config';
import {
	UserEntity,
	JobEntity,
	ApplicantPerPlaceEntity,
} from '../../app/shared/database/entities';
import {
	CreateUsersTable1678145578030,
	CreateJobsTable1678147044526,
	CreateApplicantsPerPlaceTable1678237805920,
} from '../../app/shared/database/migrations';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [UserEntity, JobEntity, ApplicantPerPlaceEntity],
	migrations: [
		CreateUsersTable1678145578030,
		CreateJobsTable1678147044526,
		CreateApplicantsPerPlaceTable1678237805920,
	],
});
