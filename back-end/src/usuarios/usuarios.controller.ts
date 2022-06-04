import { Controller, Get, Post, Res, HttpStatus, Body, UseGuards, Query, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { UsuariosJwtAuthGuard } from 'src/usuariosAuth/usuariosAuth-jwt-auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}    

  @UseGuards(UsuariosJwtAuthGuard)
  @Post('cadastrar')
  async createUsuario(@Res() response, @Body() usuario: Usuario) {
      const newUsuario = await this.usuarioService.createUsuario(usuario);
      return response.status(HttpStatus.CREATED).json(newUsuario)
  }  
  
  @UseGuards(UsuariosJwtAuthGuard)
  @Get()
  getUsuarios(@Query() queryObj: object){
    const offset: number = queryObj['offeset'];
    const limit: number = queryObj['limit'];
    
    // front-end can query by literally 'any' attribute in entity 'Usuario'
    const {...whereObj} = queryObj;
    delete whereObj['offset'];
    delete whereObj['limit']; 

    return this.usuarioService.findAll(queryObj['offset'], queryObj['limit'], whereObj);
  }

  @UseGuards(UsuariosJwtAuthGuard)
  @Get(':cpf')
  getUsuarioByCpf(@Param('cpf') cpf: string): Promise<Usuario>{
    return this.usuarioService.findByCpf(cpf);
  }
}