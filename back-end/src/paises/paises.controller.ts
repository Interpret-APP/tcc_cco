import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { PaisesService } from './paises.service';
import { Pais } from './pais.entity';

@Controller('paises')
export class PaisesController {
  constructor(private readonly paisService: PaisesService) {}    

  @Post()
    async createPais(@Res() response, @Body() pais: Pais) {
        const newPais = await this.paisService.createPais(pais);
        return response.status(HttpStatus.CREATED).json({
            newPais
        })
    }  

  @Get()
  getHello(): Promise<Pais[]> {
    return this.paisService.findAll();
  }
}