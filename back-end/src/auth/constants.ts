import * as dotenv from 'dotenv';

dotenv.config({path: __dirname+'/.env'});

export const jwtContants = {
    secret: process.env.JWT_SECRET
};