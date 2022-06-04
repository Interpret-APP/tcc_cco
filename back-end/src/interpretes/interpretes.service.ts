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

  async findOne(cpf: any) {
    let foundInterprete = await Interprete.findOne({ where: { interpreteCpf: cpf } });
    if (foundInterprete === null) { throw new Error('Usuário não encontrado.') }

    return foundInterprete;
  }

  async createInterprete(interprete: any): Promise<Interprete> {
    if (!interprete.interpreteCpf) { throw new Error('Usuário sem CPF.') }
    if (!interprete.interpreteNome) { throw new Error('Usuário sem nome.') }

    return this.interpretesRepository.create<Interprete>(interprete);
  }

  async findByCpf(interpreteCpf: string): Promise<Interprete> {
    return this.interpretesRepository.findOne<Interprete>({where: {interpreteCpf}});
  }
}