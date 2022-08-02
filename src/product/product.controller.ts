import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { ProductService } from './product.service';


@ApiTags("Product")
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
    constructor(
        private productService: ProductService,
        private userService: UserService
    ) { }
}
