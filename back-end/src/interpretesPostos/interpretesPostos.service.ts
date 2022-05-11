import { Injectable, Inject } from '@nestjs/common';
import { InterpretePosto } from './interpretePosto.entity';


@Injectable()
export class InterpretesPostosService {
  constructor(
    @Inject('INTERPRETESPOSTOS_REPOSITORY')
    private readonly interpretesPostosRepository: typeof InterpretePosto
  ) {}

  async findAll(): Promise<InterpretePosto[]> {
    return this.interpretesPostosRepository.findAll<InterpretePosto>();
  }

  async createInterpretePosto(interpretePosto: any): Promise<InterpretePosto> {
    return this.interpretesPostosRepository.create<InterpretePosto>(interpretePosto);
  }
}