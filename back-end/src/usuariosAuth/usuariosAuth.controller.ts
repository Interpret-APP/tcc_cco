import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './usuariosAuth.service';
import { UsuariosAuthGuard } from './usuariosAuth.guard';
import { UsuariosJwtAuthGuard } from './usuariosAuth-jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(UsuariosAuthGuard)
    @Post('usuarios')
    async login (@Request() req) {
        return this.authService.loginUsuario(req.user);
    }

    @UseGuards(UsuariosJwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return req.user;
    }
}
