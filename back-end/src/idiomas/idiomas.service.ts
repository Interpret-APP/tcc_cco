import { Injectable, Inject } from '@nestjs/common';
import { Idioma } from './idioma.entity';


@Injectable()
export class IdiomasService {
  constructor(
    @Inject('IDIOMAS_REPOSITORY')
    private readonly idiomasRepository: typeof Idioma
  ) {}

  async findAll(): Promise<Idioma[]> {
    return this.idiomasRepository.findAll<Idioma>();
  }

  async createIdioma(idioma: any): Promise<Idioma> {
    return this.idiomasRepository.create<Idioma>(idioma);
  }
}