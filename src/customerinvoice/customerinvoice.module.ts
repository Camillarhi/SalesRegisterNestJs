import { Module } from '@nestjs/common';
import { CustomerinvoiceController } from './customerinvoice.controller';
import { CustomerinvoiceService } from './customerinvoice.service';

@Module({
  controllers: [CustomerinvoiceController],
  providers: [CustomerinvoiceService]
})
export class CustomerinvoiceModule {}
