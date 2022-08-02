import { ProductMeasure } from "src/productmeasure/productmeasure.entity";
import { StockInward } from "src/stockinwards/stockinwards.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("stockinwardsdetail")
export class StockInwardsDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productCode: number;

    @Column()
    product: string;

    @Column()
    quantity: number;

    @Column()
    adminId: number;

    @Column()
    measure: string;

    @ManyToOne(() => StockInward, (x) => x.stockInwardDetails, { onDelete: 'CASCADE' })
    stockInward: StockInward
}