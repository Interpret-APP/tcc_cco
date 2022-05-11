import { Module } from '@nestjs/common';
import { CertificadorasController } from './certificadoras.controller';
import { CertificadorasService } from './certificadoras.service';
import { certificadorasProviders } from './certificadoras.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CertificadorasController],
  providers: [
    CertificadorasService,
    ...certificadorasProviders,
  ],
})
export class CertificadorasModule {}