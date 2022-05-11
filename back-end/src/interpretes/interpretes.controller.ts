import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { Interprete } from './interprete.entity';
//import { CatDto } from './dto/create-cat.dto';

@Controller('interpretes')
export class InterpretesController {
  constructor(private readonly interpreteService: InterpretesService) {}    

  @Post()
    async createInterprete(@Res() response, @Body() interprete: Interprete) {
        const newInterprete = await this.interpreteService.createInterprete(interprete);
        return response.status(HttpStatus.CREATED).json({
            newInterprete
        })
    }  

  @Get()
  getHello(): Promise<Interprete[]> {
    return this.interpreteService.findAll();
  }
}