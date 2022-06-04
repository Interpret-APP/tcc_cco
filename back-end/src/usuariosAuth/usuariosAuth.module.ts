import { Module } from '@nestjs/common';
import { AuthService } from './usuariosAuth.service';
import { UsuariosStrategy } from './usuariosAuth.strategy';
import { UsuariosJwtStrategy } from './usuariosAuth-jwt.strategy';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from './usuariosAuth.constants';
import { AuthController } from './usuariosAuth.controller';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContants.usuariosSecret,
      signOptions: { expiresIn: '1h' } // 1 hour
    })
  ],
  providers: [AuthService, UsuariosStrategy, UsuariosJwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
