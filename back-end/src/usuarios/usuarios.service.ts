import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private readonly usuariosRepository: typeof Usuario
  ) {}

  async findAll(offset: number, limit: number, whereObj: any) {
    offset = isNaN(offset) || offset < 0 ? 0 : offset;
    limit = isNaN(limit) || limit < 0 || limit > 10 ? 10 : limit;
    
    return this.usuariosRepository.findAndCountAll({
      where: whereObj,
      offset,
      limit
    });
  }

  async createUsuario(usuario: any): Promise<Usuario> {
    return this.usuariosRepository.create<Usuario>(usuario);
  }

  async findByCpf(usuarioCpf: string): Promise<Usuario> {
    return this.usuariosRepository.findOne<Usuario>({where: {usuarioCpf}});
  }
}