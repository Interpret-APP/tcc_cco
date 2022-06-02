import { Injectable, Inject } from '@nestjs/common';
import { Unidade } from './unidade.entity';


@Injectable()
export class UnidadesService {
  constructor(
    @Inject('UNIDADES_REPOSITORY')
    private readonly unidadesRepository: typeof Unidade
  ) {}

  async findAll(offset: number, limit: number, whereObj: any) {
    offset = isNaN(offset) || offset < 0 ? 0 : offset;
    limit = isNaN(limit) || limit < 0 || limit > 10 ? 10 : limit;
    
    whereObj.unidadeRemovida = false;

    return this.unidadesRepository.findAndCountAll({
      where: whereObj,
      offset,
      limit
    });
  }

  async createUnidade(unidade: any): Promise<Unidade> {
    return this.unidadesRepository.create<Unidade>(unidade);
  }

  async findById(unidadeId: string): Promise<Unidade> {
    return this.unidadesRepository.findOne<Unidade>(
      {where: {
        unidadeId,
        unidadeRemovida: false
      }}
    );
  }

  async updateUnidade(unidadeId: string, unidade: any) {
    return this.unidadesRepository.update(
      unidade,
      {where: {
        unidadeId,
        unidadeRemovida: false
      }}
    );
  }

  async deleteUnidadeById(unidadeId: string) {
    return this.unidadesRepository.update(
      { unidadeRemovida: true },
      {where: {
        unidadeId,
        unidadeRemovida: false
      }}
    );
  }
}