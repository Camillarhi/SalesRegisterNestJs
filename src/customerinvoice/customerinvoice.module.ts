import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { DailyrecordModule } from 'src/dailyrecord/dailyrecord.module';
import { ProductModule } from 'src/product/product.module';
import { StockbalanceModule } from 'src/stockbalance/stockbalance.module';
import { UserModule } from 'src/user/user.module';
import { CustomerinvoiceController } from './customerinvoice.controller';
import { CustomerInvoice } from './customerinvoice.entity';
import { CustomerinvoiceService } from './customerinvoice.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CustomerInvoice]),
    CommonModule,
    UserModule,
    ProductModule,
    StockbalanceModule,
    DailyrecordModule
  ],
  controllers: [CustomerinvoiceController],
  providers: [CustomerinvoiceService],
  exports: [CustomerinvoiceService]

})
export class CustomerinvoiceModule { }
