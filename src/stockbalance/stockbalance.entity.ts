import { ProductMeasure } from "src/productmeasure/productmeasure.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("stockbalance")
export class StockBalance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productCode: string;

    @Column()
    product: string;

    @Column()
    measure: string;

    @Column()
    quantity: number;

    @Column()
    adminId: number;

}