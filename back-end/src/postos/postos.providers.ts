import { Posto } from './posto.entity';

export const postosProviders = [
  {
    provide: 'POSTOS_REPOSITORY',
    useValue: Posto,
  },
];