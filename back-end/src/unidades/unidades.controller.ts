import { Controller, Get, Post, Res, HttpStatus, Body, UseGuards, Query, Param, Put, Delete } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidade } from './unidade.entity';
import { UsuariosJwtAuthGuard } from 'src/usuariosAuth/usuariosAuth-jwt-auth.guard';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadeService: UnidadesService) {}    

  @UseGuards(UsuariosJwtAuthGuard)
  @Post()
  async createUnidade(@Res() response, @Body() unidade: Unidade) {
      const newUnidade = await this.unidadeService.createUnidade(unidade);
      return response.status(HttpStatus.CREATED).json(newUnidade)
  }  

  @UseGuards(UsuariosJwtAuthGuard)
  @Get()
  getUnidades(@Query() queryObj: object){
    const offset: number = queryObj['offeset'];
    const limit: number = queryObj['limit'];
    
    // front-end can query by literally 'any' attribute in entity 'Usuario'
    const {...whereObj} = queryObj;
    delete whereObj['offset'];
    delete whereObj['limit']; 

    return this.unidadeService.findAll(queryObj['offset'], queryObj['limit'], whereObj);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Get(':unidadeId')
  getUnidadeById(@Param('unidadeId') unidadeId: string): Promise<Unidade>{
    return this.unidadeService.findById(unidadeId);
  }
  
  @UseGuards(UsuariosJwtAuthGuard)
  @Put(':unidadeId')
  async updateUnidade(
    @Res() response,
    @Body() unidade: Unidade,
    @Param('unidadeId') unidadeId: string
  ) {
    await this.unidadeService.updateUnidade(unidadeId, unidade);
    const unidadeUpdated = await this.unidadeService.findById(unidadeId)

    return response.status(HttpStatus.OK).json(unidadeUpdated);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Delete(':unidadeId')
  async deleteUnidade(
    @Res() response,
    @Param('unidadeId') unidadeId: string
  ) {
    await this.unidadeService.deleteUnidadeById(unidadeId);

    return response.status(HttpStatus.OK).json({});
  }
}