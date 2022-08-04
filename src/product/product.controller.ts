import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { ProductCreateDTO } from './model/product.create.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';


@ApiTags("Product")
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
        private userService: UserService
    ) { }

    @Get()
    async all(@Req() request: Request): Promise<Product[]> {
        const loggedInUser = request.user["id"];
        const user = await this.userService.findOne({ id: loggedInUser })

        return this.productService.customQuery(loggedInUser);
    }

    @Get("updatedproducts")
    async allWithPrices(@Req() request: Request): Promise<Product[]> {
        const loggedInUser = request.user["id"];
        const user = await this.userService.findOne({ id: loggedInUser })

        return this.productService.getPrices(loggedInUser);
    }

    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.productService.findOne({ id }, ["productMeasures"]);
    }

    @Post()
    async create(
        @Body() body: ProductCreateDTO,
        @Req() request: Request
    ) {
        const user: User = await this.userService.findOne(request.user["id"]);
        if (user) {
            await this.productService.createProduct(body, user)

        }
    }

    @Put(":id")
    async update(
        @Param("id") id: number,
        @Body() body: ProductCreateDTO
    ) {
        const product =await this.productService.findOne({ id }, ["productMeasures"])
        await this.productService.editProduct(id, body, product)
        return { successmessage: "Successfully updated" }

    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        await this.productService.delete(id);
        return { successmessage: "Successfully deleted" }
    }

}
