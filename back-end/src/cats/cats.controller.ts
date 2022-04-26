import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
//import { CatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}    

  @Post()
    async createBook(@Res() response, @Body() cat: Cat) {
        const newCat = await this.catService.createCat(cat);
        return response.status(HttpStatus.CREATED).json({
            newCat
        })
    }  

  @Get()
  getHello(): Promise<Cat[]> {
    return this.catService.findAll();
  }
}