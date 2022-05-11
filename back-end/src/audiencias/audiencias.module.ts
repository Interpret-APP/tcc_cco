import { Module } from '@nestjs/common';
import { AudienciasController } from './audiencias.controller';
import { AudienciasService } from './audiencias.service';
import { audienciasProviders } from './audiencias.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AudienciasController],
  providers: [
    AudienciasService,
    ...audienciasProviders,
  ],
})
export class AudienciasModule {}