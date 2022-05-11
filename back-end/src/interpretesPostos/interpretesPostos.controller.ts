import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { InterpretesPostosService } from './interpretesPostos.service';
import { InterpretePosto } from './interpretePosto.entity';

@Controller('interpretes_postos')
export class InterpretesPostosController {
  constructor(private readonly interpretePostoService: InterpretesPostosService) {}    

  @Post()
    async createInterpretePosto(@Res() response, @Body() interpretePosto: InterpretePosto) {
        const newInterpretePosto = await this.interpretePostoService.createInterpretePosto(interpretePosto);
        return response.status(HttpStatus.CREATED).json({
            newInterpretePosto
        })
    }  

  @Get()
  getHello(): Promise<InterpretePosto[]> {
    return this.interpretePostoService.findAll();
  }
}