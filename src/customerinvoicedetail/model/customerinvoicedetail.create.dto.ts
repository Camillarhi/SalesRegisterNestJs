import { IsNotEmpty } from "class-validator";

export class CustomerInvoiceDetailCreateDTO {
    @IsNotEmpty()
    productCode: string;

    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    measure: string;

    @IsNotEmpty()
    measureId: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    unitPrice: number;

    @IsNotEmpty()
    amount: number;

}