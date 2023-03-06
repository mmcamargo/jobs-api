import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import config from '../configs/database.config';

export class DatabaseConnection {
	private static _connection: DataSource;

	public static async connect() {
		if (!this._connection) {
			this._connection = await config.initialize();
			console.log('DATABASE_CONNECTION_SUCCESSFUL');
		}
	}

	public static get connection() {
		if (!this._connection) {
			throw new Error('DATABASE_CONNECTION_ERROR');
		}

		return this._connection;
	}
}
