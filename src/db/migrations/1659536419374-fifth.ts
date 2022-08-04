import {MigrationInterface, QueryRunner} from "typeorm";

export class fifth1659536419374 implements MigrationInterface {
    name = 'fifth1659536419374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "quantity" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "unitPrice" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "qtyPerMeasure" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "costPrice" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "costPrice" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "qtyPerMeasure" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "unitPrice" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ALTER COLUMN "quantity" SET NOT NULL`);
    }

}
