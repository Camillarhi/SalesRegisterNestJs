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
}
