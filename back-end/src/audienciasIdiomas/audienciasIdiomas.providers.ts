import { AudienciaIdioma } from './audienciaIdioma.entity';

export const audienciasIdiomasProviders = [
  {
    provide: 'AUDIENCIASIDIOMAS_REPOSITORY',
    useValue: AudienciaIdioma,
  },
];