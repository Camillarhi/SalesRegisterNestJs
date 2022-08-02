import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CustomerinvoiceModule } from 'src/customerinvoice/customerinvoice.module';
import { UserModule } from 'src/user/user.module';
import { DailyrecordController } from './dailyrecord.controller';
import { DailyRecord } from './dailyrecord.entity';
import { DailyrecordService } from './dailyrecord.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DailyRecord]),
    CommonModule,
    UserModule,
    CustomerinvoiceModule
  ],
  controllers: [DailyrecordController],
  providers: [DailyrecordService],
  exports: [DailyrecordService]

})
export class DailyrecordModule { }
