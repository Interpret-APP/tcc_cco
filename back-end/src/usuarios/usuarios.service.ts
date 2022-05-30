import { Injectable, Inject } from '@nestjs/common';
import { Usuario } from './usuario.entity';


@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIOS_REPOSITORY')
    private readonly usuariosRepository: typeof Usuario
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.findAll<Usuario>();
  }

  async createUsuario(usuario: any): Promise<Usuario> {
    return this.usuariosRepository.create<Usuario>(usuario);
  }

  async findByCpf(usuarioCpf: string): Promise<Usuario> {
    return this.usuariosRepository.findOne<Usuario>({where: {usuarioCpf}});
  }
}