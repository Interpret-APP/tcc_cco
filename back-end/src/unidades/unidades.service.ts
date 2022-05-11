import { Injectable, Inject } from '@nestjs/common';
import { Unidade } from './unidade.entity';


@Injectable()
export class UnidadesService {
  constructor(
    @Inject('UNIDADES_REPOSITORY')
    private readonly unidadesRepository: typeof Unidade
  ) {}

  async findAll(): Promise<Unidade[]> {
    return this.unidadesRepository.findAll<Unidade>();
  }

  async createUnidade(unidade: any): Promise<Unidade> {
    return this.unidadesRepository.create<Unidade>(unidade);
  }
}