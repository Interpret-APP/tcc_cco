import { InterpretePosto } from './interpretePosto.entity';

export const interpretesPostosProviders = [
  {
    provide: 'INTERPRETESPOSTOS_REPOSITORY',
    useValue: InterpretePosto,
  },
];