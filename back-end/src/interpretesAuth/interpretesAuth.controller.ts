import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { InterpretesAuthService } from './interpretesAuth.service';
import { InterpretesAuthGuard } from './interpretesAuth.guard';
import { InterpretesJwtAuthGuard } from './interpretesAuth-jwt-auth.guard';

@Controller('auth/interpretes')
export class InterpretesAuthController {
    constructor(
        private authService: InterpretesAuthService
    ) {}

    @UseGuards(InterpretesAuthGuard)
    @Post('token')
    async login (@Request() req) {
        return this.authService.loginInterprete(req.user);
    }

    @UseGuards(InterpretesJwtAuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        return req.user;
    }
}
