import {MigrationInterface, QueryRunner} from "typeorm";

export class f1659577872839 implements MigrationInterface {
    name = 'f1659577872839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" DROP CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a"`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ADD CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" DROP CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a"`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ADD CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
