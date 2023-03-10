import 'dotenv/config';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	entities: ['src/app/shared/database/entities/**/*.ts'],
	migrations: ['src/app/shared/database/migrations/**/*.ts'],
});
