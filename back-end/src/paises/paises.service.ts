import { Injectable, Inject } from '@nestjs/common';
import { Pais } from './pais.entity';


@Injectable()
export class PaisesService {
  constructor(
    @Inject('PAISES_REPOSITORY')
    private readonly paisesRepository: typeof Pais
  ) {}

  async findAll(): Promise<Pais[]> {
    return this.paisesRepository.findAll<Pais>();
  }

  async createPais(pais: any): Promise<Pais> {
    return this.paisesRepository.create<Pais>(pais);
  }
}