import { IsNotEmpty } from "class-validator";

export class StockBalanceDTO {
    @IsNotEmpty()
    measure: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    adminId: number;

}