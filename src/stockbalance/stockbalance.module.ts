import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockbalanceController } from './stockbalance.controller';
import { StockBalance } from './stockbalance.entity';
import { StockbalanceService } from './stockbalance.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([StockBalance]),

  ],
  controllers: [StockbalanceController],
  providers: [StockbalanceService]
})
export class StockbalanceModule {}
