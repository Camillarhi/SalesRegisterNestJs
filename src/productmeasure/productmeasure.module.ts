import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductMeasure } from './productmeasure.entity';

@Module({
    imports:[
      TypeOrmModule.forFeature([ProductMeasure]),
  
    ],
})
export class ProductmeasureModule {}
