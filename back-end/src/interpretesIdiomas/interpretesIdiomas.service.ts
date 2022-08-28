import { Injectable, Inject } from '@nestjs/common';
import { InterpreteIdioma } from './interpreteIdioma.entity';
import { IdiomasService } from '../idiomas/idiomas.service';


@Injectable()
export class InterpretesIdiomasService {
  constructor(
    @Inject('INTERPRETESIDIOMAS_REPOSITORY')
    private readonly interpretesIdiomasRepository: typeof InterpreteIdioma,
    private readonly idiomasService: IdiomasService
  ) {}

  async findAll(): Promise<InterpreteIdioma[]> {
    return this.interpretesIdiomasRepository.findAll<InterpreteIdioma>();
  }

  async createInterpreteIdioma(interpreteIdioma: any, cpf: string): Promise<InterpreteIdioma> {
    let idiomaDe = interpreteIdioma.idiomaNome;
    idiomaDe = await this.idiomasService.findOrCreateIdioma(idiomaDe);
    return this.interpretesIdiomasRepository.create<InterpreteIdioma>({
      interpreteIdiomaNativo: interpreteIdioma.interpreteIdiomaNativo,
      interpreteIdiomaPara: interpreteIdioma.interpreteIdiomaPara,
      interpreteCpf: cpf,
      idiomaId: idiomaDe[0].dataValues.idiomaId
    });
  }

  // async getInterpreteIdiomaByCpf(interpreteCpf: string): Promise<InterpreteIdioma[]> {
  //   return this.interpretesIdiomasRepository.findAll<InterpreteIdioma>({where: {interpreteCpf: interpreteCpf}});
  // }
}