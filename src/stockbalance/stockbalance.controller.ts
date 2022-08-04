import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StockBalance } from './stockbalance.entity';
import { StockbalanceService } from './stockbalance.service';

@ApiTags("Stock Balance")
@UseGuards(JwtAuthGuard)
@Controller('stockbalance')
export class StockbalanceController {
    constructor(
        private stockBalanceService: StockbalanceService,
    ) { }

    @Get()
    async all(@Req() request: Request): Promise<StockBalance[]> {
        const loggedInUser = request.user["id"];

        return this.stockBalanceService.customQuery(loggedInUser);
    }
}
