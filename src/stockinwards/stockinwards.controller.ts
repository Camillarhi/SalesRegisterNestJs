import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags("Stock Inwards")
@UseGuards(JwtAuthGuard)
@Controller('stockinwards')
export class StockinwardsController {}
