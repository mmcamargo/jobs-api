import 'dotenv/config';
import { DataSource } from 'typeorm';

export default new DataSource({
	type: 'postgres',
	url: process.env.DB_URL,
	synchronize: false,
	entities: ['src/app/shared/database/entities/**/*.ts'],
	migrations: ['src/app/shared/database/migrations/**/*.ts'],
});
