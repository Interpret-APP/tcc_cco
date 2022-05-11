import { Module } from '@nestjs/common';
import { InterpretesPostosController } from './interpretesPostos.controller';
import { InterpretesPostosService } from './interpretesPostos.service';
import { interpretesPostosProviders } from './interpretesPostos.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InterpretesPostosController],
  providers: [
    InterpretesPostosService,
    ...interpretesPostosProviders,
  ],
})
export class InterpretesPostosModule {}