import { Test, TestingModule } from '@nestjs/testing';
import { DailyrecordService } from './dailyrecord.service';

describe('DailyrecordService', () => {
  let service: DailyrecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyrecordService],
    }).compile();

    service = module.get<DailyrecordService>(DailyrecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
