import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CredenciaisService } from './credencial.service';
import { Credencial } from './credencial.entity';

@Controller('credenciais')
export class CredenciaisController {
  constructor(private readonly credencialService: CredenciaisService) {}    

  @Post()
    async createCredencial(@Res() response, @Body() credencial: Credencial) {
        const newCredencial = await this.credencialService.createCredencial(credencial);
        return response.status(HttpStatus.CREATED).json({
            newCredencial
        })
    }  

  @Get()
  getHello(): Promise<Credencial[]> {
    return this.credencialService.findAll();
  }
}