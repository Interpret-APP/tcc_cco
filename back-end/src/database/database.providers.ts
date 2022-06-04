import { Sequelize } from 'sequelize-typescript';

/**
 * Entidade teste
 */
import { Cat } from '../cats/cat.entity';

/**
 * Entidades de relações 0,N - 1,1
 */
import { Interprete } from '../interpretes/interprete.entity';
import { Idioma } from '../idiomas/idioma.entity';
import { Audiencia } from 'src/audiencias/audiencia.entity';
import { Certificadora } from 'src/certificadoras/certificadora.entity';
import { Credencial } from 'src/credencial/credencial.entity';
import { Pais } from 'src/paises/pais.entity';
import { Posto } from 'src/postos/posto.entity';
import { Tribunal } from 'src/tribunais/tribunal.entity';
import { Unidade } from 'src/unidades/unidade.entity';
import { Usuario } from 'src/usuarios/usuario.entity';

import * as dotenv from 'dotenv';

/**
 * Entidades de relações 0,N - 0,N]
 */
import { InterpreteIdioma } from '../interpretesIdiomas/interpreteIdioma.entity';
import { AudienciaIdioma } from 'src/audienciasIdiomas/audienciaIdioma.entity';
import { InterpretePosto } from 'src/interpretesPostos/interpretePosto.entity';

dotenv.config({path: __dirname+'/.env'});


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            if(process.env.NODE_ENV == 'dev'){
                const sequelize = new Sequelize({
                    dialect: 'postgres',
                    host: 'localhost',
                    port: 5432,
                    username: 'postgres',
                    password: '08700201',
                    database: 'postgres',
                });
                sequelize.addModels([Audiencia, AudienciaIdioma, Cat, Certificadora, Credencial, Idioma, Interprete, InterpreteIdioma, InterpretePosto, Pais, Posto, Tribunal, Unidade, Usuario]);
                await sequelize.sync();
                return sequelize;
            } else if(process.env.NODE_ENV == 'prod') {
                const sequelize = new Sequelize(process.env.DATABASE_URL, {
                    dialectOptions: {
                        ssl: {
                            require: true,
                            rejectUnauthorized: false,
                        },
                    },
                });
                sequelize
                    .authenticate()
                    .then(() => {
                        console.log('Connection has been established successfully.');
                    })
                sequelize.addModels([Audiencia, AudienciaIdioma, Cat, Certificadora, Credencial, Idioma, Interprete, InterpreteIdioma, InterpretePosto, Pais, Posto, Tribunal, Unidade, Usuario]);
                await sequelize.sync();
                return sequelize;
            }
        },
    },
];

