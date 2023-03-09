import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdminsTable1678404037402 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'admins',
				columns: [
					{ name: 'uid', type: 'uuid', isPrimary: true },
					{
						name: 'username',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{ name: 'password', type: 'varchar', isNullable: false },
					{
						name: 'created_at',
						type: 'timestamp',
						isNullable: false,
					},
					{ name: 'updated_at', type: 'timestamp', isNullable: true },
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('admins', true, true, true);
	}
}
