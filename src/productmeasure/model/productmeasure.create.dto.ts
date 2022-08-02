import { IsNotEmpty } from "class-validator";

export class ProductMeasureCreateDTO {
   @IsNotEmpty()
    measure: string;

   @IsNotEmpty()
    quantity: number;

   @IsNotEmpty()
    unitPrice: number;

   @IsNotEmpty()
    qtyPerMeasure: number;

   @IsNotEmpty()
    costPrice: number;

}