import { Injectable, Inject } from '@nestjs/common';
import { Posto } from './posto.entity';


@Injectable()
export class PostosService {
  constructor(
    @Inject('POSTOS_REPOSITORY')
    private readonly postosRepository: typeof Posto
  ) {}

  async findAll(): Promise<Posto[]> {
    return this.postosRepository.findAll<Posto>();
  }

  async createPosto(posto: any): Promise<Posto> {
    return this.postosRepository.create<Posto>(posto);
  }
}