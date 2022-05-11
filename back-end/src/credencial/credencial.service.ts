import { Injectable, Inject } from '@nestjs/common';
import { Credencial } from './credencial.entity';


@Injectable()
export class CredenciaisService {
  constructor(
    @Inject('CREDENCIAIS_REPOSITORY')
    private readonly credenciaisRepository: typeof Credencial
  ) {}

  async findAll(): Promise<Credencial[]> {
    return this.credenciaisRepository.findAll<Credencial>();
  }

  async createCredencial(credencial: any): Promise<Credencial> {
    return this.credenciaisRepository.create<Credencial>(credencial);
  }
}