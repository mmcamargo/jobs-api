import 'dotenv/config';
import {
	AdminEntity,
	RecruiterEntity,
	ApplicantsEntity,
	JobEntity,
	ApplicantPerPlaceEntity,
} from './../../app/shared/database/entities';
import {
	CreateAdminsTable1678404037402,
	CreateRecruitersTable1678404145659,
	CreateApplicantsTable1678404239894,
	CreateJobsTable1678406445266,
	CreateApplicantsPerPlaceTable1678406520894,
} from './../../app/shared/database/migrations';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: [
		AdminEntity,
		RecruiterEntity,
		ApplicantsEntity,
		JobEntity,
		ApplicantPerPlaceEntity,
	],
	migrations: [
		CreateAdminsTable1678404037402,
		CreateRecruitersTable1678404145659,
		CreateApplicantsTable1678404239894,
		CreateJobsTable1678406445266,
		CreateApplicantsPerPlaceTable1678406520894,
	],
});
