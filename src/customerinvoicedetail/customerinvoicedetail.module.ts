import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerInvoiceDetail } from './customerinvoicedetail.entity';

@Module({
    imports:[
        TypeOrmModule.forFeature([CustomerInvoiceDetail]),
    
      ],
})
export class CustomerinvoicedetailModule {}
