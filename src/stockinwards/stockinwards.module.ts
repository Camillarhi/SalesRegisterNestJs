import { Module } from '@nestjs/common';
import { StockinwardsController } from './stockinwards.controller';
import { StockinwardsService } from './stockinwards.service';

@Module({
  controllers: [StockinwardsController],
  providers: [StockinwardsService]
})
export class StockinwardsModule {}
