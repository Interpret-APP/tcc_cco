import { Module } from '@nestjs/common';
import { TribunaisController } from './tribunais.controller';
import { TribunaisService } from './tribunais.service';
import { tribunaisProviders } from './tribunais.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TribunaisController],
  providers: [
    TribunaisService,
    ...tribunaisProviders,
  ],
})
export class TribunaisModule {}