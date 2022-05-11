import { Injectable, Inject } from '@nestjs/common';
import { AudienciaIdioma } from './audienciaIdioma.entity';


@Injectable()
export class AudienciasIdiomasService {
  constructor(
    @Inject('AUDIENCIASIDIOMAS_REPOSITORY')
    private readonly audienciasIdiomasRepository: typeof AudienciaIdioma
  ) {}

  async findAll(): Promise<AudienciaIdioma[]> {
    return this.audienciasIdiomasRepository.findAll<AudienciaIdioma>();
  }

  async createAudienciaIdioma(audienciaIdioma: any): Promise<AudienciaIdioma> {
    return this.audienciasIdiomasRepository.create<AudienciaIdioma>(audienciaIdioma);
  }
}