import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RoleModule } from './role/role.module';
import { UploadfilesController } from './uploadfiles/uploadfiles.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/role.guard';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { CompanyModule } from './company/company.module';
import { CustomerinvoicedetailModule } from './customerinvoicedetail/customerinvoicedetail.module';
import { CustomerinvoiceModule } from './customerinvoice/customerinvoice.module';
import { DailyrecordModule } from './dailyrecord/dailyrecord.module';
import { ProductmeasureModule } from './productmeasure/productmeasure.module';
import { ProductModule } from './product/product.module';
import { StockbalanceModule } from './stockbalance/stockbalance.module';
import { StockinwardsModule } from './stockinwards/stockinwards.module';
import { StockinwardsdetailModule } from './stockinwardsdetail/stockinwardsdetail.module';

@Module({
  imports: [
    // MailerModule.forRoot({
    //   transport: {
    //     service: "gmail",
    //     auth: {
    //       user: "rhitanene@gmail.com", // generated ethereal user
    //       pass: "yywfbkmdrymkqwlr", // generated ethereal password
    //     },
    //   },
    //   template: {
    //     dir: join(__dirname, 'sendemail'),
    //     adapter: new HandlebarsAdapter(),
    //     options: {
    //       strict: true,
    //     },
    //   },
    // }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '../../../', 'frontend/build'),
    // }),
    UserModule,
    TypeOrmModule.forRoot(config),
    AuthModule,
    CommonModule,
    RoleModule,
    CompanyModule,
    CustomerinvoicedetailModule,
    CustomerinvoiceModule,
    DailyrecordModule,
    ProductmeasureModule,
    ProductModule,
    StockbalanceModule,
    StockinwardsModule,
    StockinwardsdetailModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ],
})
export class AppModule { }
