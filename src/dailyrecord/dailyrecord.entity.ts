import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dailyrecords")
export class DailyRecord {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    adminId: number;

    @Column()
    product: string;

    @Column()
    measure: string;
    
    @Column()
    quantity: number;
    
    @Column()
    unitPrice: number;
    
    @Column()
    amount: number;
    
    @Column()
    date: Date;

    @Column()
    customerName: string;

     @Column()
    phoneNumber: string;

    @Column()
    soldById: number;

}