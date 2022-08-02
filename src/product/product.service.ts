import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends CommonService {
    constructor(
        @InjectRepository(Product) private readonly productRepository:Repository<Product>
    ){
        super(productRepository)
    }
}
