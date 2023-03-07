import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateJobsTable1678147044526 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'jobs',
				columns: [
					{ name: 'uid', type: 'uuid', isPrimary: true },
					{
						name: 'recruiter_uid',
						type: 'uuid',
						isNullable: false,
					},
					{ name: 'description', type: 'varchar', isNullable: false },
					{
						name: 'company_name',
						type: 'varchar',
						isNullable: false,
					},
					{ name: 'active', type: 'boolean', isNullable: false },
					{
						name: 'expiration_date',
						type: 'timestamp',
						isNullable: false,
					},
					{
						name: 'max_applicants',
						type: 'integer',
						isNullable: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
					},
					{ name: 'updated_at', type: 'timestamp', isNullable: true },
				],
				foreignKeys: [
					{
						name: 'fk_job_user',
						columnNames: ['recruiter_uid'],
						referencedTableName: 'users',
						referencedColumnNames: ['uid'],
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('users', true, true, true);
	}
}
