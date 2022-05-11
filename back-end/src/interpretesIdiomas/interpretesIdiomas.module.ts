import { Module } from '@nestjs/common';
import { InterpretesIdiomasController } from './interpretesIdiomas.controller';
import { InterpretesIdiomasService } from './interpretesIdiomas.service';
import { interpretesIdiomasProviders } from './interpretesIdiomas.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterpretesIdiomasController],
  providers: [
    InterpretesIdiomasService,
    ...interpretesIdiomasProviders,
  ],
})
export class InterpretesIdiomasModule {}