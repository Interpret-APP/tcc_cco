import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtContants } from './usuariosAuth.constants';

@Injectable()
export class UsuariosJwtStrategy extends PassportStrategy(Strategy, 'usuariosJwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtContants.usuariosSecret
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

