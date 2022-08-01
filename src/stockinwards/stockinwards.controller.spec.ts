import { Test, TestingModule } from '@nestjs/testing';
import { StockinwardsController } from './stockinwards.controller';

describe('StockinwardsController', () => {
  let controller: StockinwardsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockinwardsController],
    }).compile();

    controller = module.get<StockinwardsController>(StockinwardsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
