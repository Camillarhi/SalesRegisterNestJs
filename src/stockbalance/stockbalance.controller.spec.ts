import { Test, TestingModule } from '@nestjs/testing';
import { StockbalanceController } from './stockbalance.controller';

describe('StockbalanceController', () => {
  let controller: StockbalanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockbalanceController],
    }).compile();

    controller = module.get<StockbalanceController>(StockbalanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
