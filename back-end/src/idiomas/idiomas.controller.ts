import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { IdiomasService } from './idiomas.service';
import { Idioma } from './idioma.entity';
//import { CatDto } from './dto/create-cat.dto';

@Controller('idiomas')
export class IdiomasController {
  constructor(private readonly idiomaService: IdiomasService) {}    

  @Post()
    async createIdioma(@Res() response, @Body() idioma: Idioma) {
        const newIdioma = await this.idiomaService.createIdioma(idioma);
        return response.status(HttpStatus.CREATED).json({
            newIdioma
        })
    }  

  @Get()
  getHello(): Promise<Idioma[]> {
    return this.idiomaService.findAll();
  }
}