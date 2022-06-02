import { Controller, Get, Post, Res, HttpStatus, Body, UseGuards, Put, Delete, Param } from '@nestjs/common';
import { PostosService } from './postos.service';
import { Posto } from './posto.entity';
import { UsuariosJwtAuthGuard } from 'src/usuariosAuth/usuariosAuth-jwt-auth.guard';

@Controller('postos')
export class PostosController {
  constructor(private readonly postoService: PostosService) {}    

  @UseGuards(UsuariosJwtAuthGuard)
  @Post()
  async createPosto(@Res() response, @Body() posto: Posto) {
    const newPosto = await this.postoService.createPosto(posto);
    return response.status(HttpStatus.CREATED).json(newPosto);
  }  

  @UseGuards(UsuariosJwtAuthGuard)
  @Put(':postoId')
  async updatePosto(
    @Res() response,
    @Body() posto: Posto,
    @Param('postoId') postoId: string
  ) {
    await this.postoService.updatePosto(postoId, posto);
    const postoUpdated = await this.postoService.findById(postoId)

    return response.status(HttpStatus.OK).json(postoUpdated);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Delete(':postoId')
  async deletePosto(
    @Res() response,
    @Param('postoId') postoId: string
  ) {
    await this.postoService.deletePostoById(postoId);

    return response.status(HttpStatus.OK).json({});
  }
}