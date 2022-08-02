import { CustomerInvoiceDetail } from "src/customerinvoicedetail/customerinvoicedetail.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("customerinvoice")
export class CustomerInvoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    phoneNumber: string;

    @Column()
    invoiceId: string;

    @Column()
    adminId: number;

    @Column()
    soldById: number;

    @Column()
    total: number;

    @Column()
    date: Date;

    @OneToMany(() => CustomerInvoiceDetail, (x) => x.customerInvoice, { cascade: true })
    invoiceDetail: CustomerInvoiceDetail[];

}