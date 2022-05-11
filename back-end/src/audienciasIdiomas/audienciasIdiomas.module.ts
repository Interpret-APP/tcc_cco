import { Module } from '@nestjs/common';
import { AudienciasIdiomasController } from './audienciasIdiomas.controller';
import { AudienciasIdiomasService } from './audienciasIdiomas.service';
import { audienciasIdiomasProviders } from './audienciasIdiomas.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AudienciasIdiomasController],
  providers: [
    AudienciasIdiomasService,
    ...audienciasIdiomasProviders,
  ],
})
export class AudienciasIdiomasModule {}