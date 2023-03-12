import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1678404037402 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{ name: 'uid', type: 'uuid', isPrimary: true },
					{ name: 'type', type: 'varchar', isNullable: false },
					{
						name: 'username',
						type: 'varchar',
						isNullable: false,
						isUnique: true,
					},
					{ name: 'password', type: 'varchar', isNullable: false },
					{ name: 'name', type: 'varchar', isNullable: false },
					{
						name: 'company_name',
						type: 'varchar',
						isNullable: true,
					},
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
		await queryRunner.dropTable('users', true, true, true);
	}
}
