import { Module } from '@nestjs/common';
import { PaisesController } from './paises.controller';
import { PaisesService } from './paises.service';
import { paisesProviders } from './paises.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PaisesController],
  providers: [
    PaisesService,
    ...paisesProviders,
  ],
})
export class PaisesModule {}