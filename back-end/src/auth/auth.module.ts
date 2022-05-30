import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuariosStrategy } from './usuarios.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { InterpretesModule } from 'src/interpretes/interpretes.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from './constants';

@Module({
  imports: [
    UsuariosModule,
    InterpretesModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContants.secret,
      signOptions: { expiresIn: '1h' } // 1 hour
    })
  ],
  providers: [AuthService, UsuariosStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
