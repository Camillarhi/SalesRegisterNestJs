import { IsNotEmpty } from "class-validator";
import { StockInwardsDetail } from "src/stockinwardsdetail/stockinwardsdetail.entity";
import { OneToMany } from "typeorm";

export class StockInwardCreateDTO {

    @IsNotEmpty()
    supplierName: string;

    stockInwardDetails: string;

}