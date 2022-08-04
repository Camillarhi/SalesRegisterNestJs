import {MigrationInterface, QueryRunner} from "typeorm";

export class second1659533489059 implements MigrationInterface {
    name = 'second1659533489059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customerinvoice" RENAME COLUMN "Date" TO "date"`);
        await queryRunner.query(`ALTER TABLE "dailyrecords" RENAME COLUMN "Date" TO "date"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "phoneNumber" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "dailyrecords" RENAME COLUMN "date" TO "Date"`);
        await queryRunner.query(`ALTER TABLE "customerinvoice" RENAME COLUMN "date" TO "Date"`);
    }

}
