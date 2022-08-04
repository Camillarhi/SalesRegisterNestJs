import {MigrationInterface, QueryRunner} from "typeorm";

export class fift1659538602747 implements MigrationInterface {
    name = 'fift1659538602747'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdById" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdById"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdById" character varying`);
    }

}
