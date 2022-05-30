import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class UsuariosStrategy extends PassportStrategy(Strategy, 'usuarios') {
    constructor(private authService: AuthService) {
        super({usernameField: 'cpf'});
    }

    async validate(usuarioCpf: string, senha: string): Promise<any> {
        const usuario = await this.authService.validateUsuario(usuarioCpf, senha);

        if(!usuario) { throw new UnauthorizedException(); }

        return usuario;
    }
}


