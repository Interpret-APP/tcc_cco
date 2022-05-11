import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { AudienciasIdiomasService } from './audienciasIdiomas.service';
import { AudienciaIdioma } from './audienciaIdioma.entity';

@Controller('audiencias_idiomas')
export class AudienciasIdiomasController {
  constructor(private readonly audienciaIdiomaService: AudienciasIdiomasService) {}    

  @Post()
    async createAudienciaIdioma(@Res() response, @Body() audienciaIdioma: AudienciaIdioma) {
        const newAudienciaIdioma = await this.audienciaIdiomaService.createAudienciaIdioma(audienciaIdioma);
        return response.status(HttpStatus.CREATED).json({
            newAudienciaIdioma
        })
    }  

  @Get()
  getHello(): Promise<AudienciaIdioma[]> {
    return this.audienciaIdiomaService.findAll();
  }
}