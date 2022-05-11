import { Certificadora } from './certificadora.entity';

export const certificadorasProviders = [
  {
    provide: 'CERTIFICADORAS_REPOSITORY',
    useValue: Certificadora
  },
];