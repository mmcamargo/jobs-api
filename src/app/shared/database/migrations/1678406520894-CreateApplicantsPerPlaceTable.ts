import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateApplicantsPerPlaceTable1678406520894
	implements MigrationInterface
{
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'applicants_per_place',
				columns: [
					{
						name: 'uid',
						type: 'uuid',
						isPrimary: true,
					},
					{ name: 'applicant_uid', type: 'uuid', isNullable: false },
					{ name: 'job_uid', type: 'uuid', isNullable: false },
					{ name: 'success', type: 'boolean', isNullable: true },
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
					},
					{ name: 'updated_at', type: 'timestamp', isNullable: true },
				],
				foreignKeys: [
					{
						name: 'fk_applicants_per_place_applicants',
						columnNames: ['applicant_uid'],
						referencedTableName: 'applicants',
						referencedColumnNames: ['uid'],
					},
					{
						name: 'fk_applicants_per_place_jobs',
						columnNames: ['job_uid'],
						referencedTableName: 'jobs',
						referencedColumnNames: ['uid'],
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('applicants_per_place');
	}
}
