import { Injectable, Inject } from '@nestjs/common';
import { Interprete } from './interprete.entity';


@Injectable()
export class InterpretesService {
  constructor(
    @Inject('INTERPRETES_REPOSITORY')
    private readonly interpretesRepository: typeof Interprete
  ) {}

  async findAll(): Promise<Interprete[]> {
    return this.interpretesRepository.findAll<Interprete>();
  }

  async createInterprete(interprete: any): Promise<Interprete> {
    return this.interpretesRepository.create<Interprete>(interprete);
  }
}