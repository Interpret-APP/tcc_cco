import { Module } from '@nestjs/common';
import { InterpretesController } from './interpretes.controller';
import { InterpretesService } from './interpretes.service';
import { InterpretesIdiomasService } from '../interpretesIdiomas/interpretesIdiomas.service';
import { IdiomasService } from '../idiomas/idiomas.service';
import { interpretesProviders } from './interpretes.providers';
import { idiomasProviders } from '../idiomas/idiomas.providers';
import { credenciaisProviders } from '../credencial/credencial.providers';
import { interpretesIdiomasProviders } from 'src/interpretesIdiomas/interpretesIdiomas.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterpretesController],
  providers: [
    InterpretesService,
    InterpretesIdiomasService,
    IdiomasService,
    ...interpretesProviders,
    ...idiomasProviders,
    ...credenciaisProviders,
    ...interpretesIdiomasProviders
  ],
  exports: [InterpretesService]
})
export class InterpretesModule {}