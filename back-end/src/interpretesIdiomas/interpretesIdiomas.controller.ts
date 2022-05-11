import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { InterpretesIdiomasService } from './interpretesIdiomas.service';
import { InterpreteIdioma } from './interpreteIdioma.entity';

@Controller('interpretes_idiomas')
export class InterpretesIdiomasController {
  constructor(private readonly interpreteIdiomaService: InterpretesIdiomasService) {}    

  @Post()
    async createInterpreteIdioma(@Res() response, @Body() interpreteIdioma: InterpreteIdioma) {
        const newInterpreteIdioma = await this.interpreteIdiomaService.createInterpreteIdioma(interpreteIdioma);
        return response.status(HttpStatus.CREATED).json({
            newInterpreteIdioma
        })
    }  

  @Get()
  getHello(): Promise<InterpreteIdioma[]> {
    return this.interpreteIdiomaService.findAll();
  }
}