import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { AudienciasService } from './audiencias.service';
import { Audiencia } from './audiencia.entity';

@Controller('audiencias')
export class AudienciasController {
  constructor(private readonly audienciaService: AudienciasService) {}    

  @Post()
    async createAudiencia(@Res() response, @Body() audiencia: Audiencia) {
        const newAudiencia = await this.audienciaService.createAudiencia(audiencia);
        return response.status(HttpStatus.CREATED).json({
            newAudiencia
        })
    }  

  @Get()
  getHello(): Promise<Audiencia[]> {
    return this.audienciaService.findAll();
  }
}