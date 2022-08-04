import {MigrationInterface, QueryRunner} from "typeorm";

export class ff1659578907936 implements MigrationInterface {
    name = 'ff1659578907936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" DROP CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a"`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ADD CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productmeasure" DROP CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a"`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ADD CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
