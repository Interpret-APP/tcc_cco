import { Interprete } from './interprete.entity';

export const interpretesProviders = [
  {
    provide: 'INTERPRETES_REPOSITORY',
    useValue: Interprete,
  },
];