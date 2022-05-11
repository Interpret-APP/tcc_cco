import { Audiencia } from './audiencia.entity';

export const audienciasProviders = [
  {
    provide: 'AUDIENCIAS_REPOSITORY',
    useValue: Audiencia,
  },
];