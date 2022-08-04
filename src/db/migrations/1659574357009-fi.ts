import {MigrationInterface, QueryRunner} from "typeorm";

export class fi1659574357009 implements MigrationInterface {
    name = 'fi1659574357009'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "quantity" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "unitPrice" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "qtyPerMeasure" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "costPrice" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "costPrice" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "qtyPerMeasure" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "unitPrice" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "quantity" DROP DEFAULT`);
    }

}
