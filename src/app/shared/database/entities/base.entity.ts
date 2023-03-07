import {
	Entity,
	PrimaryColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	BeforeUpdate,
} from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export abstract class BaseEntity {
	@PrimaryColumn()
	uid!: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt!: Date | null;

	@BeforeInsert()
	beforeInsert() {
		this.uid = v4();
		this.createdAt = new Date();
		this.updatedAt = null;
	}

	@BeforeUpdate()
	beforeUpdate() {
		this.updatedAt = new Date();
	}
}
