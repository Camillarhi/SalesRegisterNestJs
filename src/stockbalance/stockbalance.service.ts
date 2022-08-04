import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { StockBalance } from './stockbalance.entity';

@Injectable()
export class StockbalanceService extends CommonService {
    constructor(
        @InjectRepository(StockBalance) private readonly stockBalanceRepository: Repository<StockBalance>
    ) {
        super(stockBalanceRepository)
    }

    async balanceStock(measure: any, product: any, quantity: any): Promise<any> {
        let productsQty = this.stockBalanceRepository.createQueryBuilder("stockbalance")
            .where("stockbalance.measure =:measure", { measure: measure })
            .andWhere("stockbalance.product =:prod", { prod: product })
            .getOne();

        (await productsQty).quantity -= quantity;
        await this.stockBalanceRepository.update((await productsQty).id, (await productsQty))
    }

    customQuery(idd: any): any {
        return this.stockBalanceRepository.createQueryBuilder("stockbalance")
            .where("stockbalance.adminId =:id", { id: idd })
            .getMany();
    }

}
