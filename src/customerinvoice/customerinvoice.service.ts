import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { DailyRecord } from 'src/dailyrecord/dailyrecord.entity';
import { Product } from 'src/product/product.entity';
import { StockBalance } from 'src/stockbalance/stockbalance.entity';
import { Repository } from 'typeorm';
import { CustomerInvoice } from './customerinvoice.entity';

@Injectable()
export class CustomerinvoiceService extends CommonService {
    constructor(
        @InjectRepository(CustomerInvoice) private readonly customerInvoiceRepository: Repository<CustomerInvoice>,
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(StockBalance) private readonly stockBalanceRepository: Repository<StockBalance>,
        @InjectRepository(DailyRecord) private readonly dailyrecordRepository: Repository<DailyRecord>,
    ) {
        super(customerInvoiceRepository)
    }

    customQuery(idd: any): any {
        return this.customerInvoiceRepository.createQueryBuilder("customerinvoice")
            .where("customerinvoice.soldById =:id", { id: idd })
            .leftJoinAndSelect("customerinvoice.customerInvoiceDetail", "customerInvoiceDetail")
            .getMany();
    }

    async createSales(data: any, user: any): Promise<any> {
        const query = this.customerInvoiceRepository.createQueryBuilder("customerinvoice")
        const record = new CustomerInvoice();
        record.soldById = user.id;
        record.adminId = user.createdById;
        record.customerName = data.customerName;
        record.phoneNumber = data.phoneNumber;
        record.date = new Date();
        record.invoiceId = (user.companyName.substring(1, 3)) + (data.customerName.substring(1, 3)) + (Math.floor(Math.random() * (20000 - 22 + 1)) + 34)
        let recorDetails = [];
        if (data.invoiceDetail.length === 0) {
            return { errormessage: "No sales made!" }
        }

        for (let i = 0; i < data.invoiceDetail.length; i++) {
            let recordDetail =
            {
                adminId: record.adminId,
                quantity: data.invoiceDetail[i].quantity,
                measure: data.invoiceDetail[i].measure,
                measureId: data.invoiceDetail[i].measureId,
                productId: data.invoiceDetail[i].productId,
                product: data.invoiceDetail[i].product,
                date: record.date,
                invoiceId: record.invoiceId,
                unitPrice: 0,
                amount: 0,

            };
            let product = this.productRepository.createQueryBuilder("product")
                .where("product.adminId =:id", { id: user.id })
                .andWhere("product.id =:prodid", { prodid: data.invoiceDetail[i].productId })
                .leftJoinAndSelect("product.productMeasures", "productMeasures")
                .getOne();
            let unitPrice = (await product).productMeasures.find(x => x.id == data.invoiceDetail[i].measureId && x.productId == data.invoiceDetail[i].productId).unitPrice;
            let updateProductQty = (await product).productMeasures.find(x => x.id == data.invoiceDetail[i].measureId && x.productId == data.invoiceDetail[i].productId);
            updateProductQty.quantity -= recordDetail.quantity;
            recordDetail.unitPrice = unitPrice;
            recordDetail.amount = unitPrice * recordDetail.quantity;
            let productsQty = this.stockBalanceRepository.createQueryBuilder("stockbalance")
                .where("stockbalance.measure =:measure", { measure: recordDetail.measure })
                .andWhere("stockbalance.product =:prod", { prod: recordDetail.product })
                .getOne();

            (await productsQty).quantity -= recordDetail.quantity;
            await this.stockBalanceRepository.update((await productsQty).id, (await productsQty))
            recorDetails.push(recordDetail);
        }
        record.invoiceDetail = recorDetails
        record.total = recorDetails.reduce(function (a, b) {
            return a + b.amount;
        }, 0)

        let records = []
        for (let i = 0; i < data.invoiceDetail.length; i++) {
            {
                var dailySales = {
                    soldById: record.soldById,
                    adminId: record.adminId,
                    quantity: data.invoiceDetail[i].quantity,
                    product: data.invoiceDetail[i].product,
                    measure: data.invoiceDetail[i].measure,
                    date: record.date,
                    phoneNumber: record.phoneNumber,
                    customerName: record.customerName,
                    unitPrice: 0,
                    amount: 0
                }
                let product = this.productRepository.createQueryBuilder("product")
                    .where("product.adminId =:id", { id: user.id })
                    .andWhere("product.id =:prodid", { prodid: data.invoiceDetail[i].productId })
                    .leftJoinAndSelect("product.productMeasures", "productMeasures")
                    .getOne();
                let unitPrice = (await product).productMeasures.find(x => x.id == data.invoiceDetail[i].measureId && x.productId == data.invoiceDetail[i].productId).unitPrice;
                dailySales.unitPrice = unitPrice;
                dailySales.amount = unitPrice * dailySales.quantity;
                records.push(dailySales);

            }
            await this.dailyrecordRepository.save(records)
            await this.productRepository.save(record)

            return { successmessage: "Successfully created" }

        }
    }
}
