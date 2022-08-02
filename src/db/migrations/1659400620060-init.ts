import {MigrationInterface, QueryRunner} from "typeorm";

export class init1659400620060 implements MigrationInterface {
    name = 'init1659400620060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "address" character varying NOT NULL, "gender" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "profilePicture" character varying, "password" character varying NOT NULL, "staffId" character varying, "createdById" character varying, "companyName" character varying, "roleId" integer, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "companyName" character varying NOT NULL, "adminId" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customerinvoicedetail" ("id" SERIAL NOT NULL, "invoiceId" character varying NOT NULL, "adminId" integer NOT NULL, "product" character varying NOT NULL, "productId" integer NOT NULL, "measure" character varying NOT NULL, "measureId" integer NOT NULL, "quantity" integer NOT NULL, "unitPrice" integer NOT NULL, "amount" integer NOT NULL, "date" TIMESTAMP NOT NULL, "customerInvoiceId" integer, CONSTRAINT "PK_19529d09a66295d1e99c393618e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customerinvoice" ("id" SERIAL NOT NULL, "customerName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "invoiceId" character varying NOT NULL, "adminId" integer NOT NULL, "soldById" integer NOT NULL, "total" integer NOT NULL, "Date" TIMESTAMP NOT NULL, CONSTRAINT "PK_8074272ad8aa7008a618140229f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productmeasure" ("id" SERIAL NOT NULL, "productId" integer NOT NULL, "measure" character varying NOT NULL, "quantity" integer NOT NULL, "unitPrice" integer NOT NULL, "qtyPerMeasure" integer NOT NULL, "costPrice" integer NOT NULL, CONSTRAINT "PK_1e34138f8df2ce230d02ebf083f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "productCode" integer NOT NULL, "productName" character varying NOT NULL, "adminId" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dailyrecords" ("id" SERIAL NOT NULL, "adminId" integer NOT NULL, "product" character varying NOT NULL, "measure" character varying NOT NULL, "quantity" integer NOT NULL, "unitPrice" integer NOT NULL, "amount" integer NOT NULL, "Date" TIMESTAMP NOT NULL, "customerName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "soldById" integer NOT NULL, CONSTRAINT "PK_2c7ab163fe8376247d245aa9cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stockbalance" ("id" SERIAL NOT NULL, "productCode" character varying NOT NULL, "product" character varying NOT NULL, "measure" character varying NOT NULL, "quantity" integer NOT NULL, "adminId" integer NOT NULL, CONSTRAINT "PK_0708a1cf4f6af5ea698703a81dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stockinwardsdetail" ("id" SERIAL NOT NULL, "productCode" integer NOT NULL, "product" character varying NOT NULL, "quantity" integer NOT NULL, "adminId" integer NOT NULL, "measure" character varying NOT NULL, "stockInwardId" integer, CONSTRAINT "PK_c07fc42b72ab4fdfcc292e80a92" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stockinward" ("id" SERIAL NOT NULL, "supplierName" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "adminId" integer NOT NULL, "approve" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c5534c1712a00c92f6defb616f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Users" ADD CONSTRAINT "FK_65c56db5a9988b90b0d7245e0f0" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customerinvoicedetail" ADD CONSTRAINT "FK_8d077589472519cab377131f286" FOREIGN KEY ("customerInvoiceId") REFERENCES "customerinvoice"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productmeasure" ADD CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stockinwardsdetail" ADD CONSTRAINT "FK_145c7f4e3adb090ff6360b9e13b" FOREIGN KEY ("stockInwardId") REFERENCES "stockinward"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stockinwardsdetail" DROP CONSTRAINT "FK_145c7f4e3adb090ff6360b9e13b"`);
        await queryRunner.query(`ALTER TABLE "productmeasure" DROP CONSTRAINT "FK_8e9ff380e5fb346a18c06df3d4a"`);
        await queryRunner.query(`ALTER TABLE "customerinvoicedetail" DROP CONSTRAINT "FK_8d077589472519cab377131f286"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP CONSTRAINT "FK_65c56db5a9988b90b0d7245e0f0"`);
        await queryRunner.query(`DROP TABLE "stockinward"`);
        await queryRunner.query(`DROP TABLE "stockinwardsdetail"`);
        await queryRunner.query(`DROP TABLE "stockbalance"`);
        await queryRunner.query(`DROP TABLE "dailyrecords"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "productmeasure"`);
        await queryRunner.query(`DROP TABLE "customerinvoice"`);
        await queryRunner.query(`DROP TABLE "customerinvoicedetail"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
    }

}
