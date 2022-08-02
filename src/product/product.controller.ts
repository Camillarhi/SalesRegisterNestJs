import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@ApiTags("Product")
@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
    // constructor(
    //     private customerInvoiceService: CustomerinvoiceService,
    //     private dailyRecordService: DailyrecordService,
    //     private userService: UserService
    // ) { }
}
