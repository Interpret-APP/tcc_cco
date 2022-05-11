import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}    

  @Post()
    async createUsuario(@Res() response, @Body() usuario: Usuario) {
        const newUsuario = await this.usuarioService.createUsuario(usuario);
        return response.status(HttpStatus.CREATED).json({
            newUsuario
        })
    }  

  @Get()
  getHello(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }
}