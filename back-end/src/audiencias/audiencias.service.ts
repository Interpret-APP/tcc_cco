import { Injectable, Inject } from '@nestjs/common';
import { Audiencia } from './audiencia.entity';


@Injectable()
export class AudienciasService {
  constructor(
    @Inject('AUDIENCIAS_REPOSITORY')
    private readonly audienciasRepository: typeof Audiencia
  ) {}

  async findAll(): Promise<Audiencia[]> {
    return this.audienciasRepository.findAll<Audiencia>();
  }

  async createAudiencia(audiencia: any): Promise<Audiencia> {
    return this.audienciasRepository.create<Audiencia>(audiencia);
  }
}