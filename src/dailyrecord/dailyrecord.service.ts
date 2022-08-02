import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { DailyRecord } from './dailyrecord.entity';

@Injectable()
export class DailyrecordService extends CommonService {
    constructor(
        @InjectRepository(DailyRecord) private readonly dailyRecordRepository: Repository<DailyRecord>
    ) {
        super(dailyRecordRepository)
    }

    customQuery(idd: any): any {
        return this.dailyRecordRepository.createQueryBuilder("dailyrecords")
            .where("dailyrecords.soldById =:id", { id: idd })
            .getMany();
    }
}
