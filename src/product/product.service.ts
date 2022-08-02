import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { ProductMeasure } from 'src/productmeasure/productmeasure.entity';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends CommonService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {
        super(productRepository)
    }

    async getProductForPrice(userId: any, productId: any): Promise<any> {
        let product = await this.productRepository.createQueryBuilder("product")
            .where("product.adminId =:id", { id: userId })
            .andWhere("product.id =:prodid", { prodid: productId })
            .leftJoinAndSelect("product.productMeasures", "productMeasures")
            .getOne();
        return product
    }

    customQuery(idd: any): any {
        return this.productRepository.createQueryBuilder("product")
            .where("product.adminId =:id", { id: idd })
            .leftJoinAndSelect("product.productMeasures", "productMeasures")
            .getMany();
    }

    async createProduct(data: any, user: any) {
        const product = new Product();
        product.productCode = (data.productName.substring(1, 3)) + (Math.floor(Math.random() * (20000 - 22 + 1)) + 34);
        product.productName = data.productName;
        product.adminId = user.createdById;
        let prodMeasure = [];
        for (let i = 0; i < data?.productMeasures?.length; i++) {
            let proMeasure = new ProductMeasure();
            proMeasure.costPrice = data?.productMeasures[i].costPrice;
            proMeasure.measure = data?.productMeasures[i].measure;
            proMeasure.productId = product.id;
            proMeasure.qtyPerMeasure = data?.productMeasures[i].qtyPerMeasure;
            proMeasure.unitPrice = data?.productMeasures[i].unitPrice;
            prodMeasure.push(proMeasure)
        }
        product.productMeasures = prodMeasure
        this.productRepository.save(product);
        return { successmessage: "Successfully created" }

    }
}
