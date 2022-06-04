import { Module } from '@nestjs/common';

import { InterpretesAuthService } from './interpretesAuth.service';
import { IntepretesStrategy } from './interpretesAuth.strategy';
import { InterpretesJwtStrategy } from './interpretesAuth-jwt.strategy';
import { InterpretesModule } from 'src/interpretes/interpretes.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from './interpretesAuth.constansts';
import { InterpretesAuthController } from './interpretesAuth.controller';

@Module({
  imports: [
    InterpretesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContants.interpretesSecret,
      signOptions: { expiresIn: '1h' } // 1 hour
    })
  ],
  providers: [InterpretesAuthService, IntepretesStrategy, InterpretesJwtStrategy],
  exports: [InterpretesAuthService],
  controllers: [InterpretesAuthController]
})
export class InterpretesAuthModule {}
