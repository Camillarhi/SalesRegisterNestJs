import {MigrationInterface, QueryRunner} from "typeorm";

export class fif1659539910141 implements MigrationInterface {
    name = 'fif1659539910141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productCode"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productCode" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "productCode"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "productCode" integer NOT NULL`);
    }

}
