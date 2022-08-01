import { Test, TestingModule } from '@nestjs/testing';
import { DailyrecordController } from './dailyrecord.controller';

describe('DailyrecordController', () => {
  let controller: DailyrecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyrecordController],
    }).compile();

    controller = module.get<DailyrecordController>(DailyrecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
