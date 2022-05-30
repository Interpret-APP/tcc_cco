import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, PayloadTooLargeException } from '@nestjs/common';
import { jwtContants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtContants.secret
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

