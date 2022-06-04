import { Controller, Get, Post, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { Interprete } from './interprete.entity';
//import { CatDto } from './dto/create-cat.dto';

@Controller()
export class InterpretesController {
  constructor(private readonly interpreteService: InterpretesService) {}

  @Post('interpretes')
  async createInterprete(@Res() response, @Body() interprete: Interprete) {
    const newInterprete = await this.interpreteService.createInterprete(interprete);

    return response.status(HttpStatus.CREATED).json({
      newInterprete
    })
  }

  @Get('interpretes')
  getAll(): Promise<Interprete[]> {
    return this.interpreteService.findAll();
  }

  @Get('interpretes/:cpf')
  async getInterpreteByCPF(@Res() response, @Param() param) {
    let foundInterprete = await this.interpreteService.findOne(param.cpf);

    return response.status(HttpStatus.CREATED).json({
      foundInterprete
    })
  }
}