import { IsNotEmpty } from "class-validator";
import { CustomerInvoiceDetailCreateDTO } from "src/customerinvoicedetail/model/customerinvoicedetail.create.dto";

export class CustomerInvoiceCeateDTO {
    @IsNotEmpty()
    customerName: string;

    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    total: number;
    
    @IsNotEmpty()
    invoiceDetail:CustomerInvoiceDetailCreateDTO[]

}