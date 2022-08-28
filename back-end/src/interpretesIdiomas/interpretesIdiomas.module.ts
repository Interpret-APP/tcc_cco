import { Module } from '@nestjs/common';
import { InterpretesIdiomasController } from './interpretesIdiomas.controller';
import { InterpretesIdiomasService } from './interpretesIdiomas.service';
import { IdiomasService } from '../idiomas/idiomas.service';
import { interpretesIdiomasProviders } from './interpretesIdiomas.providers';
import { idiomasProviders } from 'src/idiomas/idiomas.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterpretesIdiomasController],
  providers: [
    InterpretesIdiomasService,
    IdiomasService,
    ...interpretesIdiomasProviders,
    ...idiomasProviders
  ],
})
export class InterpretesIdiomasModule {}