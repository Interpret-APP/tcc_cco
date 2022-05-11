import { Usuario } from './usuario.entity';

export const usuariosProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useValue: Usuario,
  },
];