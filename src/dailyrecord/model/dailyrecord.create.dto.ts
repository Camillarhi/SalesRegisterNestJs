import { IsNotEmpty } from "class-validator";

export class DailyRecordCreateDTO {
    @IsNotEmpty()
    product: string;

    @IsNotEmpty()
    measure: string;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    unitPrice: number;

    @IsNotEmpty()
    amount: number;

}