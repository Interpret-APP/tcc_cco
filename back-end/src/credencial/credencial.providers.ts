import { Credencial } from './credencial.entity';

export const credenciaisProviders = [
  {
    provide: 'CREDENCIAIS_REPOSITORY',
    useValue: Credencial,
  },
];