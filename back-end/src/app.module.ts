import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

/**
 * Módulo teste
 */
import { CatsModule } from './cats/cats.module';

/**
 * Módulos de relações 0,N - 1,1
 */
import { AudienciasModule } from './audiencias/audiencias.module';
import { CertificadorasModule } from './certificadoras/certificadoras.module';
import { CredenciaisModule } from './credencial/credencial.module';
import { IdiomasModule } from './idiomas/idiomas.module';
import { InterpretesModule } from './interpretes/interpretes.module';
import { PaisesModule } from './paises/paises.module';
import { PostosModule } from './postos/postos.module';
import { TribunaisModule } from './tribunais/tribunais.module';
import { UnidadesModule } from './unidades/unidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import * as Joi from 'joi';

/**
 * Módulos de relações 0,N - 0,N]
 */
import { InterpretesIdiomasModule } from './interpretesIdiomas/interpretesIdiomas.module';
import { InterpretesPostosModule } from './interpretesPostos/interpretesPostos.module';
import { AudienciasIdiomasModule } from './audienciasIdiomas/audienciasIdiomas.module';
import { AuthModule } from './usuariosAuth/usuariosAuth.module';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: Joi.object({
      NODE_ENV: Joi.string()
        .valid('dev', 'prod')
        .default('dev')                
    })
  }), CatsModule, AudienciasModule, CredenciaisModule, 
  TribunaisModule, IdiomasModule, InterpretesModule, 
  CertificadorasModule, UnidadesModule, PaisesModule,
  PostosModule, UsuariosModule, InterpretesIdiomasModule,
  InterpretesPostosModule, AudienciasIdiomasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
