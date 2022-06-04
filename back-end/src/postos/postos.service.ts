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

  async findById(postoId: string): Promise<Posto> {
    return this.postosRepository.findOne<Posto>(
      {where: {
        postoId
      }}
    );
  }

  async updatePosto(postoId: string, posto: any) {
    return this.postosRepository.update(
      posto,
      {where: {
        postoId
      }}
    );
  }

  async deletePostoById(postoId: string) {
    return this.postosRepository.update(
      { postoCancelado: true },
      {where: {
        postoId,
        postoCancelado: false
      }}
    );
  }
}