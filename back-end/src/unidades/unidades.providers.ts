import { Unidade } from './unidade.entity';

export const unidadesProviders = [
  {
    provide: 'UNIDADES_REPOSITORY',
    useValue: Unidade,
  },
];