import { ProductMeasure } from "src/productmeasure/productmeasure.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productCode: string;

    @Column()
    productName: string;

    @Column()
    adminId: number;

    @OneToMany(() => ProductMeasure, (x) => x.product, { cascade: true, nullable: true })
    productMeasures: ProductMeasure[];


}