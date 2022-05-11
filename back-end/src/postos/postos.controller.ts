import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { PostosService } from './postos.service';
import { Posto } from './posto.entity';

@Controller('postos')
export class PostosController {
  constructor(private readonly postoService: PostosService) {}    

  @Post()
    async createPosto(@Res() response, @Body() posto: Posto) {
        const newPosto = await this.postoService.createPosto(posto);
        return response.status(HttpStatus.CREATED).json({
            newPosto
        })
    }  

  @Get()
  getHello(): Promise<Posto[]> {
    return this.postoService.findAll();
  }
}