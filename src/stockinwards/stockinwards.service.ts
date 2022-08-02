import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { StockInward } from './stockinwards.entity';

@Injectable()
export class StockinwardsService extends CommonService{
    constructor(
        @InjectRepository(StockInward) private readonly stockInwardRepository:Repository<StockInward>
    ){
        super(stockInwardRepository)
    }
}
