const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    development: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
    // TODO - staging
    test: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
    // TODO - prod
    production: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    },
 };