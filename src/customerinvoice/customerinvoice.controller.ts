import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/role/role.enum';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CustomerInvoice } from './customerinvoice.entity';
import { CustomerinvoiceService } from './customerinvoice.service';
import { CustomerInvoiceCeateDTO } from './model/customerinvoice.create.dto';

@Controller('customerinvoice')
export class CustomerinvoiceController {
    constructor(
        private customerInvoiceService: CustomerinvoiceService,
        private userService: UserService
    ) { }

    @Get()
    async all(@Req() request: Request): Promise<CustomerInvoice[]> {
        const loggedInUser = request.user["id"];
        const user = await this.userService.findOne({ id: loggedInUser }, ["role"])

        return this.customerInvoiceService.customQuery(loggedInUser);
    }


    @Get(":id")
    async getOne(@Param("id") id: number) {
        return this.customerInvoiceService.findOne({ id }, ["customerInvoiceDetail"]);
    }

}
