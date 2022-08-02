import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockInwardsDetail } from './stockinwardsdetail.entity';

@Module({
    imports:[
      TypeOrmModule.forFeature([StockInwardsDetail]),
  
    ],})
export class StockinwardsdetailModule {}
