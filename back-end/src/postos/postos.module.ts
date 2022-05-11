import { Module } from '@nestjs/common';
import { PostosController } from './postos.controller';
import { PostosService } from './postos.service';
import { postosProviders } from './postos.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PostosController],
  providers: [
    PostosService,
    ...postosProviders,
  ],
})
export class PostosModule {}