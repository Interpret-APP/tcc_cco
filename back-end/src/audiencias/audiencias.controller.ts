import { Controller, Get, Post, Res, HttpStatus, Body, UseGuards, Param, Query, Put, Delete } from '@nestjs/common';
import { AudienciasService } from './audiencias.service';
import { Audiencia } from './audiencia.entity';
import { UsuariosJwtAuthGuard } from 'src/usuariosAuth/usuariosAuth-jwt-auth.guard'; 

@Controller()
export class AudienciasController {
  constructor(private readonly audienciaService: AudienciasService) {}    

  @UseGuards(UsuariosJwtAuthGuard)
  @Post('audiencias')
  async createAudiencia(@Res() response, @Body() audiencia: Audiencia) {
    const newAudiencia = await this.audienciaService.createAudiencia(audiencia);
    return response.status(HttpStatus.CREATED).json(newAudiencia);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Get('unidades/:unidadeId/audiencias')
  getUnidadeAudiencias(@Param('unidadeId') unidadeId: string, @Query() queryObj: object){
    const offset: number = queryObj['offeset'];
    const limit: number = queryObj['limit'];

    return this.audienciaService.getUnidadeAudiencias(unidadeId, offset, limit);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Get('audiencias/:audienciaId')
  getAudienciaById(@Param('audienciaId') audienciaId: string): Promise<Audiencia>{
    return this.audienciaService.findById(audienciaId);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Put('audiencias/:audienciaId')
  async updateAudiencia(
    @Res() response,
    @Body() audiencia: Audiencia,
    @Param('audienciaId') audienciaId: string
  ) {
    await this.audienciaService.updateAudiencia(audienciaId, audiencia);
    const audienciaUpdated = await this.audienciaService.findById(audienciaId)

    return response.status(HttpStatus.OK).json(audienciaUpdated);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Delete('audiencias/:audienciaId')
  async deleteAudiencia(
    @Res() response,
    @Param('audienciaId') audienciaId: string
  ) {
    await this.audienciaService.deleteAudienciaById(audienciaId);

    return response.status(HttpStatus.OK).json({});
  }
}