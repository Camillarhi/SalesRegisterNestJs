import { Body, Controller, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RegisterDto } from 'src/auth/models/register.dto';
import { UserService } from 'src/user/user.service';
import { StockinwardsService } from './stockinwards.service';
import { StockInwardsDetail } from 'src/stockinwardsdetail/stockinwardsdetail.entity';
import { StockInward } from './stockinwards.entity';
import { Request } from 'express';
import { User } from 'src/user/user.entity';
import { StockInwardCreateDTO } from './model/stockinwards.create.dto';

@ApiTags("Stock Inwards")
@UseGuards(JwtAuthGuard)
@Controller('stockinwards')
export class StockinwardsController {
    constructor(
        private stockInwardsService: StockinwardsService,
        private userService: UserService
    ) { }

    @Post()
    @UseInterceptors(FileInterceptor('stockInwardDetails', {
        storage: diskStorage({
            destination: "./uploads",
            filename(_, file, callback) {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join("");
                return callback(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    async create(
        @Body() body: StockInwardCreateDTO,
        @Req() request: Request,
        @UploadedFile() file: Express.Multer.File) {
        if (file?.filename) {
            const user: User = await this.userService.findOne(request.user["id"]);
            await this.stockInwardsService.createPurchase(user,file.path, body)

        };
        return { successmessage: "Success" }
    }
}
