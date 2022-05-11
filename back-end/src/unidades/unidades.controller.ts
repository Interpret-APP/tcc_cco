import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidade } from './unidade.entity';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadeService: UnidadesService) {}    

  @Post()
    async createUnidade(@Res() response, @Body() unidade: Unidade) {
        const newUnidade = await this.unidadeService.createUnidade(unidade);
        return response.status(HttpStatus.CREATED).json({
            newUnidade
        })
    }  

  @Get()
  getHello(): Promise<Unidade[]> {
    return this.unidadeService.findAll();
  }
}