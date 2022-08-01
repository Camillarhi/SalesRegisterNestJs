import { Module } from '@nestjs/common';
import { StockbalanceController } from './stockbalance.controller';
import { StockbalanceService } from './stockbalance.service';

@Module({
  controllers: [StockbalanceController],
  providers: [StockbalanceService]
})
export class StockbalanceModule {}
