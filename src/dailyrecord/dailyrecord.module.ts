import { Module } from '@nestjs/common';
import { DailyrecordController } from './dailyrecord.controller';
import { DailyrecordService } from './dailyrecord.service';

@Module({
  controllers: [DailyrecordController],
  providers: [DailyrecordService]
})
export class DailyrecordModule {}
