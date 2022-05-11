import { Idioma } from './idioma.entity';

export const idiomasProviders = [
  {
    provide: 'IDIOMAS_REPOSITORY',
    useValue: Idioma,
  },
];