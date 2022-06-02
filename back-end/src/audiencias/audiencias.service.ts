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

  async getUnidadeAudiencias(unidadeId: string, offset: number, limit: number) {
    offset = isNaN(offset) || offset < 0 ? 0 : offset;
    limit = isNaN(limit) || limit < 0 || limit > 10 ? 10 : limit;
    
    return this.audienciasRepository.findAndCountAll({
      where: { unidadeId },
      offset,
      limit
    });
  }

  async findById(audienciaId: string): Promise<Audiencia> {
    return this.audienciasRepository.findOne<Audiencia>(
      {where: {
        audienciaId
      }}
    );
  }

  async updateAudiencia(audienciaId: string, audiencia: any) {
    return this.audienciasRepository.update(
      audiencia,
      {where: {
        audienciaId
      }}
    );
  }

  async deleteAudienciaById(audienciaId: string) {
    return this.audienciasRepository.update(
      { audienciaCancelada: true },
      {where: {
        audienciaId,
        audienciaCancelada: false
      }}
    );
  }
}