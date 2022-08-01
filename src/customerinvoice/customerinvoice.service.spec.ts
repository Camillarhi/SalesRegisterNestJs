import { Test, TestingModule } from '@nestjs/testing';
import { CustomerinvoiceService } from './customerinvoice.service';

describe('CustomerinvoiceService', () => {
  let service: CustomerinvoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerinvoiceService],
    }).compile();

    service = module.get<CustomerinvoiceService>(CustomerinvoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
