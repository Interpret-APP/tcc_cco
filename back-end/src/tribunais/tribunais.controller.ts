import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { TribunaisService } from './tribunais.service';
import { Tribunal } from './tribunal.entity';

@Controller('tribunais')
export class TribunaisController {
  constructor(private readonly tribunalService: TribunaisService) {}    

  @Post()
    async createTribunal(@Res() response, @Body() tribunal: Tribunal) {
        const newTribunal = await this.tribunalService.createTribunal(tribunal);
        return response.status(HttpStatus.CREATED).json({
            newTribunal
        })
    }  

  @Get()
  getHello(): Promise<Tribunal[]> {
    return this.tribunalService.findAll();
  }
}