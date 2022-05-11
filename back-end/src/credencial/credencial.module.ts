import { Module } from '@nestjs/common';
import { CredenciaisController } from './credencial.controller';
import { CredenciaisService } from './credencial.service';
import { credenciaisProviders } from './credencial.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CredenciaisController],
  providers: [
    CredenciaisService,
    ...credenciaisProviders,
  ],
})
export class CredenciaisModule {}