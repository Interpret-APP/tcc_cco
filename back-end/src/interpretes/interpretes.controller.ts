import { Controller, Get, Post, Res, HttpStatus, Body, Param, Query, UseGuards, Delete, Put } from '@nestjs/common';
import { InterpretesService } from './interpretes.service';
import { Interprete } from './interprete.entity';
import { UsuariosJwtAuthGuard } from 'src/usuariosAuth/usuariosAuth-jwt-auth.guard';

@Controller()
export class InterpretesController {
  constructor(private readonly interpreteService: InterpretesService) {}

  @Post('interpretes/registrar')
  async createInterprete(@Res() response, @Body() interprete: Interprete) {
    const idiomas = interprete.idiomas;
    const certificados = interprete.certificados;
    //implementar o salvamento da foto
    const newInterprete = await this.interpreteService.createInterprete(interprete, idiomas, certificados);

    return response.status(HttpStatus.CREATED).json(newInterprete)
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Get('interpretes')
  getInterpretes(@Query() queryObj: object){
    const offset: number = queryObj['offset'];
    const limit: number = queryObj['limit'];
    //parametros de busca: query string

    return this.interpreteService.getInterpretes(offset, limit);
  }

  @Delete('interpretes/:interpreteCpf')
  async deleteInterprete(@Res() response, @Param('interpreteCpf') interpreteCpf: string) {
    await this.interpreteService.deleteInterprete(interpreteCpf);
    return response.status(HttpStatus.OK).json({});
  }

  @Get('interpretes/:cpf')
  async getInterpreteByCPF(@Res() response, @Param('cpf') interpreteCpf: string) {
    let foundInterprete = await this.interpreteService.getInterpreteByCPF(interpreteCpf);

    return response.status(HttpStatus.CREATED).json(foundInterprete)
  }

  @Put('interpretes/:interpreteCpf')
  async updateInterprete(@Res() response, @Body() interprete: Interprete, @Param('interpreteCpf') interpreteCpf: string) {
    await this.interpreteService.updateInterprete(interpreteCpf, interprete);
    const interpreteUpdated = await this.interpreteService.getInterpreteByCPF(interpreteCpf)

    return response.status(HttpStatus.OK).json(interpreteUpdated);
  }
}