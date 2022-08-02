import { IsNotEmpty } from "class-validator";
import { ProductMeasureCreateDTO } from "src/productmeasure/model/productmeasure.create.dto";

export class ProductCreateDTO {
    @IsNotEmpty()
    productName: string;

    @IsNotEmpty()
    productMeasures: ProductMeasureCreateDTO[]


}