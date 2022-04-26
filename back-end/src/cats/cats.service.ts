import { Injectable, Inject } from '@nestjs/common';
//import { CatDto } from './dto/create-cat.dto';
import { Cat } from './cat.entity';


@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private readonly catsRepository: typeof Cat
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }

  async createCat(cat: any): Promise<Cat> {
    return this.catsRepository.create<Cat>(cat);
  }
}