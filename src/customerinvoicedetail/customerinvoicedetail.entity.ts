import { CustomerInvoice } from "src/customerinvoice/customerinvoice.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("customerinvoicedetail")
export class CustomerInvoiceDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    invoiceId: string;

    @Column()
    adminId: number;

    @Column()
    product: string;

    @Column()
    productId: number;

    @Column()
    measure: string;

    @Column()
    measureId: number;

    @Column()
    quantity: number;

    @Column()
    unitPrice: number;

    @Column()
    amount: number;

    @Column()
    date: Date;

    @ManyToOne(() => CustomerInvoice, (x) => x.invoiceDetail, { onDelete: 'CASCADE' })
    customerInvoice: CustomerInvoice


}