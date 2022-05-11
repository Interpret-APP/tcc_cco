import { Injectable, Inject } from '@nestjs/common';
import { InterpreteIdioma } from './interpreteIdioma.entity';


@Injectable()
export class InterpretesIdiomasService {
  constructor(
    @Inject('INTERPRETESIDIOMAS_REPOSITORY')
    private readonly interpretesIdiomasRepository: typeof InterpreteIdioma
  ) {}

  async findAll(): Promise<InterpreteIdioma[]> {
    return this.interpretesIdiomasRepository.findAll<InterpreteIdioma>();
  }

  async createInterpreteIdioma(interpreteIdioma: any): Promise<InterpreteIdioma> {
    return this.interpretesIdiomasRepository.create<InterpreteIdioma>(interpreteIdioma);
  }
}