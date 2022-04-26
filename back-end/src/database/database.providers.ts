import { Sequelize } from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';
import * as dotenv from 'dotenv';

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
            password: 'luccas1125947498',
            database: 'postgres',
            });
            sequelize.addModels([Cat]);
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
            sequelize.addModels([Cat]);          
            await sequelize.sync();
            return sequelize;
        }
    },
  },
];

