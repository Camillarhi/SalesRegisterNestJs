import { Test, TestingModule } from '@nestjs/testing';
import { StockinwardsService } from './stockinwards.service';

describe('StockinwardsService', () => {
  let service: StockinwardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockinwardsService],
    }).compile();

    service = module.get<StockinwardsService>(StockinwardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
