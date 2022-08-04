import { Product } from "src/product/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("productmeasure")
export class ProductMeasure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    measure: string;

    @Column({ nullable: true, default: 0 })
    quantity: number;

    @Column({ nullable: true, default: 0 })
    unitPrice: number;

    @Column({ nullable: true, default: 0 })
    qtyPerMeasure: number;

    @Column({ nullable: true, default: 0 })
    costPrice: number;

    @ManyToOne(() => Product, (x) => x.productMeasures, { onDelete: 'CASCADE', orphanedRowAction: "delete" })
    product: Product

}