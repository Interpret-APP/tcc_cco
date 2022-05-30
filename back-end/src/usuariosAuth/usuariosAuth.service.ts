import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
    ) {}

    async validateUsuario(usuarioCpf: string, senha: string): Promise<any> {
        const usuario = await (await this.usuariosService.findByCpf(usuarioCpf)).get({plain: true});
        
        if (!usuario) { return null; }
        if (usuario.usuarioSenha != senha) { return null; }

        // removendo a senha do obj de resposta
        const { usuarioSenha, ...resposta } = usuario;
        return resposta;
    }

    async loginUsuario(user: any) {
        // TODO - adicionar qualquer campo que deve ser exposto no req.user
        const payload = {
            username: user.usuarioCpf,
            sub: user.usuarioCpf
        };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
