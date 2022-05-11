import { Module } from '@nestjs/common';
import { IdiomasController } from './idiomas.controller';
import { IdiomasService } from './idiomas.service';
import { idiomasProviders } from './idiomas.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [IdiomasController],
  providers: [
    IdiomasService,
    ...idiomasProviders,
  ],
})
export class IdiomasModule {}