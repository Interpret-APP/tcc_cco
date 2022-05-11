import { Injectable, Inject } from '@nestjs/common';
import { Tribunal } from './tribunal.entity';


@Injectable()
export class TribunaisService {
  constructor(
    @Inject('TRIBUNAIS_REPOSITORY')
    private readonly tribunaisRepository: typeof Tribunal
  ) {}

  async findAll(): Promise<Tribunal[]> {
    return this.tribunaisRepository.findAll<Tribunal>();
  }

  async createTribunal(tribunal: any): Promise<Tribunal> {
    return this.tribunaisRepository.create<Tribunal>(tribunal);
  }
}