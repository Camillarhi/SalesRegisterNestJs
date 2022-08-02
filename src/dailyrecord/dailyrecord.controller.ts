import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CustomerInvoice } from 'src/customerinvoice/customerinvoice.entity';
import { CustomerinvoiceService } from 'src/customerinvoice/customerinvoice.service';
import { CustomerInvoiceCeateDTO } from 'src/customerinvoice/model/customerinvoice.create.dto';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { DailyrecordService } from './dailyrecord.service';

@ApiTags("DailyRecord")
@UseGuards(JwtAuthGuard)
@Controller('dailyrecord')
export class DailyrecordController {
    constructor(
        private customerInvoiceService: CustomerinvoiceService,
        private dailyRecordService: DailyrecordService,
        private userService: UserService
    ) { }


    @Get()
    async all(@Req() request: Request): Promise<CustomerInvoice[]> {
        const loggedInUser = request.user["id"];
        const user = await this.userService.findOne({ id: loggedInUser })

        return this.dailyRecordService.customQuery(loggedInUser);
    }


    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.dailyRecordService.findOne({ id });
    }

    @Post()
    async create(
        @Body() body: CustomerInvoiceCeateDTO,
        @Req() request: Request
    ) {
        // const loggedInUser = await this.authService.loggedInUser(request);
        console.log(request.user)
        const user: User = await this.userService.findOne(request.user["id"]);
        if (user) {
            await this.customerInvoiceService.createSales(body, user)

        }
    }

}
