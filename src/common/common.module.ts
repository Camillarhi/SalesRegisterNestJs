import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constant';
import { CommonService } from './common.service';

@Module({
    imports: [
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '100d' },
    }),
    ],
    exports: [
        JwtModule
    ],
})
export class CommonModule {}
