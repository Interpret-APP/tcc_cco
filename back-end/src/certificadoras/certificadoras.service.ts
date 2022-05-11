import { Injectable, Inject } from '@nestjs/common';
import { Certificadora } from './certificadora.entity';


@Injectable()
export class CertificadorasService {
  constructor(
    @Inject('CERTIFICADORAS_REPOSITORY')
    private readonly certificadorasRepository: typeof Certificadora
  ) {}

  async findAll(): Promise<Certificadora[]> {
    return this.certificadorasRepository.findAll<Certificadora>();
  }

  async createCertificadora(certificadora: any): Promise<Certificadora> {
    return this.certificadorasRepository.create<Certificadora>(certificadora);
  }
}