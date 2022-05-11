import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CertificadorasService } from './certificadoras.service';
import { Certificadora } from './certificadora.entity';

@Controller('certificadoras')
export class CertificadorasController {
  constructor(private readonly certificadoraService: CertificadorasService) {}    

  @Post()
    async createCertificadora(@Res() response, @Body() certificadora: Certificadora) {
        const newCertificadora = await this.certificadoraService.createCertificadora(certificadora);
        return response.status(HttpStatus.CREATED).json({
            newCertificadora
        })
    }  

  @Get()
  getHello(): Promise<Certificadora[]> {
    return this.certificadoraService.findAll();
  }
}