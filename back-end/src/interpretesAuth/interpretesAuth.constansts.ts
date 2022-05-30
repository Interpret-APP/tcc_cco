import * as dotenv from 'dotenv';

dotenv.config({path: __dirname+'/.env'});

export const jwtContants = {
    interpretesSecret: process.env.JWT_INTERPRETES_SECRET
};