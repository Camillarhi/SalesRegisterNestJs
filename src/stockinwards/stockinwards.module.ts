import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockinwardsController } from './stockinwards.controller';
import { StockInward } from './stockinwards.entity';
import { StockinwardsService } from './stockinwards.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([StockInward]),

  ],
  controllers: [StockinwardsController],
  providers: [StockinwardsService]
})
export class StockinwardsModule { }
