import { Pais } from './pais.entity';

export const paisesProviders = [
  {
    provide: 'PAISES_REPOSITORY',
    useValue: Pais,
  },
];