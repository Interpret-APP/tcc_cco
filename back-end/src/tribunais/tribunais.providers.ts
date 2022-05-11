import { Tribunal } from './tribunal.entity';

export const tribunaisProviders = [
  {
    provide: 'TRIBUNAIS_REPOSITORY',
    useValue: Tribunal,
  },
];