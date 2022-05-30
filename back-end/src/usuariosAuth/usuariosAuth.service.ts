import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { InterpretesService } from 'src/interpretes/interpretes.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private interpretesService: InterpretesService,
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

    async validateInterprete(interpreteCpf: string, senha: string): Promise<any> {
        const interprete = await this.interpretesService.findByCpf(interpreteCpf)

        if (!interprete) { return null; }
        if (interprete.interpreteSenha != senha) { return null; }

        // removendo a senha do obj de resposta
        const { interpreteSenha, ...resposta } = interprete;
        return resposta;
    }
}
