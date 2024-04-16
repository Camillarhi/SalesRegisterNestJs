import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { ProductService } from 'src/product/product.service';
import { StockInwardsDetailDTO } from 'src/stockinwardsdetail/model/stockinwardsdetail.create.dto';
import { StockInwardsDetail } from 'src/stockinwardsdetail/stockinwardsdetail.entity';
import { Repository } from 'typeorm';
import { readFile, utils } from "xlsx";
import { StockInward } from './stockinwards.entity';

@Injectable()
export class StockinwardsService extends CommonService {
    constructor(
        @InjectRepository(StockInward) private readonly stockInwardRepository: Repository<StockInward>,
        // private productService: ProductService,

    ) {
        super(stockInwardRepository)
    }

    async createPurchase(user: any, path: any, data: any) {
        const stockInwards = new StockInward();
        stockInwards.adminId = user.createdById;
        stockInwards.date = new Date();
        stockInwards.supplierName = data.supplierName;
        stockInwards.approve = false

        const workbook = readFile(path)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        // let post = {
        //     product: '',
        //     measure: '',
        //     quantity: '',
        // };
        let dTA: StockInwardsDetailDTO[] = utils.sheet_to_json(worksheet)
        console.log({ dTA })
        let post: StockInwardsDetailDTO = {}
        let p: StockInwardsDetailDTO[] = []
        const posts = []

        for (let i = 0; i < dTA?.length; i++) {
            let stockinDt = new StockInwardsDetail()
            stockinDt.product = dTA[i].product;
            stockinDt.measure = dTA[i].measure;
            stockinDt.quantity = dTA[i].quantity;
            stockinDt.adminId = user.createdById;
            // let productExitsInDb = this.productService.getProductExist;
            stockinDt.productCode = (data.productName.substring(1, 2)) + (Math.floor(Math.random() * (20000 - 22 + 1)) + 34);

        }
        for (let cell in worksheet) {
            const cellAsString = cell.toString();
            console.log(worksheet[cell].v)
            if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm') {
                if (cellAsString[0] === 'A') {
                    post.product = worksheet[cell].v;
                }
                if (cellAsString[0] === 'B') {
                    post.measure = worksheet[cell].v;
                }
                if (cellAsString[0] === 'C') {
                    post.quantity = worksheet[cell].v;
                    posts.push(post);
                }
            }
        }
        console.log(typeof (posts))
        stockInwards.stockInwardDetails = posts
        console.log({ posts })
        console.log(posts[0])
        console.log({ stockInwards })
    }
}
