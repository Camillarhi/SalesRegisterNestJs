import { StockInwardsDetail } from "src/stockinwardsdetail/stockinwardsdetail.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("stockinward")
export class StockInward {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    supplierName: string;

    @Column()
    date: Date;

    @Column()
    adminId: number;

    @Column({ default: false })
    approve: boolean;

    @OneToMany(() => StockInwardsDetail, (x) => x.stockInward, { cascade: true })
    stockInwardDetails: StockInwardsDetail[];

}