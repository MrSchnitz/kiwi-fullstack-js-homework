import { Injectable } from '@nestjs/common';
import { cartesian, NUMBERS_TO_LETTERS } from './utils/helpers';
import { InjectRepository } from '@nestjs/typeorm';
import { T9Repository } from './app.repository';
import { Word } from './entities/word.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(T9Repository)
    private readonly t9Repository: T9Repository,
  ) {}

  async getCartesianProduct(numb: string): Promise<Word[]> {
    const arr: string[][] = numb
      .split('')
      .map((n: string) => NUMBERS_TO_LETTERS[n]);

    const car: string[] =
      numb.length < 2
        ? cartesian(...arr)
            .toString()
            .toLowerCase()
            .split(',')
        : cartesian(...arr).map((a: string[]) =>
            a
              .join()
              .toLowerCase()
              .replace(/,/g, ''),
          );

    return await this.t9Repository.getActualWords(car);
  }
}
