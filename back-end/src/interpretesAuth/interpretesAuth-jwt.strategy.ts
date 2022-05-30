import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtContants } from './interpretesAuth.constansts';

@Injectable()
export class InterpretesJwtStrategy extends PassportStrategy(Strategy, 'interpretesJwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtContants.interpretesSecret
        });
    }

    async validate(payload: any) {
        // TODO - adicionar qualquer campo que deve ser exposto no req.user
        return {
            username: payload.username,
            userId: payload.sub
        };
    }
}

