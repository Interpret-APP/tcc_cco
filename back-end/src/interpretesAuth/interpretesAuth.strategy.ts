import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InterpretesAuthService } from "./interpretesAuth.service";

@Injectable()
export class IntepretesStrategy extends PassportStrategy(Strategy, 'interpretesLocal') {
    constructor(private authService: InterpretesAuthService) {
        super({usernameField: 'cpf'});
    }

    async validate(interpreteCpf: string, senha: string): Promise<any> {
        const interprete = await this.authService.validateInterprete(interpreteCpf, senha);

        if(!interprete) { throw new UnauthorizedException(); }

        return interprete;
    }
}


