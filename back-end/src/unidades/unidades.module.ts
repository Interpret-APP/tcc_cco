import { Module } from '@nestjs/common';
import { UnidadesController } from './unidades.controller';
import { UnidadesService } from './unidades.service';
import { unidadesProviders } from './unidades.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadesController],
  providers: [
    UnidadesService,
    ...unidadesProviders,
  ],
})
export class UnidadesModule {}