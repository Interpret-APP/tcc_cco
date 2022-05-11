import { Module } from '@nestjs/common';
import { InterpretesController } from './interpretes.controller';
import { InterpretesService } from './interpretes.service';
import { interpretesProviders } from './interpretes.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterpretesController],
  providers: [
    InterpretesService,
    ...interpretesProviders,
  ],
})
export class InterpretesModule {}