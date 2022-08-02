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

    @Column()
    quantity: number;

    @Column()
    unitPrice: number;

    @Column()
    qtyPerMeasure: number;

    @Column()
    costPrice: number;

    @ManyToOne(() => Product, (x) => x.productMeasures, { onDelete: 'CASCADE' })
    product: Product

}