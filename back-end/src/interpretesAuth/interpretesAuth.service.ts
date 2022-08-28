import { Injectable } from '@nestjs/common';
import { InterpretesService } from 'src/interpretes/interpretes.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class InterpretesAuthService {
    constructor(
        private interpretesService: InterpretesService,
        private jwtService: JwtService
    ) {}

    async validateInterprete(interpreteCpf: string, senha: string): Promise<any> {
        const interprete = await (await this.interpretesService.getInterpreteByCPF(interpreteCpf)).get({plain: true});

        if (!interprete) { return null; }
        if (interprete.interpreteSenha != senha) { return null; }

        // removendo a senha do obj de resposta
        const { interpreteSenha, ...resposta } = interprete;
        return resposta;
    }

    async loginInterprete(user: any) {
        // TODO - adicionar qualquer campo que deve ser exposto no req.user
        const payload = {
            username: user.interpreteCpf,
            sub: user.interpreteCpf
        };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
