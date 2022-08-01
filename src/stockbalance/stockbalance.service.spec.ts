import { Test, TestingModule } from '@nestjs/testing';
import { StockbalanceService } from './stockbalance.service';

describe('StockbalanceService', () => {
  let service: StockbalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockbalanceService],
    }).compile();

    service = module.get<StockbalanceService>(StockbalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
