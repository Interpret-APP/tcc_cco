import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { usuariosProviders } from './usuarios.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    ...usuariosProviders,
  ],
})
export class UsuariosModule {}