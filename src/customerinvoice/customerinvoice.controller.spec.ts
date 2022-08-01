import { Test, TestingModule } from '@nestjs/testing';
import { CustomerinvoiceController } from './customerinvoice.controller';

describe('CustomerinvoiceController', () => {
  let controller: CustomerinvoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerinvoiceController],
    }).compile();

    controller = module.get<CustomerinvoiceController>(CustomerinvoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
