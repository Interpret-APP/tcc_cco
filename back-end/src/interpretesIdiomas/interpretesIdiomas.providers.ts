import { InterpreteIdioma } from './interpreteIdioma.entity';

export const interpretesIdiomasProviders = [
  {
    provide: 'INTERPRETESIDIOMAS_REPOSITORY',
    useValue: InterpreteIdioma,
  },
];