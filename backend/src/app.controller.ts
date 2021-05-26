import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Word } from './entities/word.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:number')
  async getSuggestedWords(@Param('number') number: string): Promise<Word[]> {
    return await this.appService.getCartesianProduct(number);
  }
}
