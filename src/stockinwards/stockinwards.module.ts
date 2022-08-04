import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { UserModule } from 'src/user/user.module';
import { StockinwardsController } from './stockinwards.controller';
import { StockInward } from './stockinwards.entity';
import { StockinwardsService } from './stockinwards.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockInward]),
    CommonModule,
    UserModule
  ],
  controllers: [StockinwardsController],
  providers: [StockinwardsService]
})
export class StockinwardsModule { }
