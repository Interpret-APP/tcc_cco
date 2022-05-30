import * as dotenv from 'dotenv';

dotenv.config({path: __dirname+'/.env'});

export const jwtContants = {
    usuariosSecret: process.env.JWT_USUARIOS_SECRET
};